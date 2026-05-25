"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react"; // Для лучшего спиннера загрузки

export interface Achievement {
  id: string;
  name: string;
  description: string;
  rarity: string;
  hidden: boolean;
  adjustedPlayersCompletedPercent: number;
  imageLink: string;
}

// Предпочтительнее загрузка данных на сервере, но для клиентской части это делается так.
async function fetchAchievements(): Promise<Achievement[]> {
  const response = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          achievements(lang: ru) {
            id
            name
            description
            rarity
            hidden
            adjustedPlayersCompletedPercent
            imageLink
          }
        }
      `,
    }),
  });

  if (!response.ok) throw new Error("Ошибка загрузки данных EFT API");
  const { data } = await response.json();
  return data?.achievements || [];
}

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Направление сортировки по проценту: 'asc' (сначала редкие) или 'desc' (сначала популярные)
  const [sortByPercent, setSortByPercent] = useState<"asc" | "desc">("asc");
  
  // Текущая категория фильтра
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    fetchAchievements()
      .then((data) => {
        setAchievements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Функция разнесения достижений по нашим кастомным категориям сайта
  const getCategoryAndRarity = (item: Achievement) => {
    const name = item.name?.trim();
    const pct = item.adjustedPlayersCompletedPercent || 0;

    // Списки названий достижений для точного маппинга по категориям с Вики
    const сюжетные = [
      "Прогулка", "Гори!", "Дорога из хлебных крошек", "Чужими Глазами", "Верни долг",
      "Тесей", "Это всё (не) случайность", "Достаточно твоих игр!", "Лёгкий путь",
      "Поворот не туда", "Рванёт?", "Слово мужчины", "Просто бизнес", "Мелочь, а приятно",
      "Я скорость", "Себе нужнее", "И свет погас", "Выживший", "Выживший (PVE ZONE)",
      "Падший", "Падший (PVE ZONE)", "Должник", "Должник (PVE ZONE)", "Спаситель", "Спаситель (PVE ZONE)"
    ];

    const престиж = [
      "Престиж", "Не сбавляя темп", "Всё выше и выше", "На пятёрку", "No Limit to Perfection"
    ];

    const ивентовые = [
      "Масленица", "Высокая конкуренция", "Держатель района", "INVOLVED IN PEACE",
      "Кардинал Ришелье", "Ключ к спасению", "Дорога в опасную зону", "Полная ремиссия",
      "Летальный исход", "Хороводовод", "В поисках выхода", "Мастер подземелий",
      "Последний раз", "До конца", "Сказки Тарграда", "Налегке", "Что же, вьюга, наливай",
      "Утиная охота", "Habet, hoc habet!", "Morituri te salutant"
    ];

    // Определение категории
    let category = "common_pool"; // Базовая категория для всех остальных ачивок
    if (сюжетные.some(s => name?.includes(s))) category = "story";
    else if (престиж.some(p => name?.includes(p))) category = "prestige";
    else if (ивентовые.some(i => name?.includes(i))) category = "events";

    // Определение стилей плашек на основе хардкорности/скрытности
    if (item.hidden) {
      return {
        category,
        text: "СКРЫТОЕ",
        color: "text-purple-400",
        border: "border-purple-500/20",
        bg: "bg-purple-500/5",
      };
    }

    if (category === "events") {
      return {
        category,
        text: "ИВЕНТ",
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        bg: "bg-cyan-500/5",
      };
    }

    if (category === "story") {
      return {
        category,
        text: "СЮЖЕТ",
        color: "text-emerald-400",
        border: "border-emerald-500/30",
        bg: "bg-emerald-500/5",
      };
    }

    if (category === "prestige") {
      return {
        category,
        text: "ПРЕСТИЖ",
        color: "text-amber-500",
        border: "border-amber-500/30",
        bg: "bg-amber-500/5",
      };
    }

    // Классические типы редкости для общего пула наград
    if (pct < 2.0) {
      return {
        category,
        text: "ЛЕГЕНДАРНОЕ",
        color: "text-orange-500",
        border: "border-orange-500/20",
        bg: "bg-orange-500/5",
      };
    } else if (pct < 7.0) {
      return {
        category,
        text: "ЭПИЧЕСКОЕ",
        color: "text-fuchsia-400",
        border: "border-pink-500/20",
        bg: "bg-pink-500/5",
      };
    } else if (pct < 15.0) {
      return {
        category,
        text: "РЕДКОЕ",
        color: "text-blue-400",
        border: "border-blue-400/20",
        bg: "bg-blue-400/5",
      };
    } else {
      return {
        category,
        text: "ОБЫЧНОЕ",
        color: "text-white/40",
        border: "border-white/5",
        bg: "bg-white/[0.02]",
      };
    }
  };

  // 1. Фильтрация по выбранной категории сайта
  const filteredAchievements = achievements.filter((item) => {
    const meta = getCategoryAndRarity(item);
    if (activeCategory === "all") return true;
    return meta.category === activeCategory;
  });

  // 2. Сортировка по проценту выполнения
  const sortedAchievements = [...filteredAchievements].sort((a, b) => {
    const percentA = Number(a.adjustedPlayersCompletedPercent) || 0;
    const percentB = Number(b.adjustedPlayersCompletedPercent) || 0;
    return sortByPercent === "desc" ? percentB - percentA : percentA - percentB;
  });

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center text-text-secondary">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <div className="font-blender-medium text-[12px] tracking-[0.4em] uppercase">
            СИНХРОНИЗАЦИЯ С БАЗОЙ ДАННЫХ...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1100px] mx-auto py-10 px-4 selection:bg-primary selection:text-black">
      
      {/* Шапка */}
      <div className="mb-8 border-b border-lines-hover pb-6">
        <h1 className="text-2xl font-blender-medium tracking-[0.3em] uppercase text-text-primary mb-2">
          ДОСТИЖЕНИЯ <span className="text-primary">EFT</span>
        </h1>
        <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
          Разделы специальных внутриигровых наград и статистика выполнения контрактов
        </p>
      </div>

      {/* Панель управления (Категории + Сортировка) */}
      <div className="mb-8 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-card-menu border border-lines-hover p-4 rounded-lg">
        
        {/* Кнопки категорий */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-blender-medium tracking-wider text-text-muted uppercase mr-2">РАЗДЕЛЫ:</span>
          {[
            { id: "all", label: "ВСЕ" },
            { id: "story", label: "СЮЖЕТ" },
            { id: "events", label: "ИВЕНТЫ" },
            { id: "prestige", label: "ПРЕСТИЖ" },
            { id: "common_pool", label: "ОБЩИЕ" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`text-[10px] font-blender-medium tracking-widest px-3 py-1.5 border rounded-md transition-all uppercase ${
                activeCategory === tab.id
                  ? "bg-primary text-black border-primary"
                  : "bg-transparent text-text-secondary border-lines-hover hover:border-primary/50 hover:text-text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Сортировка */}
        <div className="flex items-center gap-2 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-lines-hover pt-3 lg:pt-0">
          <span className="text-[10px] font-blender-medium tracking-wider text-text-muted uppercase mr-2">ЦЕННОСТЬ:</span>
          <button
            onClick={() => setSortByPercent(sortByPercent === "desc" ? "asc" : "desc")}
            className="text-[10px] font-blender-medium tracking-widest px-4 py-1.5 border rounded-md bg-transparent text-text-primary border-lines-hover hover:border-primary/50 flex items-center gap-2 uppercase"
          >
            {sortByPercent === "desc" ? "ПОПУЛЯРНЫЕ ↓" : "РЕДКИЕ ↑"}
          </button>
        </div>
      </div>

      {/* Основной список достижений */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px]">
        {sortedAchievements.length > 0 ? (
          sortedAchievements.map((achievement) => {
            const metaInfo = getCategoryAndRarity(achievement);
            const percent = achievement.adjustedPlayersCompletedPercent 
              ? achievement.adjustedPlayersCompletedPercent.toFixed(2) 
              : "0.00";

            return (
              <div // Карта достижения
                key={achievement.id}
                className="flex flex-col bg-card-menu border border-lines-hover rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(230,142,37,0.15)] group"
              >
                <div className="flex items-start gap-6">
                  {/* Иконка */}
                  <div className="relative w-[80px] h-[80px] border border-lines-hover bg-base rounded-md overflow-hidden flex-shrink-0">
                    {achievement.imageLink ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={achievement.imageLink}
                        alt={achievement.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        draggable="false"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-text-muted font-mono">НЕТ ИЗОБРАЖЕНИЯ</div>
                    )}
                  </div>
                  {/* Текст */}
                  <div className="flex flex-col gap-1 flex-grow">
                    <h2 className="text-sm font-blender-medium tracking-wider text-text-primary uppercase group-hover:text-primary transition-colors">
                      {achievement.name}
                    </h2>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {achievement.description || "Секретные условия выполнения."}
                    </p>
                  </div>
                </div>
                {/* Статистика и редкость */}
                <div className={`flex items-center justify-between border-t ${metaInfo.border} pt-4 mt-4`}>
                  <span className={`text-[10px] font-black tracking-[0.2em] px-2 py-0.5 border ${metaInfo.border} ${metaInfo.bg} ${metaInfo.color}`}>
                    {metaInfo.text}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    Выполнили: <strong className="text-text-primary font-blender-medium">{percent}%</strong> игроков
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 border border-dashed border-lines-hover text-xs text-text-muted font-mono uppercase lg:col-span-2">
            Нет результатов для выбранного раздела
          </div>
        )}
      </div>
    </div>
  );
}