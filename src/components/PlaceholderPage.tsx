import Link from "next/link";
import Image from "next/image";

interface PlaceholderPageProps {
  themeClass: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
}

export function PlaceholderPage({ themeClass, logoSrc, logoAlt, description }: PlaceholderPageProps) {
  return (
    <main className={`min-h-screen bg-base flex flex-col items-center justify-center relative overflow-hidden ${themeClass}`}>
      {/* Фоновое свечение в акцентном цвете темы */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center p-6 text-center">
        {/* Логотип игры */}
        <div className="w-[200px] h-[60px] relative mb-8">
          <Image 
            src={logoSrc} 
            alt={logoAlt} 
            fill 
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-blender-medium uppercase tracking-widest text-text-primary mb-4">
          В разработке
        </h1>
        
        <p className="text-text-muted text-sm tracking-[0.2em] uppercase mb-10 max-w-md">
          {description}
        </p>

        <Link 
          href="/" 
          className="px-8 py-3 bg-card-menu border border-lines-hover text-text-secondary hover:text-primary hover:border-primary transition-all uppercase tracking-widest text-xs font-bold rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          Вернуться в хаб
        </Link>
      </div>
    </main>
  );
}