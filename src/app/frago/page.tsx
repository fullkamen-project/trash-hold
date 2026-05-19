export default function FragoPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic opacity-20">
        Fragmentary Order
      </h1>
      <div className="px-6 py-2 bg-kamen-stone border border-kamen-slate/20">
        <p className="text-kamen-action font-mono text-sm tracking-[0.4em] uppercase animate-pulse">
          В РАЗРАБОТКЕ
        </p>
      </div>
    </div>
  );
}