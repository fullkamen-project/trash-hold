// jaeger.ts
export interface Quest {
  id: string;
  title: string;
  parentId: string | null;
  x: number;
  y: number;
  kappa: boolean;
}

export const jaegerQuests: Quest[] = [
  // Корень всей ветки Егеря
  { id: 'j_1', title: 'Знакомство', parentId: null, x: 0, y: 0, kappa: true },

  // --- ВЕТКА 1.1 ---
  { id: 'j_2', title: 'Умный в гору не пойдёт', parentId: 'j_1', x: -1000, y: 200, kappa: true },
  { id: 'j_3', title: 'Инициация', parentId: 'j_2', x: -1000, y: 400, kappa: true },

  // --- ВЕТКА 1.2 (Тарковский стрелок) ---
  { id: 'j_4', title: 'Тарковский стрелок. Часть 1', parentId: 'j_1', x: -650, y: 200, kappa: true },
  { id: 'j_5', title: 'Тарковский стрелок. Часть 2', parentId: 'j_4', x: -650, y: 400, kappa: true },
  { id: 'j_6', title: 'Тарковский стрелок. Часть 3', parentId: 'j_5', x: -650, y: 600, kappa: true },
  { id: 'j_7', title: 'Тарковский стрелок. Часть 4', parentId: 'j_6', x: -650, y: 800, kappa: true },
  { id: 'j_8', title: 'Тарковский стрелок. Часть 5', parentId: 'j_7', x: -650, y: 1000, kappa: true },
  { id: 'j_9', title: 'Тарковский стрелок. Часть 6', parentId: 'j_8', x: -650, y: 1200, kappa: true },
  { id: 'j_10', title: 'Тарковский стрелок. Часть 7', parentId: 'j_9', x: -650, y: 1400, kappa: true },
  { id: 'j_11', title: 'Тарковский стрелок. Часть 8', parentId: 'j_10', x: -650, y: 1600, kappa: true },

  // --- ВЕТКА 1.3 ---
  { id: 'j_12', title: 'Тарков не прощает ошибок', parentId: 'j_1', x: -300, y: 200, kappa: true },
  { id: 'j_13', title: 'Каждый охотник знает, где сидит фазан', parentId: 'j_12', x: -300, y: 400, kappa: true },

  // --- ВЕТКА 1.4 (Основное дерево выживания) ---
  { id: 'j_14', title: 'Путь выживальщика. Беззащитен, но опасен', parentId: 'j_1', x: 450, y: 200, kappa: true },

  // --- ПОДВЕТКА 1.4.1 (Запасливый и Продразведка) ---
  { id: 'j_15', title: 'Путь выживальщика. Запасливый', parentId: 'j_14', x: 0, y: 400, kappa: true },
  { id: 'j_16', title: 'Продразведка', parentId: 'j_14', x: 250, y: 400, kappa: true },
  
  // От Продразведки к Резерву
  { id: 'j_17', title: 'Резерв', parentId: 'j_16', x: 100, y: 600, kappa: true },
  { id: 'j_18', title: 'Борьба с вредителями', parentId: 'j_17', x: 100, y: 800, kappa: true },
  { id: 'j_19', title: 'Путь охотника. Стиратель. Часть 1', parentId: 'j_18', x: 100, y: 1000, kappa: true },
  { id: 'j_20', title: 'Путь охотника. Стиратель. Часть 2', parentId: 'j_19', x: 100, y: 1200, kappa: true },

  // От Продразведки к Водохлёбу
  { id: 'j_21', title: 'Водохлёб. Ищейки', parentId: 'j_16', x: 350, y: 600, kappa: false },
  { id: 'j_22', title: 'Водохлёб. Добытчик', parentId: 'j_21', x: 350, y: 800, kappa: false },
  { id: 'j_23', title: 'Водохлёб. Курьер', parentId: 'j_22', x: 350, y: 1000, kappa: false },
  { id: 'j_24', title: 'Водохлёб. Эхо', parentId: 'j_23', x: 350, y: 1200, kappa: false },
  { id: 'j_25', title: 'Водохлёб. Секреты', parentId: 'j_24', x: 350, y: 1400, kappa: false },

  // От Продразведки к Прекратить огонь
  { id: 'j_26', title: 'Прекратить огонь!', parentId: 'j_16', x: 600, y: 600, kappa: false },
  { id: 'j_27', title: 'Фельдшер', parentId: 'j_26', x: 600, y: 800, kappa: false },

  // --- ПОДВЕТКА 1.4.2 (Живчик и продолжение) ---
  { id: 'j_28', title: 'Путь выживальщика. Живчик', parentId: 'j_14', x: 1100, y: 400, kappa: true },
  { id: 'j_29', title: 'Путь выживальщика. Раненый зверь', parentId: 'j_28', x: 1100, y: 600, kappa: true },
  
  // Разветвление от Раненого зверя
  { id: 'j_30', title: 'Путь выживальщика. Хладнокровный', parentId: 'j_29', x: 800, y: 800, kappa: false },
  
  { id: 'j_31', title: 'Путь выживальщика. Крепыш', parentId: 'j_29', x: 1400, y: 800, kappa: true },
  
  // Ответвления от Крепыша
  { id: 'j_32', title: 'Путь выживальщика. Филин', parentId: 'j_31', x: 1000, y: 1000, kappa: true },
  { id: 'j_33', title: 'Путь выживальщика. Боевой медик', parentId: 'j_32', x: 1000, y: 1200, kappa: true },
  { id: 'j_34', title: 'Путь выживальщика. Торчок', parentId: 'j_33', x: 1000, y: 1400, kappa: true },

  { id: 'j_35', title: 'Отшельник', parentId: 'j_31', x: 1250, y: 1000, kappa: true },

  { id: 'j_36', title: 'Визит вежливости', parentId: 'j_31', x: 1500, y: 1000, kappa: true },
  { id: 'j_37', title: 'Ностальгия', parentId: 'j_36', x: 1500, y: 1200, kappa: true },
  { id: 'j_38', title: 'Долг лесника', parentId: 'j_37', x: 1400, y: 1400, kappa: true },
  { id: 'j_39', title: 'Рыбное место', parentId: 'j_37', x: 1600, y: 1400, kappa: true },

  // Огромная подветка: Путь охотника. Охранка
  { id: 'j_40', title: 'Путь охотника. Охранка', parentId: 'j_31', x: 2100, y: 1000, kappa: true },
  { id: 'j_41', title: 'Путь охотника. Справедливость', parentId: 'j_40', x: 1800, y: 1200, kappa: true },
  
  { id: 'j_42', title: 'Путь охотника. Трофей', parentId: 'j_40', x: 2050, y: 1200, kappa: false },
  { id: 'j_43', title: 'Залётные', parentId: 'j_42', x: 2050, y: 1400, kappa: false },
  
  { id: 'j_44', title: 'Путь охотника. Переучёт', parentId: 'j_40', x: 2300, y: 1200, kappa: false },
  
  // Ветка Очистки леса и её массивное поддерево
  { id: 'j_45', title: 'Путь охотника. Очистка леса', parentId: 'j_40', x: 2650, y: 1200, kappa: false },
  { id: 'j_46', title: 'Путь охотника. Администратор', parentId: 'j_45', x: 2400, y: 1400, kappa: false },
  
  // Наследники Администратора
  { id: 'j_47', title: 'Путь охотника. Оборотень в погонах', parentId: 'j_46', x: 2200, y: 1600, kappa: false },
  { id: 'j_48', title: 'Потрошитель', parentId: 'j_47', x: 2200, y: 1800, kappa: false }, // Дочерний от Оборотня
  
  { id: 'j_49', title: 'Путь охотника. Злой вахтёр', parentId: 'j_46', x: 2450, y: 1600, kappa: true },
  { id: 'j_50', title: 'Путь охотника. Начальник завода', parentId: 'j_46', x: 2700, y: 1600, kappa: true },
  { id: 'j_51', title: 'Путь охотника. Отступники', parentId: 'j_46', x: 2950, y: 1600, kappa: true },
  { id: 'j_52', title: 'Путь охотника. Контролёр', parentId: 'j_46', x: 3200, y: 1600, kappa: true },

  // Прямые продолжения Очистки леса
  { id: 'j_53', title: 'Клаустрофобия', parentId: 'j_45', x: 2650, y: 1400, kappa: true },
  { id: 'j_54', title: 'Крупная дичь', parentId: 'j_45', x: 2900, y: 1400, kappa: false },
  { id: 'j_55', title: 'Охотник', parentId: 'j_45', x: 3150, y: 1400, kappa: false },

  // Ответвления Санитар леса
  { id: 'j_56', title: 'Путь охотника. Санитар леса', parentId: 'j_40', x: 3500, y: 1200, kappa: true },
  { id: 'j_57', title: 'На охоту', parentId: 'j_56', x: 3400, y: 1400, kappa: true },
  
  { id: 'j_58', title: 'Путь охотника. Непреклонный', parentId: 'j_56', x: 3650, y: 1400, kappa: false }
];