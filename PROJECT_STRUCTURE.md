# 🗺️ Архитектура Проекта ФУЛЛ КАМЕНЬ (ЦТА)

Данный файл является картой путей проекта (Next.js 14 App Router) и используется для контроля роутинга, связей и релинков.

## 📂 Корень проекта
```text
c:\Users\vadim\Desktop\fullkamengg\
├── .env.local                 # Секретные ключи API (Twitch, YouTube и др.)
├── next.config.mjs            # Конфигурация Next.js
├── tailwind.config.ts         # Конфиг Tailwind CSS (если используется поверх v4)
├── tsconfig.json              # Конфиг TypeScript
├── package.json               # Зависимости и скрипты
├── README.md                  # Технический паспорт дизайн-системы
├── CHANGELOG.md               # История версий и изменений
└── PROJECT_STRUCTURE.md       # (Текущий файл) Карта файлов и директорий
```

## 📂 Статические файлы (public)
```text
public/
├── icons/                 # Огромная структурированная база системных и внутриигровых иконок
├── fonts/                 # Локальные шрифты (BlenderPro)
└── games/                 # Ассеты для хаба (обложки, видео, логотипы игр)
```

## 📂 Исходный код (src)
```text
src/
├── actions/
│   └── youtube.ts             # Server Actions для работы с API YouTube
│   └── search-actions.ts      # Server Actions для поиска предметов EFT
│
├── data/
│   ├── games.ts               # Данные для карточек игр на главной странице
│   └── headerConfig.ts        # Конфигурация хедера (меню, поиск, валюта, хлебные крошки) для разных игр
│
├── hooks/
│   └── useIntersectionObserver.ts # Хук для ленивой загрузки (видео в карточках)
│
├── lib/
│   ├── eft-api.ts             # Интеграция с tarkov.dev GraphQL
│
├── components/
│   ├── layout/                # Глобальный каркас приложения
│   │   ├── Header.tsx         # Умная шапка сайта (2 строки)
│   │   ├── header-modules/    # Микро-модули для сборки Хедера
│   │   │   ├── PlatformLogo.tsx
│   │   │   ├── HeaderNavigation.tsx
│   │   │   ├── GameLogo.tsx   # Интерактивный GameSwitcher
│   │   │   ├── TacticalSearch.tsx     # Глобальный поиск
│   │   │   ├── SearchItemCard.tsx     # Карточка предмета в поиске
│   │   │   ├── SearchEmptyState.tsx   # Состояние "Ничего не найдено"
│   │   │   ├── PlayerTelemetry.tsx    # Панель телеметрии и профиля
│   │   │   ├── ProfileSettingsModal.tsx # Настройки профиля ЧВК
│   │   │   ├── ProfileResetModal.tsx    # Модалка сброса прогресса
│   │   │   ├── ProfileDeleteModal.tsx   # Модалка удаления ЧВК
│   │   │   ├── usePlayerStore.ts      # Zustand-хранилище профилей
│   │   │   ├── StreamStatus.tsx
│   │   │   ├── NewbieButton.tsx
│   │   │   └── NewbieModal.tsx
│   │   └── Footer.tsx         # Подвал сайта
│   ├── ui/                    # Переиспользуемые "глупые" компоненты (Dumb components)
│   │   ├── NavLink.tsx        # Ссылка с подсветкой активного состояния
│   │   ├── HubCard.tsx        # Карточка для внутренних хабов
│   │   ├── GameCard.tsx       # Карточка игры для главной страницы
│   │   ├── Breadcrumbs.tsx    # Хлебные крошки (EFT Хаб / Прогресс)
│   │   └── Carousel.tsx       # Свайп-карусель
│   ├── providers/             # Провайдеры контекста
│   │   └── ThemeProvider.tsx  # Управление глобальной темой (классы theme-*)
│   ├── ColorPaletteDevTool.tsx# Инструмент разработчика для настройки палитры "на лету"
│   └── PlaceholderPage.tsx    # Универсальная страница-заглушка "В разработке"
│
└── app/                       # РОУТИНГ (App Router)
    ├── globals.css            # Глобальные стили, шрифты, токены темы и анимации
    ├── layout.tsx             # Корневой Layout (влияет на весь сайт, включает ThemeProvider и Header)
    ├── template.tsx           # Глобальная анимация fade-in при переходах
    ├── page.tsx               # ГЛАВНАЯ СТРАНИЦА (Карусель игр)
    │
    ├── api/                   # API ROUTES
    │   └── twitch-status/
    │       └── route.ts       # Эндпоинт для проверки статуса Twitch
    │
    ├── [gameId]/              # ДИНАМИЧЕСКИЙ РОУТИНГ (FSD)
    │   └── page.tsx           # Универсальный обработчик хабов (заменяет статические папки)
    │
    ├── eft/                   # РАЗДЕЛ: ESCAPE FROM TARKOV (Специфичный роутинг)
    │   ├── layout.tsx         # Локальная обертка EFT (Хлебные крошки)
    │   ├── page.tsx           # Хаб EFT (Сетка HubCard, импортируется в [gameId])
    │   ├── achievements/
    │   │   └── page.tsx       # Страница достижений (Сюжет, Престиж, Ивенты)
    │   └── progression/
│   │   └── page.tsx       # Хаб прогресса (Достижения, Трекер, Нужные предметы)
│   ├── keepitems/
│   │   └── page.tsx       # Нужные предметы (с интеграцией tarkov.dev)
│   └── tracker/
│       └── page.tsx       # Заглушка трекера предметов
```
*(Папка `public` опущена в этой карте для экономии места, так как ее структура описана в `README.md`)*