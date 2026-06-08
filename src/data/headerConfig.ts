export interface MenuItem {
  id: string;
  label: string;
  path: string;
  iconUrl?: string;
  iconClass?: string;
  children?: MenuItem[];
}

export interface HeaderConfig {
  searchPlaceholder: string;
  menuItems: MenuItem[];
  currencySymbol: string;
  breadcrumbNames?: Record<string, string>;
}

export const HEADER_DICTIONARY: Record<string, HeaderConfig> = {
  eft: {
    searchPlaceholder: 'ГЛОБАЛЬНЫЙ ТАКТИЧЕСКИЙ ПОИСК...',
    breadcrumbNames: {
      eft: 'EFT Хаб',
      progression: 'Прогресс',
      achievements: 'Достижения',
      tracker: 'Трекер',
      keepitems: 'Нужные предметы',
      maps: 'Карты',
      quests: 'Задания',
      ammo: 'Патроны',
      hideout: 'Убежище',
      crafts: 'Крафты',
      barters: 'Бартеры',
      gear: 'Снаряжение',
      weapons: 'Сборки',
      lore: 'Сюжет',
      videos: 'Видео',
    },
    menuItems: [
      // ВЕТКА 1: КАРТЫ (Полностью структурированная)
      { 
        id: 'maps', 
        label: 'Карты', 
        iconClass: 'icon-eft-maps',
        iconUrl: '/icons/eft/maps-icon.svg',
        path: '/eft/maps',
        children: [
          { id: 'lab', label: 'ЛАБОРАТОРИЯ', iconUrl: '/icons/eft/01-maps/lab-map-icon.svg', path: '/eft/maps/lab' },
          { id: 'groundzero', label: 'ЭПИЦЕНТР', iconUrl: '/icons/eft/01-maps/groundzero-map-icon.svg', path: '/eft/maps/groundzero' },
          { id: 'streets', label: 'УЛИЦЫ ТАРКОВА', iconUrl: '/icons/eft/01-maps/streets-map-icon.svg', path: '/eft/maps/streets' },
          { id: 'interchange', label: 'РАЗВЯЗКА', iconUrl: '/icons/eft/01-maps/interchange-map-icon.svg', path: '/eft/maps/interchange' },
          { id: 'customs', label: 'ТАМОЖНЯ', iconUrl: '/icons/eft/01-maps/customs-map-icon.svg', path: '/eft/maps/customs' },
          { id: 'factory', label: 'ЗАВОД', iconUrl: '/icons/eft/01-maps/factory-map-icon.svg', path: '/eft/maps/factory' },
          { id: 'woods', label: 'ЛЕС', iconUrl: '/icons/eft/01-maps/woods-map-icon.svg', path: '/eft/maps/woods' },
          { id: 'reserve', label: 'РЕЗЕРВ', iconUrl: '/icons/eft/01-maps/reserve-map-icon.svg', path: '/eft/maps/reserve' },
          { id: 'lighthouse', label: 'МАЯК', iconUrl: '/icons/eft/01-maps/lighthouse-map-icon.svg', path: '/eft/maps/lighthouse' },
          { id: 'shoreline', label: 'БЕРЕГ', iconUrl: '/icons/eft/01-maps/shoreline-map-icon.svg', path: '/eft/maps/shoreline' },
          { id: 'terminal', label: 'ТЕРМИНАЛ', iconUrl: '/icons/eft/01-maps/terminal-map-icon.svg', path: '/eft/maps/terminal' },
          { id: 'labyrinth', label: 'ЛАБИРИНТ', iconUrl: '/icons/eft/01-maps/labyrinth-map-icon.svg', path: '/eft/maps/labyrinth' },
          { id: 'icebreaker', label: 'ЛЕДОКОЛ', iconUrl: '/icons/eft/01-maps/icebreaker-map-icon.svg', path: '/eft/maps/icebreaker' }
          // { id: 'openworld', label: 'ОБЩАЯ КАРТА', iconUrl: '/icons/eft/01-maps/openworld-map-icon.svg', path: '/eft/maps/openworld' },
          // { id: 'transits', label: 'ПЕРЕХОДЫ', iconUrl: '/icons/eft/01-maps/transits-map-icon.svg', path: '/eft/maps/transits' }
        ]
      },
      // Остальные ветки (пока плоские заглушки, ждут данных)
      { id: 'quests', label: 'Задания', path: '/eft/quests', iconUrl: '/icons/eft/quests-icon.svg' },
      { id: 'items', label: 'Предметы', path: '/eft/items' },
      { id: 'progress', label: 'Прогресс', path: '/eft/progress', iconUrl: '/icons/eft/progress-icon.svg' },
      { id: 'gamesetting', label: 'Сюжет', path: '/eft/gamesetting' },
      { id: 'videos', label: 'Видео', path: '/eft/videos', iconUrl: '/icons/eft/videos-icon.svg' },      
    ],
    currencySymbol: '₽',
  },
  frago: {
    searchPlaceholder: 'ПОИСК ПО БАЗЕ ДАННЫХ СЕКТОРОВ...',
    menuItems: [
      { id: 'sectors', label: 'Секторы', path: '/frago/sectors' },
      { id: 'missions', label: 'Миссии', path: '/frago/missions' },
      { id: 'weapons', label: 'Вооружение', path: '/frago/weapons' },
      { id: 'blueprints', label: 'Чертежи', path: '/frago/blueprints' },
      { id: 'modules', label: 'Модули', path: '/frago/modules' },
    ],
    currencySymbol: 'Кр.',
  },
  abi: {
    searchPlaceholder: 'ПОИСК ТАКТИЧЕСКОЙ ЭКИПИРОВКИ...',
    menuItems: [
      { id: 'maps', label: 'Карты', path: '/abi/maps' },
      { id: 'operations', label: 'Операции', path: '/abi/operations' },
      { id: 'gear', label: 'Снаряжение', path: '/abi/gear' },
      { id: 'weapons', label: 'Оружие', path: '/abi/weapons' },
      { id: 'market', label: 'Рынок', path: '/abi/market' },
    ],
    currencySymbol: 'Koen',
  },
  gzw: {
    searchPlaceholder: 'ПОИСК ДАННЫХ РАЗВЕДКИ...',
    menuItems: [
      { id: 'zones', label: 'Зоны', path: '/gzw/zones' },
      { id: 'contracts', label: 'Контракты', path: '/gzw/contracts' },
      { id: 'arsenal', label: 'Арсенал', path: '/gzw/arsenal' },
      { id: 'stashes', label: 'Схроны', path: '/gzw/stashes' },
      { id: 'factions', label: 'Фракции', path: '/gzw/factions' },
    ],
    currencySymbol: '$',
  },
  actmat: {
    searchPlaceholder: 'ПОИСК АНОМАЛИЙ И АРТЕФАКТОВ...',
    menuItems: [
      { id: 'anomalies', label: 'Аномалии', path: '/actmat/anomalies' },
    ],
    currencySymbol: 'AM',
  },
  arcraiders: {
    searchPlaceholder: 'ПОИСК РЕСУРСОВ И ЧЕРТЕЖЕЙ...',
    menuItems: [
      { id: 'blueprints', label: 'Чертежи', path: '/arcraiders/blueprints' },
    ],
    currencySymbol: 'Cr.',
  },
  marathon: {
    searchPlaceholder: 'ПОИСК КОНТРАКТОВ И ИМПЛАНТОВ...',
    menuItems: [
      { id: 'implants', label: 'Импланты', path: '/marathon/implants' },
    ],
    currencySymbol: 'M',
  },
  wardogs: {
    searchPlaceholder: 'ПОИСК СНАРЯЖЕНИЯ И ЗАКАЗОВ...',
    menuItems: [
      { id: 'contracts', label: 'Заказы', path: '/wardogs/contracts' },
    ],
    currencySymbol: '$',
  },
};

/**
 * Получает конфигурацию хедера на основе текущего пути (pathname).
 * Возвращает дефолтную конфигурацию (EFT), если игра не найдена.
 */
export function getHeaderConfig(pathname: string): HeaderConfig {
  // Разбиваем путь (например, "/eft/maps" -> ["eft", "maps"])
  const segments = pathname.split('/').filter(Boolean);
  const gameId = segments[0] || 'eft';
  
  return HEADER_DICTIONARY[gameId] || HEADER_DICTIONARY['eft'];
}