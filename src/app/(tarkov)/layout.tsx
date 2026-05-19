import type { Metadata } from "next";
import Link from "next/link";
import StreamStatus from "@/components/StreamStatus";

export const metadata: Metadata = {
  title: "Тарков | Каменизм",
  description: "Инструментарий для выживания в Escape from Tarkov",
};

export default function TarkovLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Фиксируем ширину всей страницы через 100vw. 
        Это гарантирует, что шапка займет одинаковую площадь 
        и на интерактивной карте квестов, и на страницах со скроллом.
      */}
      <style>{`
        html {
          width: 100vw !important;
          overflow-x: hidden !important;
        }
      `}</style>

      <header className="w-full border-b border-white/5 bg-kamen-stone/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="group flex items-center gap-2">
              <span className="font-black text-xl tracking-tighter text-white group-hover:text-kamen-action transition-colors">
                ФУЛЛ КАМЕНЬ
              </span>
            </Link>
            
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/tarkov/maps" className="text-[15px] uppercase font-bold text-kamen-slate hover:text-white transition-colors">Карты</Link>
              <Link href="/tarkov/quests" className="text-[15px] uppercase font-bold text-kamen-slate hover:text-white transition-colors">Квесты</Link>
              <Link href="/tarkov/ammo" className="text-[15px] uppercase font-bold text-kamen-slate hover:text-white transition-colors">Патроны</Link>
              <Link href="/tarkov/hideout" className="text-[15px] uppercase font-bold text-kamen-slate hover:text-white transition-colors">Убежище</Link>
              <Link href="/tarkov/tracker" className="text-[15px] uppercase font-bold text-kamen-slate hover:text-white transition-colors">Трекер предметов</Link>
              <Link href="/tarkov/crafts" className="text-[15px] uppercase font-bold text-kamen-slate hover:text-white transition-colors">Крафты</Link>
              <Link href="/tarkov/barters" className="text-[15px] uppercase font-bold text-kamen-slate hover:text-white transition-colors">Бартеры</Link>
            </nav>
          </div>

          {/* СТАТУС СТРИМА */}
          <div className="flex items-center">
            <StreamStatus />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}