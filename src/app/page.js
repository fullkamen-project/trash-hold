"use client";

import { useReducer, useEffect } from "react";
import { GameCard } from "@/components/GameCard";
import Image from "next/image";

const GAMES_DATA = [
  {
    id: "eft",
    title: "Escape From Tarkov",
    subtitle: "Минимум кликов — Максимум выживания",
    status: "LIVE",
    bg: "/games/eft/bg.jpg",
    bgHover: "/games/eft/bg-hover.jpg",
    bgInactive: "/games/eft/bg-inactive.jpg",
    videoWebm: "/games/eft/hover.webm",
    videoMp4: "/games/eft/hover.mp4",
    logo: {
      type: "multi-state",
      default: "/games/eft/eft-logo-default.webp",
      hover: "/games/eft/eft-logo-hover.webp",
      inactive: "/games/eft/eft-logo-inactive.webp",
      width: 149,
      height: 56,
    },
    hoverClass: "eft-hover",
    themeClass: "",
    isInactive: false,
  },
  {
    id: "frago",
    title: "Fragmentary Order",
    subtitle: "В разработке",
    status: "LIVE",
    bg: "/games/frago/bg.jpg",
    bgHover: "/games/frago/bg-hover.jpg",
    bgInactive: "/games/frago/bg-inactive.jpg",
    videoWebm: "/games/frago/hover.webm",
    videoMp4: "/games/frago/hover.mp4",
    logo: {
      type: "mask",
      src: "/games/frago/frago-logo.svg",
      width: 136,
      height: 21,
    },
    hoverClass: "frago-hover",
    themeClass: "theme-frago",
    isInactive: false,
  },
  {
    id: "abi",
    title: "Arena Breakout: Infinite",
    subtitle: "Тактический симулятор",
    status: "SOON",
    bg: "/games/abi/bg.jpg",
    bgHover: "/games/abi/bg-hover.jpg",
    bgInactive: "/games/abi/bg-inactive.jpg",
    videoWebm: "/games/abi/hover.webm",
    videoMp4: "/games/abi/hover.mp4",
    logo: {
      type: "mask",
      src: "/games/abi/logo.svg",
      width: 140, // Настройте ширину под логотип ABI
      height: 30, // Настройте высоту под логотип ABI
    },
    hoverClass: "abi-hover",
    themeClass: "theme-abi",
    isInactive: false,
  },
];

const TYPING_TEXT_1 = "ИНИЦИАЛИЗАЦИЯ МОДУЛЕЙ";
const TYPING_TEXT_2 = "ПРОВЕРКА ЦЕЛОСТНОСТИ ДАННЫХ...";
const TYPING_SPEED = 30; // ms per character
const TYPING_DELAY_BETWEEN_LINES = 200; // ms
const TOTAL_ANIMATION_DURATION = (TYPING_TEXT_1.length * TYPING_SPEED) + TYPING_DELAY_BETWEEN_LINES + (TYPING_TEXT_2.length * TYPING_SPEED);

// --- Reducer для управления состоянием прелоадера ---
const initialState = {
  isLoading: true,
  typedText1: '',
  typedText2: '',
  showCursor1: true,
  showCursor2: false,
  progress: 0,
  isLoadComplete: false,
};

