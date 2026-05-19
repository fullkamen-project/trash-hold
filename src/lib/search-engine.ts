import { TarkovItem } from './tarkov-api';

// Обширный словарь сленга игроков Escape from Tarkov
// Ключ — то, что вводит юзер (всегда в нижнем регистре). 
// Значение — массив реальных маркеров для поиска в API (matches) и/или строгий фильтр категории (type)
const SLANG_MAP: Record<string, { type?: string, matches?: string[] }> = {
  // --- ОРУЖИЕ ---
  "ксюха": { matches: ["акс-74у", "aks-74u"] },
  "ксюху": { matches: ["акс-74у", "aks-74u"] },
  "сучка": { matches: ["акс-74у", "aks-74u"] },
  "мка": { matches: ["m4a1"] },
  "мку": { matches: ["m4a1"] },
  "эмка": { matches: ["m4a1"] },
  "верес": { matches: ["sr-2m", "ср-2м"] },
  "вереск": { matches: ["sr-2m", "ср-2м"] },
  "гопстер": { matches: ["adar", "адар"] },
  "адарка": { matches: ["adar", "адар"] },
  "весло": { matches: ["svd", "свд", "adar", "адар"] },
  "сайга": { matches: ["saiga", "сайга"] },
  "сырок": { matches: ["sks", "скс"] },
  "папаша": { matches: ["ppsh", "ппш"] },
  "слонобой": { matches: ["svd", "свд"] },
  "мосинка": { matches: ["mosin", "мосин"] },
  "кс": { matches: ["ks-23", "кс-23"] },
  "кедр": { matches: ["kedr", "кедр"] },
  "калаш": { matches: ["ak", "ак-"] },
  "ауг": { matches: ["aug", "ауг"] },
  "хк416": { matches: ["hk 416", "hk416"] },
  "хк": { matches: ["hk 416", "hk416"] },
  "мутант": { matches: ["mk47", "мк47"] },
  "скар": { matches: ["mk17", "mk16", "scar"] },
  "аш12": { matches: ["ash-12", "аш-12"] },
  "ашка": { matches: ["ash-12", "аш-12"] },
  "мцх": { matches: ["mcx"] },
  "фал": { matches: ["sa-58", "sa58"] },
  "сыч": { matches: ["sr-25", "ср-25"] },
  "рысь": { matches: ["рысь-т", "rys-t"] },
  "вектор": { matches: ["vector", "вектор"] },
  "креветка": { matches: ["vector", "вектор"] },
  "соком": { matches: ["socom"] },
  "вал": { matches: ["вал", "val"] },
  "винторез": { matches: ["всс", "vss"] },
  "глухарь": { matches: ["ash-12", "аш-12"] },

  // --- МЕДИЦИНА ---
  "салева": { matches: ["salewa", "салева"] },
  "салевка": { matches: ["salewa", "салева"] },
  "карвашка": { matches: ["аптечка car", "car first"] },
  "карфак": { matches: ["аптечка car", "car first"] },
  "гризли": { matches: ["grizzly", "гризли"] },
  "гризля": { matches: ["grizzly", "гризли"] },
  "ифак": { matches: ["ifak", "ифак"] },
  "афак": { matches: ["afak", "афак"] },
  "ледекс": { matches: ["ledx", "ледх"] },
  "ледкс": { matches: ["ledx", "ледх"] },
  "ледх": { matches: ["ledx", "ледх"] },
  "звездочка": { matches: ["звездочка", "звёздочка", "star"] },
  "пропик": { matches: ["propital", "пропитал"] },
  "морфик": { matches: ["morphine", "морфий"] },
  "вазик": { matches: ["vaseline", "вазелин"] },
  "мазик": { matches: ["vaseline", "вазелин"] },
  "аишка": { matches: ["ai-2", "аи-2"] },

  // --- ПРЕДМЕТЫ БАРТЕРА / ЛУТ ---
  "биток": { matches: ["bitcoin", "биткоин", "биткойн"] },
  "видюха": { matches: ["gpu", "видеокарта"] },
  "гпу": { matches: ["gpu", "видеокарта"] },
  "тетриз": { matches: ["tetriz", "тетрис"] },
  "ролекс": { matches: ["rolex", "часы"] },
  "лева": { matches: ["lion", "лев"] },
  "петух": { matches: ["rooster", "петух"] },
  "сгущенка": { matches: ["сгущенка", "сгущёнка", "condensed"] },
  "тушонка": { matches: ["тушонка", "тушёнка", "tushonka", "beef"] },
  "водка": { matches: ["vodka", "водка"] },
  "самогон": { matches: ["moonshine", "самогон"] },
  "фильтр": { matches: ["filter", "фильтр", "fp-100", "фп-100"] },
  "паракорд": { matches: ["paracord", "паракорд"] },
  "шприц": { matches: ["syringe", "шприц"] },
  "интел": { matches: ["intel", "интел", "папка"] },

  // --- СНАРЯЖЕНИЕ ---
  "алтын": { matches: ["altyn", "алтын"] },
  "пенис": { matches: ["сш-68", "ssh-68"] },
  "килла": { matches: ["killa", "киллы", "6б13"] },
  "слик": { matches: ["slick", "слик"] },
  "улей": { matches: ["hexgrid", "гексагон"] },
  "гжелка": { matches: ["gzhel", "гжель"] },
  "кора": { matches: ["korund", "корунд"] },
  "дефендер": { matches: ["defender", "дефендер"] },
  "сфера": { matches: ["сфера", "sphere"] },
  "кабан": { matches: ["kaban", "кабан"] },

  // --- МОДУЛИ / ПАТРОНЫ ---
  "калик": { type: "mods", matches: ["прицел", "sight", "collimator", "коллиматор"] },
  "глушак": { type: "mods", matches: ["глушитель", "silencer", "suppressor", "звукомодератор"] },
  "банка": { type: "mods", matches: ["глушитель", "silencer", "suppressor", "звукомодератор"] },
  "тапко": { type: "mods", matches: ["tapco"] },
  "пбс": { type: "mods", matches: ["пбс", "pbs"] },
  "игольник": { type: "ammo", matches: ["ппбс", "ppbs"] },
  "бт": { type: "ammo", matches: ["бт", "bt"] },
  "бс": { type: "ammo", matches: ["бс", "bs"] },
  
  // --- ФРАЗОВЫЕ ЗАПРОСЫ (СБОРКИ И СОВМЕСТИМОСТЬ) ---
  // Прицелы на "Ласточкин хвост" (встают на АК/Ксюху/ВСС без переходника)
  "калик на ксюху": { type: "mods", matches: ["экп-8", "ekp-8", "окп-7", "okp-7", "кобра", "kobra", "пка", "pk-a", "упс-1"] },
  "прицел на ксюху": { type: "mods", matches: ["экп-8", "ekp-8", "окп-7", "okp-7", "кобра", "kobra", "пка", "pk-a", "упс-1"] },
  "калик на калаш": { type: "mods", matches: ["экп-8", "ekp-8", "окп-7", "okp-7", "кобра", "kobra", "пка", "pk-a", "упс-1"] },
  "глушак на ксюху": { type: "mods", matches: ["тгп-а", "tgp-a", "пбс-4", "pbs-4", "гексагон", "hexagon"] },
  "глушак на мку": { type: "mods", matches: ["nt-4", "соком", "socom", "qdss", "rotex"] },

  // --- ЖЕСТКИЕ КАТЕГОРИИ ---
  "глушитель": { type: "mods" },
  "прицел": { type: "mods" },
  "рукоятка": { type: "mods" },
  "приклад": { type: "mods" },
  "ключ": { type: "keys" }
};

