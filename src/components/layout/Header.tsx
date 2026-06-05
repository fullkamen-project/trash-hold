'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getHeaderConfig } from '@/data/headerConfig';

// Модули Хедера
import { PlatformLogo } from './header-modules/PlatformLogo';
import { HeaderNavigation } from './header-modules/HeaderNavigation';
import { GameLogo } from './header-modules/GameLogo';

// Фичи
import StreamStatus from './header-modules/StreamStatus';
import { PlayerTelemetry } from './header-modules/PlayerTelemetry';
import { TacticalSearch } from './header-modules/TacticalSearch';
import NewbieButton from './header-modules/NewbieButton';
import NewbieModal from './header-modules/NewbieModal';

export function Header() {
  const pathname = usePathname();
  
  // Определяем текущую игру по URL (по умолчанию 'eft')
  const segments = (pathname || '').split('/').filter(Boolean);
  const gameId = segments.length > 0 ? segments[0] : 'eft';
  
  // Подтягиваем словарь ссылок и настроек для активной игры
  const config = getHeaderConfig(pathname || '');

  const isHomePage = pathname === '/';

  // Конфигурация фиче-флагов для точечного включения/отключения модулей
  const features = {
    showPlatformLogo: true,
    showNavigation: !isHomePage,
    showUserControls: !isHomePage, // Стрим и Телеметрия
    showGameLogo: !isHomePage,
    showSearch: !isHomePage,
    showNewbieButton: !isHomePage,
  };

  // Состояние для управления модальным окном
  const [isNewbieModalOpen, setIsNewbieModalOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-base sticky top-0 z-50 transition-colors duration-500 pt-[clamp(12px,1.09vw,21px)] pb-[clamp(12px,1.09vw,21px)] px-4 flex flex-col gap-[clamp(12px,1.09vw,21px)]">
      
      {/* ================= СТРОКА 1: Глобальная навигация ================= */}
      <div className="tactical-grid items-center min-h-[64px] gap-y-4">
        {isHomePage ? (
          <div className="col-span-2 md:col-span-4 xl:col-span-6 flex justify-center">
            {features.showPlatformLogo && <PlatformLogo />}
          </div>
        ) : (
          <>
            {/* Слева: Сквозной логотип ЦТА */}
            {features.showPlatformLogo && (
              <div className="col-span-1 flex justify-start order-1">
                <PlatformLogo />
              </div>
            )}

            {/* По центру: Динамическое меню текущей игры */}
            {features.showNavigation && (
              <div className="hidden xl:flex xl:col-span-4 justify-center order-3 xl:order-2">
                <HeaderNavigation menuItems={config.menuItems} />
              </div>
            )}

            {/* Справа: Телеметрия и Статус стрима */}
            {features.showUserControls && (
              <div className="col-span-1 md:col-start-4 xl:col-start-6 flex items-center justify-end gap-4 order-2 xl:order-3">
                <PlayerTelemetry />
                <StreamStatus />
              </div>
            )}
          </>
        )}
      </div>

      {/* ================= СТРОКА 2: Контекстная панель ================= */}
      {!isHomePage && (
        <div className="tactical-grid items-center min-h-[56px] gap-y-4">
          
          {/* Слева: Динамический логотип текущей игры (с перекраской через маску) */}
          {features.showGameLogo && (
            <div className="col-span-1 flex justify-start order-1">
              <GameLogo gameId={gameId} />
            </div>
          )}
  
          {/* По центру: Глобальный тактический поиск (TacticalSearch) */}
          {features.showSearch && (
            <div className="col-span-2 md:col-span-2 xl:col-span-4 flex justify-center w-full order-3 md:order-2">
              <TacticalSearch />
            </div>
          )}
  
          {/* Справа: Кнопка-модификатор */}
          {features.showNewbieButton && (
            <div className="col-span-1 md:col-start-4 xl:col-start-6 flex justify-end order-2 md:order-3">
              <NewbieButton onClick={() => setIsNewbieModalOpen(true)} />
            </div>
          )}
        </div>
      )}
      </header>

      {/* Модальное окно для новичков */}
      <NewbieModal isOpen={isNewbieModalOpen} onClose={() => setIsNewbieModalOpen(false)} />
    </>
  );
}