function preloaderReducer(state, action) {
  switch (action.type) {
    case 'SET_TYPED_TEXT_1':
      return { ...state, typedText1: action.payload };
    case 'SET_TYPED_TEXT_2':
      return { ...state, typedText2: action.payload };
    case 'FINISH_TYPING_1':
      return { ...state, showCursor1: false, showCursor2: true };
    case 'FINISH_TYPING_2':
      return { ...state, showCursor2: false };
    case 'SET_PROGRESS':
      return { ...state, progress: action.payload };
    case 'SET_LOAD_COMPLETE':
      return { ...state, isLoadComplete: true };
    case 'HIDE_PRELOADER':
      return { ...state, isLoading: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function HomePage() {
  const [state, dispatch] = useReducer(preloaderReducer, initialState);
  const { isLoading, typedText1, typedText2, showCursor1, showCursor2, progress, isLoadComplete } = state;

  useEffect(() => {
    // Overall preloader timer
    const preloaderTimeout = setTimeout(() => {
      dispatch({ type: 'HIDE_PRELOADER' });
    }, 2200); // Увеличено, чтобы увидеть вспышку

    let typingInterval1;
    let typingInterval2;
    let secondLineDelayTimeout;
    let progressInterval;
    let currentText1 = '', currentText2 = '', i1 = 0, i2 = 0;

    // Progress bar animation
    const startTime = Date.now();
    progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsedTime / TOTAL_ANIMATION_DURATION) * 100));
      dispatch({ type: 'SET_PROGRESS', payload: currentProgress });
      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        dispatch({ type: 'SET_LOAD_COMPLETE' });
      }
    }, 30);

    // Start typing first line
    typingInterval1 = setInterval(() => {
      if (i1 < TYPING_TEXT_1.length) {
        currentText1 += TYPING_TEXT_1[i1];
        dispatch({ type: 'SET_TYPED_TEXT_1', payload: currentText1 });
        i1++;
      } else {
        clearInterval(typingInterval1);
        dispatch({ type: 'FINISH_TYPING_1' });

        // Start typing second line after a delay
        secondLineDelayTimeout = setTimeout(() => {
          typingInterval2 = setInterval(() => {
            if (i2 < TYPING_TEXT_2.length) {
              currentText2 += TYPING_TEXT_2[i2];
              dispatch({ type: 'SET_TYPED_TEXT_2', payload: currentText2 });
              i2++;
            } else {
              clearInterval(typingInterval2);
              dispatch({ type: 'FINISH_TYPING_2' });
            }
          }, TYPING_SPEED);
        }, TYPING_DELAY_BETWEEN_LINES);
      }
    }, TYPING_SPEED);

    return () => {
      clearTimeout(preloaderTimeout);
      clearInterval(typingInterval1);
      clearInterval(typingInterval2);
      clearTimeout(secondLineDelayTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-base flex items-center justify-center font-blender-book p-4 lg:p-8">
      {/* ЛОГОТИП ПРОЕКТА */}
      <div className="absolute top-[21px] left-1/2 -translate-x-1/2 z-40">
        <Image
          src="/images/cta-logo.svg"
          alt="ЦТА"
          width={160}
          height={56}
          className="w-[120px] md:w-[160px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          priority
        />
      </div>

      {/* ТАКТИЧЕСКИЙ ПРЕЛОАДЕР */}
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-base transition-opacity duration-500 ${!isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="flex gap-2 mb-4">
          <div className="w-[14px] h-[16px] bg-primary animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="w-[14px] h-[16px] bg-primary animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="w-[14px] h-[16px] bg-primary animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
        <div className="font-blender-medium text-text-secondary uppercase tracking-widest text-[12pt]">
          ЗАГРУЗКА СИСТЕМЫ ХАБА...
        </div>
        <div className="font-blender-medium text-primary uppercase tracking-widest text-[12pt] mt-2 text-center">
          <span className="h-5 inline-block">{typedText1}</span>
          {showCursor1 && <span className="animate-pulse ml-1 opacity-75">_</span>}
        </div>
        <div className="font-blender-medium text-primary uppercase tracking-widest text-[12pt] mt-1 text-center">
          <span className="h-5 inline-block">{typedText2}</span>
          {showCursor2 && <span className="animate-pulse ml-1 opacity-75">_</span>}
        </div>

        {/* ИНДИКАТОР ПРОГРЕССА */}
        <div className="w-64 mt-6 bg-lines-hover h-2 border border-text-muted/30">
          <div
            className={`bg-primary h-full transition-all duration-100 ease-linear ${isLoadComplete ? 'animate-flash-success' : ''}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={`font-blender-medium text-primary uppercase tracking-widest text-xs mt-2 ${isLoadComplete ? 'animate-flash-success' : ''}`}>
          {progress}%
        </div>
      </div>

      {/* СЕТКА ХАБА */}
      <div className="tactical-grid">
        {GAMES_DATA.map((game, index) => (
          <GameCard key={game.id} game={game} isLoading={isLoading} index={index} />
        ))}
      </div>
    </main>
  );
}