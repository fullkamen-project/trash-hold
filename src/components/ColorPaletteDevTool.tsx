'use client';

import React, { useState, useEffect } from 'react';

const PALETTE = [
  { id: '--kamen-dark', label: 'Dark (Фон сайта)', defaultHex: '#0D0D0F' },
  { id: '--kamen-stone', label: 'Stone (Фон карточек)', defaultHex: '#1A1A1A' },
  { id: '--kamen-slate', label: 'Slate (Серый текст)', defaultHex: '#8E8E8E' },
  { id: '--kamen-action', label: 'Action (Акцентный)', defaultHex: '#00FF41' },
  { id: '--kamen-danger', label: 'Danger (Красный)', defaultHex: '#FF0000' },
  { id: '--kamen-heading', label: 'Heading (Заголовки)', defaultHex: '#FFFFFF' },
  { id: '--kamen-icon', label: 'Icon (Иконки)', defaultHex: '#00FF41' },
];

export function ColorPaletteDevTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState<Record<string, string>>({});

  // При первой загрузке берем цвета из конфига
  useEffect(() => {
    const initialColors: Record<string, string> = {};
    PALETTE.forEach(c => {
      initialColors[c.id] = c.defaultHex;
    });
    setColors(initialColors);
  }, []);

  // Функция изменения цвета на лету
  const handleChange = (id: string, value: string) => {
    setColors(prev => ({ ...prev, [id]: value }));
    document.documentElement.style.setProperty(id, value);
  };

  // Если закрыто - показываем только маленькую кнопку
  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-[#161618] border border-[#222225] text-white hover:text-kamen-action hover:border-kamen-action px-4 py-2 text-[10px] uppercase font-bold font-mono transition-all shadow-xl"
      >
        🎨 Палитра
      </button>
    );
  }

  // Если открыто - показываем полную панель
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-[#121214]/95 backdrop-blur-md border border-[#222225] p-5 font-mono text-xs w-80 text-white shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black text-sm uppercase tracking-wider text-kamen-action">Настройка цветов</h3>
        <button onClick={() => setIsOpen(false)} className="text-kamen-slate hover:text-white transition-colors">✕</button>
      </div>
      
      <div className="flex flex-col gap-4">
        {PALETTE.map((item) => (
          <div key={item.id} className="flex justify-between items-center group">
            <div className="flex flex-col">
              <span className="font-bold text-white group-hover:text-kamen-action transition-colors">{item.label}</span>
              <span className="text-[9px] text-kamen-slate uppercase">{item.id}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase text-kamen-slate w-12">{colors[item.id]}</span>
              <div className="relative w-7 h-7 rounded overflow-hidden border border-[#222225]">
                <input 
                  type="color" 
                  value={colors[item.id] || item.defaultHex}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                  className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-[9px] text-kamen-slate leading-relaxed uppercase border-t border-[#222225] pt-4">
        * Изменения применяются мгновенно. Перенесите финальные HEX коды в globals.css после настройки.
      </div>
    </div>
  );
}