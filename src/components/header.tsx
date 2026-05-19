import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 px-8 bg-kamen-dark border-b border-kamen-stone">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-black tracking-tighter text-white uppercase transition-all duration-300 hover:text-[#FF4D00] hover:[text-shadow:0_0_15px_rgba(255,77,0,0.8)]"
        >
          ФУЛЛ КАМЕНЬ
        </Link>

        <nav className="hidden md:block">
          <span className="text-kamen-slate text-xs uppercase tracking-widest">
            Философия Каменизма
          </span>
        </nav>
      </div>
    </header>
  );
}