'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { Command, ArrowRight, Loader2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getHeaderConfig, type MenuItem } from '@/data/headerConfig';
import Link from 'next/link';
import { searchEftItemsAction } from '@/actions/search-actions';
import { SearchItemCard, EftItem } from './SearchItemCard';
import { SearchEmptyState } from './SearchEmptyState';
import { usePlayerStore } from './usePlayerStore';

// Хелпер: должна ли иконка сохранять свои оригинальные цвета (без CSS-маски)
const isColoredIcon = (item: MenuItem, urlToUse?: string) => {
  if (item.coloredIcon) return true;
  const targetUrl = urlToUse || item.iconUrl;
  if (targetUrl?.endsWith('.webp')) return true;
  if (targetUrl?.includes('/02-quests/')) return true;
  if (targetUrl?.includes('/gun-modes/')) return true;
  return false;
};

export function TacticalSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  const [isMac, setIsMac] = useState(false);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  // Состояния для поиска предметов EFT
  const [itemResults, setItemResults] = useState<EftItem[]>([]);
  const [isPending, startTransition] = useTransition();

  // Подключаем хранилище для определения фракции (влияет на иконки оружия)
  const profiles = usePlayerStore((state) => state.profiles);
  const activeProfileId = usePlayerStore((state) => state.activeProfileId);
  const activeProfile = profiles.find((p) => p.id === activeProfileId) || profiles[0];
  const faction = activeProfile?.faction || 'BEAR';

  // Получаем динамический конфиг для текущего раздела
  const config = getHeaderConfig(pathname || '');

  useEffect(() => {
    // Определяем платформу для хоткея
    setIsMac(navigator.userAgent.toUpperCase().indexOf('MAC') >= 0);

    // Глобальный слушатель клавиатуры (CMD+Q / CTRL+Q для фокуса)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'q') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      // Закрытие по ESC
      if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Закрытие дропдауна при клике мимо него
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Рекурсивно собираем плоский массив абсолютно ВСЕХ пунктов меню (на любую глубину)
  const getAllMenuItems = (items: MenuItem[]): MenuItem[] => {
    let result: MenuItem[] = [];
    for (const item of items) {
      result.push(item);
      if (item.children) {
        result = result.concat(getAllMenuItems(item.children));
      }
    }
    return result;
  };
  const allMenuItems = getAllMenuItems(config.menuItems);

  // Если запрос пуст — показываем только основные разделы. Иначе ищем по всем пунктам.
  const filteredResults = query.trim().length === 0
    ? config.menuItems
    : allMenuItems.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));

  // Эффект для дебаунса и поиска предметов
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= 2) {
        startTransition(async () => {
          try {
            const data = await searchEftItemsAction(query);
            // Защита от краша: проверяем, что data это массив
            setItemResults(Array.isArray(data) ? (data as unknown as EftItem[]) : []);
          } catch (err) {
            console.error("Ошибка при поиске предметов:", err);
            setItemResults([]);
          }
        });
      } else {
        setItemResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-full max-w-[724px]" ref={dropdownRef}>
      {/* Строка поиска (Обертка) */}
      <div className="group flex items-center justify-between w-full h-14 px-3.5 bg-black/20 rounded border border-[#222225] overflow-hidden transition-colors duration-300 focus-within:border-[var(--primary)]">
        
        {/* Левая иконка (Лупа) */}
        <div 
          className="icon-mask w-6 h-6 flex-shrink-0 text-[#222225] transition-colors duration-300 group-focus-within:text-[var(--primary)]"
          style={{ WebkitMaskImage: 'url(/icons/eft/search-icon.svg)', maskImage: 'url(/icons/eft/search-icon.svg)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}
        />
        
        {/* Поле ввода */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="ГЛОБАЛЬНЫЙ ТАКТИЧЕСКИЙ ПОИСК..."
          className="flex-1 h-full bg-transparent outline-none px-4 text-center uppercase font-blender-medium text-lg text-[#222225] placeholder:text-[#222225] focus:text-[var(--primary)] placeholder:group-focus-within:text-[var(--primary)]"
        />
        
        {/* Правая иконка (Хоткей CTRL+Q) */}
        <div 
          className="icon-mask w-10 h-5 flex-shrink-0 text-[#222225] transition-colors duration-300 group-focus-within:text-[var(--primary)] group-focus-within:opacity-50"
          style={{ WebkitMaskImage: 'url(/icons/eft/ctrl-q-icon.svg)', maskImage: 'url(/icons/eft/ctrl-q-icon.svg)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}
        />
      </div>

      {/* Выпадающее меню результатов */}
      {isOpen && (
        // Расширяем контейнер, чтобы вместить сетку (до 1100px), центрируя его относительно инпута
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[96vw] max-w-[1100px] mt-2 bg-card-menu/95 backdrop-blur-xl border border-[color-mix(in_srgb,var(--primary)_50%,transparent)] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden z-50 animate-[fade-in-up_0.2s_ease-out_both]">
          
          <div className="max-h-[450px] overflow-y-auto">
            
            {/* СЕКЦИЯ: РАЗДЕЛЫ ХАБА (Навигация) */}
            {filteredResults.length > 0 && (
              <div className="py-2">
                <div className="px-4 py-1.5 bg-base/50 border-b border-lines-hover/50 mb-1">
                  <span className="text-[10px] font-blender-medium tracking-widest uppercase text-text-muted">
                    Разделы Хаба
                  </span>
                </div>
                <ul>
                  {filteredResults.map((item) => (
                    <li key={item.id}>
                      <Link 
                        href={item.path || '#'}
                        onClick={() => { setIsOpen(false); setQuery(''); }}
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] text-text-secondary hover:text-text-primary transition-colors group/item"
                      >
                        <div className="flex items-center gap-3">
                          {(() => {
                            const iconToUse = (faction === 'USEC' && item.iconUrlUsec) ? item.iconUrlUsec : ((faction === 'BEAR' && item.iconUrlBear) ? item.iconUrlBear : item.iconUrl);
                            return iconToUse ? (
                              isColoredIcon(item, iconToUse) ? (
                                <img src={iconToUse} alt="" className="h-4 w-4 flex-shrink-0 object-contain" />
                              ) : (
                                <div 
                                  className={`h-4 w-4 flex-shrink-0 text-text-secondary transition-colors group-hover/item:text-[var(--primary)] ${item.iconClass || 'icon-mask'}`}
                                  style={{ maskImage: `url(${iconToUse})`, WebkitMaskImage: `url(${iconToUse})`, maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat' }}
                                />
                              )
                            ) : (
                              <Command className="w-4 h-4 opacity-40 group-hover/item:text-[var(--primary)] group-hover/item:opacity-100 transition-colors" />
                            );
                          })()}
                          <span className="font-blender-medium uppercase tracking-wider text-sm">
                            {item.label}
                          </span>
                        </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 group-hover/item:text-[var(--primary)] transition-all -translate-x-2 group-hover/item:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* СЕКЦИЯ: ПРЕДМЕТЫ EFT */}
            {itemResults.length > 0 && (
              <div className="py-2 border-t border-lines-hover/50">
                <div className="px-4 py-1.5 bg-base/50 border-b border-lines-hover/50 mb-1">
                  <span className="text-[10px] font-blender-medium tracking-widest uppercase text-text-muted">
                    База предметов EFT
                  </span>
                </div>
                <div className="px-4 pb-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[28px] mt-4 justify-items-center">
                    {/* Выводим до 12 карточек с помощью нового компонента */}
                    {itemResults.slice(0, 12).map((item) => (
                      <SearchItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* СОСТОЯНИЕ: ЗАГРУЗКА */}
            {isPending && (
              <div className="px-4 py-6 flex flex-col items-center justify-center gap-3 text-[var(--primary)] border-t border-lines-hover/50">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-[10px] font-blender-medium tracking-widest uppercase">
                  Синхронизация с базой...
                </span>
              </div>
            )}

            {/* СОСТОЯНИЕ: НИЧЕГО НЕ НАЙДЕНО */}
            {query.length > 0 && filteredResults.length === 0 && itemResults.length === 0 && !isPending && (
              <div className="p-4">
                <SearchEmptyState />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
