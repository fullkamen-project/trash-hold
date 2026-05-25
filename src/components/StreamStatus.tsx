'use client';

import { useState, useEffect } from 'react';

export default function StreamStatus() {
  const [isLive, setIsLive] = useState(false);
  // Состояние для отслеживания загрузки, чтобы не показывать "ОФФЛАЙН" до первого запроса
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchStreamStatus = async () => {
      try {
        const response = await fetch('/api/twitch-status', { cache: 'no-store' }); // Отключаем кэширование для актуального статуса
        const data = await response.json();
        if (isMounted) setIsLive(data.isLive);
      } catch (error) {
        console.error("Ошибка при проверке статуса стрима:", error);
      } finally {
        // В любом случае убираем состояние загрузки после первой попытки
        if (isMounted) setIsLoading(false);
      }
    };

    // Задержка 3 секунды перед первым запросом, чтобы сайт загружался плавно
    const initialDelay = setTimeout(fetchStreamStatus, 3000);
    // Делаем запросы редко: раз в 5 минут (300000 мс)
    const interval = setInterval(fetchStreamStatus, 300000);

    return () => {
      isMounted = false;
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  // Настройки для ОНЛАЙН (Зеленый)
  const liveStyles = {
    border: 'border-green-500/50',
    bg: 'bg-green-500/10',
    shadow: 'shadow-[0_0_20px_rgba(34,197,94,0.4)]',
    dot: 'bg-green-500',
    text: 'СТРИМ ОНЛАЙН',
    glow: 'shadow-[0_0_10px_#22c55e]'
  };

  // Настройки для ОФФЛАЙН (Красный)
  const offlineStyles = {
    border: 'border-red-500/30',
    bg: 'bg-red-500/5',
    shadow: 'shadow-[0_0_15px_rgba(239,68,68,0.1)]',
    dot: 'bg-red-500/60',
    text: 'СТРИМ ОФФЛАЙН',
    glow: ''
  };

  // Настройки для состояния ЗАГРУЗКИ (Серый, нейтральный)
  const loadingStyles = {
    border: 'border-white/10',
    bg: 'bg-white/5',
    shadow: '',
    dot: 'bg-white/20 animate-pulse',
    text: 'СИНХРОНИЗАЦИЯ...',
    glow: ''
  };

  const s = isLoading ? loadingStyles : (isLive ? liveStyles : offlineStyles);

  return (
    <a 
      href="https://twitch.tv/fullkamen" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group flex items-center gap-3 px-4 py-2 border transition-all duration-500 ${s.border} ${s.bg} ${s.shadow} hover:brightness-125`}
    >
      <div className="relative flex h-2.5 w-2.5">
        {/* Пульсация только если ОНЛАЙН */}
        {isLive && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${s.dot} ${s.glow}`}></span>
      </div>

      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">
        {s.text}
      </span>
    </a>
  );
}