import { ItemSearch } from '@/components/ItemSearch';

export const metadata = {
  title: 'Радар Предметов | Kamen',
  description: 'Умный поиск по глобальной базе данных Escape from Tarkov',
};

export default function TrackerPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-2 font-mono uppercase tracking-widest">Радар Предметов</h1>
      <p className="text-gray-400 font-mono mb-8 text-center max-w-xl">Умный поиск с поддержкой сленга. Интегрировано с глобальным кэшем базы данных Tarkov.dev (~4000+ предметов).</p>
      <ItemSearch />
    </div>
  );
}