export function searchItems(items: TarkovItem[], query: string): TarkovItem[] {
  const normalizedQuery = query.toLowerCase().trim();
  const searchTerms = normalizedQuery.split(/\s+/);

  // Собираем все активные сленговые правила из запроса
  const activeSlangRules = searchTerms.map(term => SLANG_MAP[term]).filter(Boolean);
  
  // Учитываем фразу целиком, если она есть в словаре (например "золотая звезда")
  if (SLANG_MAP[normalizedQuery] && !activeSlangRules.includes(SLANG_MAP[normalizedQuery])) {
    activeSlangRules.push(SLANG_MAP[normalizedQuery]);
  }

  const scoredItems = items.map(item => {
    let score = 0;
    
    // Защита от null: API (lang: ru) иногда возвращает предметы без перевода
    const name = (item.name || '').toLowerCase();
    const shortName = (item.shortName || '').toLowerCase();
    const types = item.types || [];

    // 1. Применение правил Сленга и Радара Типов
    for (const rule of activeSlangRules) {
      // Если предмет не проходит по жесткому типу (например, ищем прицел, а попался ключ)
      if (rule.type && !types.includes(rule.type)) {
        return { item, score: -1 };
      }
      
      // Проверка на соответствие маркеру сленга
      if (rule.matches) {
        let matched = false;
        for (const matchStr of rule.matches) {
          if (name.includes(matchStr) || shortName.includes(matchStr)) {
            score += 1000;
            matched = true;
            break;
          }
        }
        // Если юзер ввел только одно слово-сленг (например "ксюха"), 
        // и предмет не подошел ни под один из алиасов (акс-74у) -> жестко отсекаем его, чтобы не было мусора
        if (!matched && searchTerms.length === 1) {
          return { item, score: -1 };
        }
      }
    }

    // 2. Двухуровневый скоринг
    if (name === normalizedQuery || shortName === normalizedQuery) score += 500;
    else if (name.startsWith(normalizedQuery) || shortName.startsWith(normalizedQuery)) score += 100;
    else if (name.includes(normalizedQuery) || shortName.includes(normalizedQuery)) score += 50;

    // 3. Оценка по совпадению отдельных слов
    let wordsMatched = 0;
    for (const term of searchTerms) {
      if (name.includes(term) || shortName.includes(term)) wordsMatched++;
    }
    
    if (wordsMatched > 0) score += wordsMatched * 10;
    // Бонус за фулл совпадение фразы
    if (wordsMatched === searchTerms.length && searchTerms.length > 1) score += 30; 

    return { item, score };
  });

  // Фильтруем нулевые результаты, сортируем по скору
  return scoredItems.filter(res => res.score > 0).sort((a, b) => b.score - a.score).map(res => res.item);
}