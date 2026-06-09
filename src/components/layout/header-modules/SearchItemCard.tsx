import { Box } from 'lucide-react';

export interface EftItemPrice {
  vendor?: { name?: string; normalizedName?: string };
  price: number;
  currency: string;
}

export interface EftItem {
  id: string;
  shortName: string;
  name: string;
  iconLink: string;
  types: string[];
  sellFor: EftItemPrice[];
}

export function SearchItemCard({ item }: { item: EftItem }) {
  // Функция форматирования чисел (20000000 -> 20 000 000)
  const formatPrice = (price: number) => price.toLocaleString('ru-RU');

  // Функция определения символа валюты
  const getCurrencySymbol = (currency: string) => {
    switch (currency) {
      case 'RUB': return '₽';
      case 'USD': return '$';
      case 'EUR': return '€';
      default: return currency;
    }
  };

  // Парсинг цен
  const fleaOffer = item.sellFor?.find((p) => p.vendor?.name === 'Flea Market' || p.vendor?.normalizedName === 'flea-market');
  
  // Ищем лучшую цену у торговцев (отбрасываем барахолку и ищем максимум)
  const traderOffers = item.sellFor?.filter((p) => p.vendor?.name !== 'Flea Market' && p.vendor?.normalizedName !== 'flea-market') || [];
  const bestTraderOffer = traderOffers.length > 0 
    ? traderOffers.reduce((max, current) => (current.price > max.price ? current : max))
    : null;

  return (
    <div className="w-[160px] h-[160px] bg-card-menu border border-lines-hover rounded relative flex flex-col justify-between p-3 transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px] hover:shadow-primary/20 group">
      {/* Иконка категории (абсолютно в правом верхнем углу) */}
      <Box className="absolute top-2 right-2 w-3 h-3 text-text-secondary" />
      
      {/* Верхний блок: Название */}
      <div className="text-center text-primary text-sm font-blender-medium truncate px-1">
        {item.shortName || item.name || '???'}
      </div>

      {/* Центр: Изображение */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={item.iconLink || 'https://assets.tarkov.dev/5c05300686f774697940d43f-grid-image.webp'} 
        alt={item.name} 
        className="w-14 h-14 object-contain mx-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-md" 
      />

      {/* Нижний блок: Цены (Грид для выравнивания) */}
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-center w-full">
          <span className="text-text-secondary text-[10px] font-blender-book">БАР.</span>
          <span className={fleaOffer ? "text-text-secondary text-[10px] font-blender-book" : "text-zinc-600 text-[10px] font-blender-book"}>
            {fleaOffer ? formatPrice(fleaOffer.price) : 'N/A'} {fleaOffer && <span className="text-[8px] ml-0.5">{getCurrencySymbol(fleaOffer.currency)}</span>}
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-text-secondary text-[10px] font-blender-book">ТОРГ.</span>
          <span className={bestTraderOffer ? "text-text-muted text-[10px] font-blender-book" : "text-zinc-600 text-[10px] font-blender-book"}>
            {bestTraderOffer ? formatPrice(bestTraderOffer.price) : 'N/A'} {bestTraderOffer && <span className="text-[8px] ml-0.5">{getCurrencySymbol(bestTraderOffer.currency)}</span>}
          </span>
        </div>
      </div>
    </div>
  );
}