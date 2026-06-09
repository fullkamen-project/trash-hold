// mechanic.ts
export interface Quest {
  id: string;
  title: string;
  parentId: string | null;
  x: number;
  y: number;
  kappa: boolean;
}

export const mechanicQuests: Quest[] = [
  { id: 'm_1', title: 'Спасение крота', parentId: null, x: 0, y: 0, kappa: true },
  
  // Три основные ветки от Спасения крота
  { id: 'm_2', title: 'Поручение', parentId: 'm_1', x: -600, y: 200, kappa: true },
  { id: 'm_3', title: 'Подозрительный подрядчик', parentId: 'm_1', x: -250, y: 200, kappa: false },
  { id: 'm_4', title: 'Оружейник. Часть 1', parentId: 'm_1', x: 450, y: 200, kappa: true },

  // Ветка Подозрительного подрядчика
  { id: 'm_5', title: 'Иголка в стоге сена', parentId: 'm_3', x: -250, y: 400, kappa: false },
  { id: 'm_6', title: 'Второе дно', parentId: 'm_5', x: -250, y: 600, kappa: false },
  
  // Разветвление от Второго дна
  { id: 'm_7', title: 'Органолептический анализ. Часть 1', parentId: 'm_6', x: -500, y: 800, kappa: false },
  { id: 'm_8', title: 'Органолептический анализ. Часть 2', parentId: 'm_7', x: -500, y: 1000, kappa: false },
  
  { id: 'm_9', title: 'Разведка боем', parentId: 'm_6', x: -100, y: 800, kappa: false },
  
  // Веер из 5 квестов от Разведки боем
  { id: 'm_12', title: 'Проверка гипотез', parentId: 'm_9', x: -350, y: 1000, kappa: false },
  { id: 'm_13', title: 'Железный авторитет', parentId: 'm_9', x: -220, y: 1000, kappa: false },
  { id: 'm_14', title: 'Освободить помещение', parentId: 'm_9', x: -90, y: 1000, kappa: false },
  { id: 'm_15', title: 'Конфиденциальная информация', parentId: 'm_9', x: 40, y: 1000, kappa: false },
  { id: 'm_16', title: 'Я всегда с собой беру видеокамеру', parentId: 'm_9', x: 170, y: 1000, kappa: false },
  
  // Финал ветки разведки
  { id: 'm_17', title: 'Слово хранителя', parentId: 'm_12', x: -90, y: 1200, kappa: false },

  // Ветки от Оружейника. Часть 1
  { id: 'm_18', title: 'Оружейник. Часть 3', parentId: 'm_4', x: 350, y: 400, kappa: true },
  { id: 'm_19', title: 'Оружейник Часть 2', parentId: 'm_4', x: 750, y: 400, kappa: true },
  { id: 'm_20', title: 'Садоводство. Часть 1', parentId: 'm_4', x: 1250, y: 400, kappa: true },

  // Оружейный вертикальный каскад (Части 4-25) строгой линией вниз
  { id: 'm_21', title: 'Оружейник. Часть 4', parentId: 'm_18', x: 350, y: 600, kappa: true },
  { id: 'm_22', title: 'Оружейник. Часть 5', parentId: 'm_21', x: 350, y: 800, kappa: true },
  { id: 'm_23', title: 'Оружейник. Часть 6', parentId: 'm_22', x: 350, y: 1000, kappa: true },
  { id: 'm_24', title: 'Оружейник. Часть 7', parentId: 'm_23', x: 350, y: 1200, kappa: true },
  { id: 'm_25', title: 'Оружейник. По старой дружбе', parentId: 'm_24', x: 500, y: 1400, kappa: false }, // Небольшой шаг вбок, так как parentId один
  { id: 'm_26', title: 'Оружейник. Часть 8', parentId: 'm_24', x: 350, y: 1400, kappa: true },
  { id: 'm_27', title: 'Оружейник. Часть 9', parentId: 'm_26', x: 350, y: 1600, kappa: true },
  { id: 'm_28', title: 'Оружейник. Часть 10', parentId: 'm_27', x: 350, y: 1800, kappa: true },
  { id: 'm_29', title: 'Оружейник. Часть 11', parentId: 'm_28', x: 350, y: 2000, kappa: true },
  { id: 'm_30', title: 'Оружейник. Часть 12', parentId: 'm_29', x: 350, y: 2200, kappa: true },
  { id: 'm_31', title: 'Оружейник. Часть 13', parentId: 'm_30', x: 350, y: 2400, kappa: true },
  { id: 'm_32', title: 'Оружейник. Часть 14', parentId: 'm_31', x: 350, y: 2600, kappa: true },
  { id: 'm_33', title: 'Оружейник. Часть 15', parentId: 'm_32', x: 350, y: 2800, kappa: true },
  { id: 'm_34', title: 'Оружейник. Часть 16', parentId: 'm_33', x: 350, y: 3000, kappa: true },
  { id: 'm_35', title: 'Оружейник. Часть 17', parentId: 'm_34', x: 350, y: 3200, kappa: true },
  { id: 'm_36', title: 'Оружейник. Часть 18', parentId: 'm_35', x: 350, y: 3400, kappa: true },
  { id: 'm_37', title: 'Оружейник. Часть 19', parentId: 'm_36', x: 350, y: 3600, kappa: true },
  { id: 'm_38', title: 'Оружейник. Часть 20', parentId: 'm_37', x: 350, y: 3800, kappa: true },
  { id: 'm_39', title: 'Оружейник. Часть 21', parentId: 'm_38', x: 350, y: 4000, kappa: true },
  { id: 'm_40', title: 'Оружейник. Часть 22', parentId: 'm_39', x: 350, y: 4200, kappa: true },
  { id: 'm_41', title: 'Оружейник. Часть 23', parentId: 'm_40', x: 350, y: 4400, kappa: false },
  { id: 'm_42', title: 'Оружейник. Часть 24', parentId: 'm_41', x: 350, y: 4600, kappa: false },
  { id: 'm_43', title: 'Оружейник. Часть 25', parentId: 'm_42', x: 350, y: 4800, kappa: false },

  // Ветка Оружейник Часть 2 -> Сигнал
  { id: 'm_44', title: 'Сигнал. Часть 1', parentId: 'm_19', x: 750, y: 600, kappa: true },
  { id: 'm_45', title: 'Свой человек', parentId: 'm_44', x: 630, y: 800, kappa: true },
  { id: 'm_46', title: 'Сигнал. Часть 2', parentId: 'm_44', x: 870, y: 800, kappa: true },

  // Разветвления от Сигнал. Часть 2
  { id: 'm_47', title: 'Скаут', parentId: 'm_46', x: 750, y: 1000, kappa: true },
  { id: 'm_48', title: 'Сигнал. Часть 3', parentId: 'm_46', x: 1050, y: 1000, kappa: true },

  // Ниже Скаута
  { id: 'm_49', title: '"Запасный" выход', parentId: 'm_47', x: 620, y: 1200, kappa: true },
  { id: 'm_50', title: '"У стен есть глаза"', parentId: 'm_49', x: 620, y: 1400, kappa: true },
  
  { id: 'm_51', title: 'Чёрный выход', parentId: 'm_47', x: 750, y: 1200, kappa: true },
  { id: 'm_52', title: 'Военный хабар', parentId: 'm_51', x: 750, y: 1400, kappa: true },

  { id: 'm_53', title: 'Чёрный лебедь', parentId: 'm_47', x: 880, y: 1200, kappa: true },
  { id: 'm_54', title: 'Конструктор-любитель', parentId: 'm_53', x: 880, y: 1400, kappa: true },
  
  { id: 'm_55', title: 'Проверка мощностей', parentId: 'm_54', x: 750, y: 1600, kappa: true },
  { id: 'm_56', title: 'Секреты заводских стен', parentId: 'm_54', x: 880, y: 1600, kappa: false },
  { id: 'm_57', title: 'Всё тайное становится явным', parentId: 'm_54', x: 1010, y: 1600, kappa: true },

  // Ниже Сигнал. Часть 3
  { id: 'm_58', title: 'Дверь', parentId: 'm_48', x: 1050, y: 1200, kappa: false },
  { id: 'm_59', title: 'Сигнал. Часть 4', parentId: 'm_48', x: 1180, y: 1200, kappa: true },
  { id: 'm_60', title: 'Устойчивый сигнал', parentId: 'm_48', x: 1310, y: 1200, kappa: false },

  // Ветка Садоводства
  { id: 'm_61', title: 'Садоводство. Часть 2', parentId: 'm_20', x: 1250, y: 600, kappa: true },
  
  // 4 ветки от Садоводства Часть 2
  { id: 'm_62', title: 'Вредная привычка', parentId: 'm_61', x: 1100, y: 800, kappa: true },
  { id: 'm_63', title: 'Страсть к эргономике', parentId: 'm_61', x: 1250, y: 800, kappa: true },
  { id: 'm_64', title: 'Стрим. Часть 1', parentId: 'm_61', x: 1400, y: 800, kappa: true },
  { id: 'm_65', title: 'Садоводство. Часть 3', parentId: 'm_61', x: 1750, y: 800, kappa: true },

  // Подветки Стрима
  { id: 'm_66', title: 'Стрим. Часть 2', parentId: 'm_64', x: 1400, y: 1000, kappa: false },
  
  { id: 'm_67', title: 'Слежка', parentId: 'm_66', x: 1250, y: 1200, kappa: false },
  { id: 'm_68', title: 'Стрим. Часть 3', parentId: 'm_66', x: 1400, y: 1200, kappa: false },
  { id: 'm_69', title: 'Наблюнение', parentId: 'm_66', x: 1550, y: 1200, kappa: false },

  { id: 'm_70', title: 'Стрим. Часть 4', parentId: 'm_68', x: 1400, y: 1400, kappa: false },
  { id: 'm_71', title: 'Потрошитель', parentId: 'm_70', x: 1300, y: 1600, kappa: false },
  { id: 'm_72', title: 'Стрим. Часть 5', parentId: 'm_70', x: 1500, y: 1600, kappa: false },

  { id: 'm_73', title: 'Секрет успеваемости. Часть 1', parentId: 'm_69', x: 1550, y: 1400, kappa: false },
  { id: 'm_74', title: 'Секрет успеваемости. Часть 2', parentId: 'm_73', x: 1550, y: 1600, kappa: false },

  // Подветки Садоводства Часть 3
  { id: 'm_75', title: 'Стрелок от Бога', parentId: 'm_65', x: 1650, y: 1000, kappa: true },
  { id: 'm_76', title: 'Садоводство. Часть 4', parentId: 'm_65', x: 1850, y: 1000, kappa: true },
  { id: 'm_77', title: 'Тайны корпоратов', parentId: 'm_65', x: 2050, y: 1000, kappa: true },

  { id: 'm_78', title: 'Расстановка приоритетов', parentId: 'm_75', x: 1650, y: 1200, kappa: false },

  // Окончание Садоводства Часть 4
  { id: 'm_79', title: 'Импорт', parentId: 'm_76', x: 1730, y: 1200, kappa: true },
  { id: 'm_80', title: 'Энергетический кризис', parentId: 'm_76', x: 1850, y: 1200, kappa: true },
  { id: 'm_81', title: 'Удобрения', parentId: 'm_76', x: 1970, y: 1200, kappa: true }
];