import Link from "next/link";
import { HEADER_DICTIONARY } from "@/data/headerConfig";

export default function MapsPage() {
  // Извлекаем список карт из конфигурации хедера
  const eftConfig = HEADER_DICTIONARY['eft'];
  const mapsItem = eftConfig.menuItems.find(item => item.id === 'maps');
  const maps = mapsItem?.children || [];

  return (
    <div className="w-full max-w-[1132px] mx-auto py-10 px-4">
      <div className="mb-8 border-b border-lines-hover pb-6 animate-[fade-in-up_0.4s_both]">
        <h1 className="text-2xl font-blender-medium tracking-[0.3em] uppercase text-text-primary mb-2">
          КАРТЫ <span className="text-primary">EFT</span>
        </h1>
        <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
          ВЫБЕРИТЕ ЛОКАЦИЮ ДЛЯ ПРОСМОТРА ИНТЕРАКТИВНОЙ КАРТЫ И ИНФОРМАЦИИ
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[28px] justify-items-center">
        {maps.map((mapData, i) => (
          <Link
            key={mapData.id}
            href={mapData.path || '#'}
            className="group flex flex-col items-center justify-center gap-4 p-4 w-[160px] h-[160px] bg-card-menu border border-lines-hover rounded transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px] hover:shadow-primary/20 animate-[fade-in-up_0.5s_both]"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            {mapData.iconUrl && (
              <div
                className="icon-mask w-10 h-10 bg-text-secondary transition-colors duration-300 group-hover:bg-primary"
                style={{
                  maskImage: `url(${mapData.iconUrl})`,
                  WebkitMaskImage: `url(${mapData.iconUrl})`,
                  maskSize: 'contain',
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat',
                }}
              />
            )}
            <span className="font-blender-medium text-[13px] text-text-secondary uppercase tracking-widest transition-colors duration-300 group-hover:text-primary text-center">
              {mapData.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}