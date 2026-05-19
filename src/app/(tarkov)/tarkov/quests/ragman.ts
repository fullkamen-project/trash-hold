// ragman.ts
export interface Quest {
  id: string;
  title: string;
  parentId: string | null;
  x: number;
  y: number;
  kappa: boolean;
}

export const ragmanQuests: Quest[] = [
  // Корень ветки Барахольщика
  { id: 'r_1', title: 'Только бизнес', parentId: null, x: 0, y: 0, kappa: true },

  // --- ВЕТКА 1.1 ---
  { id: 'r_2', title: 'Распродажа', parentId: 'r_1', x: -600, y: 200, kappa: true },
  { id: 'r_3', title: '"Выгодная" сделка', parentId: 'r_2', x: -750, y: 400, kappa: false },
  { id: 'r_4', title: 'Кровь войны. Часть 1', parentId: 'r_2', x: -450, y: 400, kappa: true },

  // --- ВЕТКА 1.2 ---
  { id: 'r_5', title: 'Невидимая рука рынка', parentId: 'r_1', x: -200, y: 200, kappa: false },
  { id: 'r_6', title: 'Пустить в оборот', parentId: 'r_5', x: -200, y: 400, kappa: false },
  { id: 'r_7', title: 'Специальное предложение', parentId: 'r_6', x: -200, y: 600, kappa: false },
  { id: 'r_8', title: 'Проверенный товар', parentId: 'r_7', x: -200, y: 800, kappa: false },
  { id: 'r_9', title: 'По старым лекалам', parentId: 'r_8', x: -200, y: 1000, kappa: false },

  // --- ВЕТКА 1.3 ---
  { id: 'r_10', title: 'Аудит', parentId: 'r_1', x: 200, y: 200, kappa: false },
  { id: 'r_11', title: 'Любитель балета', parentId: 'r_10', x: 200, y: 400, kappa: false },
  { id: 'r_12', title: 'Стиляги', parentId: 'r_11', x: -50, y: 600, kappa: false },
  { id: 'r_13', title: 'Меломан', parentId: 'r_11', x: 200, y: 600, kappa: false },
  { id: 'r_14', title: 'Обновка. Часть 2', parentId: 'r_11', x: 450, y: 600, kappa: false },

  // --- ВЕТКА 1.4 (Ультра) ---
  { id: 'r_15', title: 'Вернем Ультре былое величие', parentId: 'r_1', x: 800, y: 200, kappa: true },
  
  // Подветка 1.4.1
  { id: 'r_16', title: 'Сорвать сделку', parentId: 'r_15', x: 500, y: 400, kappa: true },
  
  // Подветка 1.4.2 (Продолжение после Крови войны ч.1, которая вынесена в ветку 1.1)
  { id: 'r_17', title: 'Топливный вопрос', parentId: 'r_15', x: 800, y: 400, kappa: true },
  { id: 'r_18', title: 'Знаток резерва', parentId: 'r_17', x: 800, y: 600, kappa: true },
  
  { id: 'r_19', title: 'Модный приговор', parentId: 'r_15', x: 1100, y: 400, kappa: true },
  { id: 'r_20', title: 'Благодарность', parentId: 'r_19', x: 1100, y: 600, kappa: true },
  
  // Разветвление от Благодарности
  { id: 'r_21', title: 'Ночь распродаж', parentId: 'r_20', x: 1000, y: 800, kappa: true },
  { id: 'r_22', title: 'Супервайзер', parentId: 'r_21', x: 1000, y: 1000, kappa: true },
  { id: 'r_23', title: 'Длинная очередь', parentId: 'r_22', x: 1000, y: 1200, kappa: false },
  { id: 'r_24', title: 'Выпивка', parentId: 'r_23', x: 1000, y: 1400, kappa: false },
  
  { id: 'r_25', title: 'Горячая доставка', parentId: 'r_20', x: 1250, y: 800, kappa: true },
  { id: 'r_26', title: 'Скавенжер', parentId: 'r_25', x: 1250, y: 1000, kappa: true },

  // Подветка 1.4.3 (Картотека)
  { id: 'r_27', title: 'Картотека. Часть 2', parentId: 'r_15', x: 1600, y: 400, kappa: true },
  { id: 'r_28', title: 'Маршрутка', parentId: 'r_27', x: 1450, y: 600, kappa: true },
  { id: 'r_29', title: 'Обновка. Часть 1', parentId: 'r_27', x: 1650, y: 600, kappa: false },
  
  // Огромное дерево "Шить - не тужить"
  { id: 'r_30', title: 'Шить - не тужить. Часть 1', parentId: 'r_27', x: 1900, y: 600, kappa: true },
  
  // Подветка Крови войны от Шить-не тужить ч.1
  { id: 'r_31', title: 'Кровь войны. Часть 2', parentId: 'r_30', x: 1750, y: 800, kappa: true },
  { id: 'r_32', title: 'Кровь войны. Часть 3', parentId: 'r_31', x: 1750, y: 1000, kappa: true },
  { id: 'r_33', title: '"Знай своё место!"', parentId: 'r_32', x: 1650, y: 1200, kappa: false },
  { id: 'r_34', title: 'Красиво жить не запретишь. Часть 2', parentId: 'r_32', x: 1850, y: 1200, kappa: true },
  
  // Продолжение основной ветки Шить - не тужить
  { id: 'r_35', title: 'Шить - не тужить. Часть 2', parentId: 'r_30', x: 2100, y: 800, kappa: true },
  
  // Ответвление Секрет успеха
  { id: 'r_36', title: 'Секрет успеха', parentId: 'r_35', x: 2000, y: 1000, kappa: true },
  { id: 'r_37', title: 'Борода не нужна', parentId: 'r_36', x: 2000, y: 1200, kappa: true },
  
  // Ответвление Шить - не тужить ч.3
  { id: 'r_38', title: 'Шить - не тужить. Часть 3', parentId: 'r_35', x: 2250, y: 1000, kappa: true },
  { id: 'r_39', title: 'Красиво жить не запретишь. Часть 1', parentId: 'r_38', x: 2150, y: 1200, kappa: true },
  
  // Шить - не тужить ч.4 и Текстиль
  { id: 'r_40', title: 'Шить - не тужить. Часть 4', parentId: 'r_38', x: 2400, y: 1200, kappa: true },
  { id: 'r_41', title: 'Харизма города берет', parentId: 'r_40', x: 2300, y: 1400, kappa: true },
  { id: 'r_42', title: 'Текстиль. Часть 1', parentId: 'r_40', x: 2550, y: 1400, kappa: false },
  { id: 'r_43', title: 'Текстиль. Часть 2', parentId: 'r_42', x: 2550, y: 1600, kappa: false }
];