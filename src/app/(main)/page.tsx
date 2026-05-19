import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12">
        ВЫБЕРИТЕ <span className="text-kamen-slate">ПРОЕКТ</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Кнопка Escape From Tarkov */}
        <Link href="/tarkov" className="group block p-8 bg-kamen-stone border border-kamen-slate/10 hover:border-kamen-action transition-all">
          <h2 className="text-xl font-bold text-white uppercase mb-2 group-hover:text-kamen-action">Escape From Tarkov</h2>
          <p className="text-kamen-slate text-xs uppercase tracking-wider">Минимум кликов — максимум выживания</p>
          <div className="mt-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-kamen-action">→</span>
          </div>
        </Link>

        {/* Кнопка Fragmentary Order */}
        <Link href="/frago" className="group block p-8 bg-kamen-stone border border-kamen-slate/10 hover:border-kamen-orange transition-all italic">
          <h2 className="text-xl font-bold text-white uppercase mb-2 group-hover:text-kamen-orange">Fragmentary Order</h2>
          <p className="text-kamen-slate text-xs uppercase tracking-wider">В разработке</p>
        </Link>
      </div>
    </div>
  );
}