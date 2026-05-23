'use client';

import { useState, useEffect, useTransition } from 'react';
import { searchEftItemsAction } from '@/lib/search-actions';
import { EftItem } from '@/lib/eft-api';

export function ItemSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<EftItem[]>([]);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= 2) {
        console.log(`🔍 X-RAY [CLIENT]: Начинаю поиск для "${query}"...`);
        startTransition(async () => {
          try {
            setError(null);
            const data = await searchEftItemsAction(query);
            console.log(`✅ X-RAY [CLIENT]: Получено ${data.length} результатов.`);
            setResults(data);
          } catch (err) {
            console.error("❌ X-RAY [CLIENT ERROR]: Ошибка при поиске:", err);
            setError("Не удалось выполнить поиск. Попробуйте позже.");
            setResults([]);
          }
        });
      } else {
        setResults([]);
        setError(null);
        console.log("⏸️ X-RAY [CLIENT]: Запрос слишком короткий, очищаю результаты.");
      }
    }, 300); // Debounce: Ждем 300мс пока юзер не перестанет печатать

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="w-full">
      <div className="relative mb-6">
        {/* Иконка поиска (Лупа) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск предмета (например: салева, m4a1, ledx)..."
          className="w-full py-4 pr-4 pl-12 bg-card-menu border border-lines-hover text-text-primary rounded-lg focus:outline-none focus:border-primary transition-colors font-blender-book"
        />
        {isPending && <div className="absolute right-4 top-1/2 -translate-y-1/2"><span className="text-primary animate-pulse font-blender-medium">Радар...</span></div>}
      </div>

      {error && (
        <p className="text-destructive text-center py-4 font-blender-medium">{error}</p>
      )}

      {!error && results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {results.map((item) => (
            <div key={item.id} className="bg-card-menu p-4 border border-lines-hover/50 rounded-lg flex flex-col items-center text-center hover:border-lines-hover transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={item.gridImageLink} 
                alt={item.name}
                className="w-16 h-16 object-contain mb-2 drop-shadow-md"
                loading="lazy"
              />
              <span className="text-xs text-primary font-blender-medium block mb-1 truncate w-full" title={item.name}>{item.shortName}</span>
              <span className="text-xs text-text-secondary font-blender-book">{item.lastLowPrice ? `${item.lastLowPrice.toLocaleString('ru-RU')} ₽` : 'Нет цены'}</span>
            </div>
          ))}
        </div>
      )}
      
      {query.length >= 2 && results.length === 0 && !isPending && !error && (
        <div className="p-4 text-center text-text-muted font-blender-book">Предметы не найдены. Попробуйте другой запрос.</div>
      )}
    </div>
  );
}