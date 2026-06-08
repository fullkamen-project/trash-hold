"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { type MenuItem } from '@/data/headerConfig';

interface HeaderNavigationProps {
  menuItems: MenuItem[];
}

function NavItem({ item, pathname }: { item: MenuItem; pathname: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = item.path ? pathname?.startsWith(item.path) : false;

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Кнопка-триггер или обычная ссылка */}
      {item.children ? (
        <Link href={item.path || '#'} className={`flex cursor-pointer items-center justify-start gap-1 rounded-sm py-1 pl-2 pr-1 transition-colors duration-300 font-blender-medium text-sm uppercase leading-4 ${
          isActive ? 'bg-[var(--primary)] text-[#0D0D0F]' : 'text-text-secondary hover:text-[var(--primary)] hover:bg-black/20'
        }`}>
          <span>{item.label}</span>
          <ChevronDown className={`h-3 w-3 flex-shrink-0 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
        </Link>
      ) : (
        <Link
          href={item.path || '#'}
          className={`flex items-center justify-start gap-1 rounded-sm py-1 pl-2 pr-1 transition-colors duration-300 font-blender-medium text-sm uppercase leading-4 ${
            isActive
              ? 'bg-[var(--primary)] text-[#0D0D0F]'
              : 'text-text-secondary hover:text-[var(--primary)] hover:bg-black/20'
          }`}
        >
          <span>{item.label}</span>
        </Link>
      )}

      {/* Выпадающее меню (Dropdown Container) */}
      {item.children && isHovered && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-50 flex w-[160px] flex-col rounded border border-[#52525B] bg-card-menu py-2 transition-colors duration-300 hover:border-[var(--primary)]">
          {/* Невидимый "мост" для мышки, чтобы меню не закрывалось при переходе */}
          <div className="absolute -top-4 left-0 h-4 w-full bg-transparent" />
          
          {item.children.map((child) => (
            <Link
              key={child.id}
              href={child.path || '#'}
              className="group flex h-6 w-full items-center justify-start gap-2 px-3.5 transition-colors duration-200 hover:bg-[#0D0D0F]"
            >
              {/* Иконка: Строго серая по умолчанию, primary при ховере */}
              {child.iconUrl && (
                <div
                  className="icon-mask h-4 w-4 flex-shrink-0 text-text-secondary transition-colors duration-200 group-hover:text-[var(--primary)]"
                  style={{
                    maskImage: `url(${child.iconUrl})`,
                    WebkitMaskImage: `url(${child.iconUrl})`,
                    maskSize: 'contain',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                />
              )}
              
              {/* Текст: Строго серый по умолчанию, primary при ховере */}
              <span className="truncate font-blender-medium text-[11pt] uppercase leading-3 text-text-secondary transition-colors duration-200 group-hover:text-[var(--primary)]">
                {child.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function HeaderNavigation({ menuItems }: HeaderNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="flex h-9 items-center gap-3.5">
      {menuItems.map((item) => {
        return <NavItem key={item.id} item={item} pathname={pathname || ''} />;
      })}
    </nav>
  );
}