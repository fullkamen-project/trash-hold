// lightkeeper.ts
export interface Quest {
  id: string;
  title: string;
  parentId: string | null;
  x: number;
  y: number;
  kappa: boolean;
}

export const lightkeeperQuests: Quest[] = [
  // Основная вертикальная цепочка Смотрителя
  { id: 'l_1', title: 'Сетевой провайдер. Часть 1', parentId: null, x: 0, y: 0, kappa: false },
  { id: 'l_2', title: 'Сетевой провайдер. Часть 2', parentId: 'l_1', x: 0, y: 200, kappa: false },
  { id: 'l_3', title: 'Проверка. Часть 1', parentId: 'l_2', x: 0, y: 400, kappa: false },
  { id: 'l_4', title: 'Проверка. Часть 2', parentId: 'l_3', x: 0, y: 600, kappa: false },
  { id: 'l_5', title: 'Проверка. Часть 3', parentId: 'l_4', x: 0, y: 800, kappa: false },
  { id: 'l_6', title: 'Ключ от башни', parentId: 'l_5', x: 0, y: 1000, kappa: false },
  { id: 'l_7', title: 'Тук-тук, кто там?', parentId: 'l_6', x: 0, y: 1200, kappa: false },
  { id: 'l_8', title: 'Новое знакомство', parentId: 'l_7', x: 0, y: 1400, kappa: false },
  
  // Веер из трех квестов от Нового знакомства
  { id: 'l_9', title: 'Цели и средства', parentId: 'l_8', x: -250, y: 1600, kappa: false },
  { id: 'l_10', title: 'Совершенно секретно', parentId: 'l_8', x: 250, y: 1600, kappa: false },
  { id: 'l_11', title: 'Источник информации', parentId: 'l_8', x: 0, y: 1600, kappa: false },

  // Продолжение ветки Источника информации
  { id: 'l_12', title: 'Пропавший информатор', parentId: 'l_11', x: 0, y: 1800, kappa: false },
  { id: 'l_13', title: 'Контр-компромат', parentId: 'l_12', x: 0, y: 2000, kappa: false },
  { id: 'l_14', title: 'Ответная услуга', parentId: 'l_13', x: 0, y: 2200, kappa: false },

  // Разветвление на Расплату и Провокацию
  { id: 'l_15', title: 'Расплата', parentId: 'l_14', x: 0, y: 2400, kappa: false },
  { id: 'l_16', title: 'Провокация', parentId: 'l_15', x: 0, y: 2600, kappa: false },

  // Слияние обратно на След из хлебных крошек
  { id: 'l_17', title: '"След из хлебных крошек"', parentId: 'l_15', x: 0, y: 2800, kappa: false },
  
  // Финал основной ветки
  { id: 'l_18', title: 'Наводчик', parentId: 'l_17', x: 0, y: 3000, kappa: false },
  { id: 'l_19', title: 'Произвести впечатление', parentId: 'l_18', x: 0, y: 3200, kappa: false },
  { id: 'l_20', title: 'Городские разборки', parentId: 'l_19', x: 0, y: 3400, kappa: false },

  // Отдельная ветка: Восстановление сломанного транспондера
  { id: 'l_21', title: 'Загладить вину - Подкуп', parentId: null, x: 300, y: 0, kappa: false },
  { id: 'l_22', title: 'Загладить вину - Вооружение', parentId: 'l_21', x: 300, y: 200, kappa: false },
  { id: 'l_23', title: 'Загладить вину', parentId: 'l_22', x: 300, y: 400, kappa: false }
];