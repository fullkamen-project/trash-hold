export function SearchEmptyState() {
  return (
    <div className="w-full h-[160px] bg-transparent border border-lines-hover rounded flex items-center justify-center p-4">
      <span className="text-text-muted text-xs font-blender-medium uppercase text-center">
        НИЧЕГО НЕ НАЙДЕНО. ПОВТОРИТЕ ВВОД ИЛИ НАЧНИТЕ ПОИСК ЗАНОВО.
      </span>
    </div>
  );
}