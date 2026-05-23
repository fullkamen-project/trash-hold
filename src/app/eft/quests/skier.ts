// skier.ts
export interface Quest {
  id: string;
  title: string;
  parentId: string | null;
  x: number;
  y: number;
  kappa: boolean;
}

export const skierQuests: Quest[] = [
  { id: 's_1', title: 'По коням', parentId: null, x: 0, y: 0, kappa: true },
  { id: 's_2', title: 'Снабженец', parentId: 's_1', x: 0, y: 200, kappa: true },
  
  // Три основные ветки от Снабженца
  { id: 's_3', title: 'Движуха', parentId: 's_2', x: -350, y: 400, kappa: true },
  { id: 's_4', title: 'Друг с Запада. Часть 1', parentId: 's_2', x: 0, y: 400, kappa: true },
  { id: 's_5', title: 'Вымогатель', parentId: 's_2', x: 750, y: 400, kappa: true },
  
  // Ветка от Друг с Запада. Часть 1
  { id: 's_6', title: 'Друг с Запада. Часть 2', parentId: 's_4', x: 0, y: 600, kappa: true },
  
  // Ветки от Друг с Запада. Часть 2
  { id: 's_7', title: 'Подстава', parentId: 's_6', x: -350, y: 800, kappa: true },
  { id: 's_8', title: 'Долгая дорога', parentId: 's_6', x: 0, y: 800, kappa: true },
  { id: 's_9', title: 'Ленд-лиз. Часть 1', parentId: 's_6', x: 350, y: 800, kappa: true },

  // Ветка от Подставы
  { id: 's_10', title: 'Осведомлён, значит вооружён', parentId: 's_7', x: -350, y: 1000, kappa: true },
  { id: 's_11', title: 'Прикормка', parentId: 's_10', x: -350, y: 1200, kappa: true },
  
  // Ветки от Прикормки
  { id: 's_12', title: 'Деза', parentId: 's_11', x: -700, y: 1400, kappa: false },
  { id: 's_13', title: 'Кремень', parentId: 's_11', x: -450, y: 1400, kappa: true },
  { id: 's_14', title: 'Чужое добро', parentId: 's_11', x: -200, y: 1400, kappa: false },
  { id: 's_15', title: 'Закрытый клуб', parentId: 's_11', x: 50, y: 1400, kappa: true },
  { id: 's_16', title: 'Должник', parentId: 's_11', x: 280, y: 1400, kappa: false },
  
  // Ветки ниже Прикормки
  { id: 's_17', title: 'Тихий калибр', parentId: 's_12', x: -700, y: 1600, kappa: false },
  { id: 's_18', title: 'Связи на севере', parentId: 's_17', x: -700, y: 1800, kappa: false },
  
  { id: 's_19', title: 'Неудержимый интерес', parentId: 's_13', x: -450, y: 1600, kappa: false },
  { id: 's_20', title: 'Опасный реквизит', parentId: 's_19', x: -450, y: 1800, kappa: false },
  
  { id: 's_21', title: 'Домашний арест. Часть 1', parentId: 's_16', x: 280, y: 1600, kappa: false },
  { id: 's_22', title: 'Домашний арест. Часть 2', parentId: 's_21', x: 280, y: 1800, kappa: false },

  // Ветка от Долгой дороги
  { id: 's_23', title: 'Пропавший груз', parentId: 's_8', x: 0, y: 1000, kappa: true },
  { id: 's_24', title: 'Совершенно секретно', parentId: 's_23', x: 0, y: 1200, kappa: false },

  // Ветка от Ленд-лиз. Часть 1
  { id: 's_25', title: 'Ленд-лиз. Часть 2', parentId: 's_9', x: 350, y: 1000, kappa: true },
  { id: 's_26', title: 'Миротворческая миссия', parentId: 's_25', x: 350, y: 1200, kappa: true },

  // Ветка от Вымогателя
  { id: 's_27', title: 'Что на флешке?', parentId: 's_5', x: 750, y: 600, kappa: true },
  
  // Ветки от Что на флешке?
  { id: 's_28', title: 'Мутное дело', parentId: 's_27', x: 550, y: 800, kappa: true },
  { id: 's_29', title: 'Золотые понты', parentId: 's_27', x: 950, y: 800, kappa: true },
  
  // Ветка от Мутного дела
  { id: 's_30', title: 'Скорая помощь', parentId: 's_28', x: 550, y: 1000, kappa: true },
  
  // Ветка от Золотых понтов
  { id: 's_31', title: 'Реагент. Часть 1', parentId: 's_29', x: 950, y: 1000, kappa: true },
  
  // Ветки от Реагент. Часть 1
  { id: 's_32', title: 'Реагент. Часть 2', parentId: 's_31', x: 950, y: 1200, kappa: true },
  { id: 's_33', title: 'Бомж с Полихима', parentId: 's_31', x: 1750, y: 1200, kappa: true },
  
  // Ниже Бомжа с Полихима
  { id: 's_34', title: 'Поставщик', parentId: 's_33', x: 1750, y: 1400, kappa: true },
  
  // Продолжение цепочки Реагентов
  { id: 's_35', title: 'Реагент. Часть 3', parentId: 's_32', x: 950, y: 1400, kappa: true },
  { id: 's_36', title: 'Реагент. Часть 4', parentId: 's_35', x: 950, y: 1600, kappa: true },
  
  // Ветки от Реагент. Часть 4
  { id: 's_37', title: 'Безопасный коридор', parentId: 's_36', x: 500, y: 1800, kappa: true },
  { id: 's_38', title: 'Выкуп доверия', parentId: 's_36', x: 720, y: 1800, kappa: false },
  { id: 's_39', title: 'Простое любопытство', parentId: 's_36', x: 940, y: 1800, kappa: true },
  { id: 's_40', title: 'Большой заказчик', parentId: 's_36', x: 1160, y: 1800, kappa: true },
  { id: 's_41', title: 'Витамины. Часть 1', parentId: 's_36', x: 1450, y: 1800, kappa: true },
  
  // Тупиковые ответвления ниже Реагент. Часть 4
  { id: 's_42', title: 'Забудем старые обиды', parentId: 's_39', x: 940, y: 2000, kappa: false },
  { id: 's_43', title: 'Без обид', parentId: 's_40', x: 1160, y: 2000, kappa: false },
  
  // Ветка Витаминов
  { id: 's_44', title: 'Витамины. Часть 2', parentId: 's_41', x: 1450, y: 2000, kappa: true },
  { id: 's_45', title: 'Финансовые пирамиды', parentId: 's_44', x: 1300, y: 2200, kappa: false },
  { id: 's_46', title: 'Секреты идеального вкуса. Часть 1', parentId: 's_44', x: 1600, y: 2200, kappa: false },
  { id: 's_47', title: 'Секреты идеального вкуса. Часть 2', parentId: 's_46', x: 1600, y: 2400, kappa: false }
];