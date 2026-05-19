import Link from "next/link";
import { ItemSearch } from '@/components/ItemSearch';

export default function TarkovPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      

      {/* СТРОКА ПОИСКА */}
      <div className="mb-12 relative z-10"> {/* Added z-10 to ensure search results appear above other content */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-kamen-action" />
        <ItemSearch />
      </div>


      {/* ОСНОВНАЯ СЕТКА */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        
        {/* КАРТЫ (Левый большой блок) */}
        <Link 
          href="/tarkov/maps" 
          className="md:row-span-2 group relative overflow-hidden bg-kamen-stone/50 border border-white/5 p-8 hover:border-kamen-action/50 transition-all"
        >
          <div className="absolute top-4 right-6 text-kamen-action/20 font-mono text-[10px] uppercase">
            [Интерактив]
          </div>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Карты</h2>
          <p className="text-kamen-slate text-sm uppercase leading-relaxed opacity-60">
            Подробные топографические данные всех локаций. выходы, спавны и ключи.
          </p>
        </Link>

        {/* КВЕСТЫ (Правый верхний, на 2 колонки) */}
        <Link 
          href="/tarkov/quests" 
          className="md:col-span-2 group relative overflow-hidden bg-kamen-stone/50 border border-white/5 p-8 hover:border-kamen-action/50 transition-all"
        >
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-black text-white uppercase">Квесты</h2>
            <span className="text-kamen-action font-mono">[!]</span>
          </div>
          <p className="text-kamen-slate text-sm uppercase mt-4 opacity-60">
            Пошаговые гайды по выполнению задач всех торговцев.
          </p>
        </Link>

        {/* ПАТРОНЫ */}
        <Link 
          href="/tarkov/ammo" 
          className="group relative overflow-hidden bg-kamen-stone/50 border border-white/5 p-6 hover:border-kamen-action/50 transition-all"
        >
          <h2 className="text-2xl font-black text-white uppercase">Патроны</h2>
          <p className="text-kamen-slate text-[10px] uppercase mt-2 opacity-40">Таблица пробития и урона</p>
        </Link>

        {/* УБЕЖИЩЕ */}
        <Link 
          href="/tarkov/hideout" 
          className="group relative overflow-hidden bg-kamen-stone/50 border border-white/5 p-6 hover:border-kamen-action/50 transition-all"
        >
          <h2 className="text-2xl font-black text-white uppercase">Убежище</h2>
          <p className="text-kamen-slate text-[10px] uppercase mt-2 opacity-40">Расчет крафтов и модулей</p>
        </Link>

        {/* ОТСЛЕЖИВАНИЕ ПРЕДМЕТОВ (Низ лево) */}
        <Link 
          href="/tarkov/tracker" 
          className="group relative overflow-hidden bg-kamen-stone/50 border border-white/5 p-8 hover:border-kamen-action/50 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 bg-kamen-action" />
            <h2 className="text-xl font-black text-white uppercase">Отслеживание предметов</h2>
          </div>
          <p className="text-kamen-slate text-[10px] uppercase mt-4 opacity-60">
            Отмечай то, что нужно для квестов и модулей убежища в реальном времени.
          </p>
        </Link>

        {/* КРАФТЫ (Низ центр) */}
        <Link 
          href="/tarkov/crafts" 
          className="group relative overflow-hidden bg-kamen-stone/50 border border-white/5 p-6 hover:border-kamen-action/50 transition-all"
        >
          <h2 className="text-2xl font-black text-white uppercase">Крафты</h2>
          <p className="text-kamen-slate text-[10px] uppercase mt-2 opacity-40">Таблица пробития и урона</p>
        </Link>

        {/* БАРТЕРЫ (Низ право) */}
        <Link 
          href="/tarkov/barters" 
          className="group relative overflow-hidden bg-kamen-stone/50 border border-white/5 p-6 hover:border-kamen-action/50 transition-all"
        >
          <h2 className="text-2xl font-black text-white uppercase">Бартеры</h2>
          <p className="text-kamen-slate text-[10px] uppercase mt-2 opacity-40">Таблица пробития и урона</p>
        </Link>

      </div>
    </div>
  );
}