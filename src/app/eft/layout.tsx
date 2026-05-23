import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import Image from "next/image";
import StreamStatus from "@/components/StreamStatus";

export default function EftLayout({
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

      <header className="w-full border-b border-white/5 bg-card-menu/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="group flex items-center gap-2" title="На главную">
              <Image
                src="/images/cta-logo.svg"
                alt="ЦТА Лого"
                width={160}
                height={56}
                className="group-hover:brightness-125 transition-all"
              />
            </Link>
            
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="/eft/maps">Карты</NavLink>
              <NavLink href="/eft/quests">Квесты</NavLink>
              <NavLink href="/eft/ammo">Патроны</NavLink>
              <NavLink href="/eft/hideout">Убежище</NavLink>
              <NavLink href="/eft/tracker">Трекер предметов</NavLink>
              <NavLink href="/eft/crafts">Крафты</NavLink>
              <NavLink href="/eft/barters">Бартеры</NavLink>
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