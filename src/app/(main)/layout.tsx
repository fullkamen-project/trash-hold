import Link from "next/link";
import StreamStatus from "@/components/StreamStatus";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full border-b border-white/5 bg-kamen-stone/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-black text-xl tracking-tighter text-white uppercase">
            ФУЛЛ КАМЕНЬ
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link 
              href="/philosophy" 
              className="text-[10px] font-bold text-kamen-slate hover:text-kamen-action transition-colors uppercase tracking-[0.2em]"
            >
              Философия Каменизма
            </Link>
            {/* СТАТУС СТРИМА */}
            <StreamStatus />
          </nav>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center">
        {children}
      </main>
    </div>
  );
}