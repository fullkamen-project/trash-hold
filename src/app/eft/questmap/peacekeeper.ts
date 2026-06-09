// peacekeeper.ts
export interface Quest {
  id: string;
  title: string;
  parentId: string | null;
  x: number;
  y: number;
  kappa: boolean;
}

export const peacekeeperQuests: Quest[] = [
  { id: 'pk_1', title: 'Рыболовные снасти', parentId: null, x: 0, y: 0, kappa: true },
  
  // Ветки от Рыболовных снастей
  { id: 'pk_2', title: 'Сафари на тигра', parentId: 'pk_1', x: -400, y: 200, kappa: true },
  { id: 'pk_3', title: 'Трофеи', parentId: 'pk_1', x: 400, y: 200, kappa: false },
  { id: 'pk_4', title: 'Металлолом', parentId: 'pk_1', x: 0, y: 200, kappa: true },

  // Ветка от Трофеев
  { id: 'pk_5', title: 'Заказ', parentId: 'pk_3', x: 400, y: 400, kappa: false },

  // Основная ветка от Металлолома
  { id: 'pk_6', title: 'Глаз орла', parentId: 'pk_4', x: 0, y: 400, kappa: true },
  { id: 'pk_7', title: 'Гуманитарка', parentId: 'pk_6', x: 0, y: 600, kappa: true },

  // Огромный веер от Гуманитарки
  { id: 'pk_8', title: 'Ревизия. Маяк', parentId: 'pk_7', x: -1000, y: 800, kappa: true },
  { id: 'pk_9', title: 'Ревизия. Резерв', parentId: 'pk_7', x: -750, y: 800, kappa: true },
  { id: 'pk_10', title: 'Секта. Часть 1', parentId: 'pk_7', x: -450, y: 800, kappa: true },
  { id: 'pk_11', title: 'Перехват инициативы', parentId: 'pk_7', x: -200, y: 800, kappa: false },
  { id: 'pk_12', title: 'Ревизия. Улицы Таркова', parentId: 'pk_7', x: 150, y: 800, kappa: false },
  { id: 'pk_13', title: 'Путевка в Санаторий. Часть 1', parentId: 'pk_7', x: 800, y: 800, kappa: true },

  // Ответвления от Ревизии Резерва, Секты и Улиц
  { id: 'pk_14', title: 'Секретные разработки', parentId: 'pk_9', x: -750, y: 1000, kappa: true },
  { id: 'pk_15', title: 'Секта. Часть 2', parentId: 'pk_10', x: -450, y: 1000, kappa: true },
  { id: 'pk_16', title: 'Новые маршруты', parentId: 'pk_12', x: 50, y: 1000, kappa: false },
  { id: 'pk_17', title: 'Худшая работа на свете', parentId: 'pk_12', x: 280, y: 1000, kappa: false },

  // Ветка Путевка в Санаторий. Часть 1
  { id: 'pk_18', title: 'Перенаселение', parentId: 'pk_13', x: 600, y: 1000, kappa: true },
  { id: 'pk_19', title: 'Путевка в Санаторий. Часть 2', parentId: 'pk_13', x: 1000, y: 1000, kappa: true },

  // Ветки от Перенаселения
  { id: 'pk_20', title: 'Подчистить хвосты', parentId: 'pk_18', x: 450, y: 1200, kappa: true },
  { id: 'pk_21', title: 'Здоровая альтернатива', parentId: 'pk_18', x: 700, y: 1200, kappa: true },
  
  // Дочерний квест для "Подчистить хвосты" и "Здоровая альтернатива"
  { id: 'pk_22', title: 'План "Перехват"', parentId: 'pk_20', x: 575, y: 1400, kappa: true },

  // Продолжение ветки Санатория
  { id: 'pk_23', title: 'Путевка в Санаторий. Часть 3', parentId: 'pk_19', x: 1000, y: 1200, kappa: true },

  // Ветки от Санатория Часть 3
  { id: 'pk_24', title: 'Противостояние', parentId: 'pk_23', x: 850, y: 1400, kappa: false },
  { id: 'pk_25', title: 'Путевка в Санаторий. Часть 4', parentId: 'pk_23', x: 1150, y: 1400, kappa: true },

  { id: 'pk_26', title: 'Путевка в Санаторий. Часть 5', parentId: 'pk_25', x: 1150, y: 1600, kappa: true },
  { id: 'pk_27', title: 'Путевка в Санаторий. Часть 6', parentId: 'pk_26', x: 1150, y: 1800, kappa: true },
  { id: 'pk_28', title: 'Путевка в Санаторий. Часть 7', parentId: 'pk_27', x: 1150, y: 2000, kappa: true },

  // Развод от Санатория Часть 7
  { id: 'pk_29', title: 'Проезд закрыт', parentId: 'pk_28', x: 500, y: 2200, kappa: false },
  { id: 'pk_30', title: 'Зеленый коридор', parentId: 'pk_28', x: 720, y: 2200, kappa: false },
  { id: 'pk_31', title: 'Груз X. Часть 1', parentId: 'pk_28', x: 1000, y: 2200, kappa: true },
  { id: 'pk_32', title: 'Мокрое дело. Часть 1', parentId: 'pk_28', x: 1550, y: 2200, kappa: true },

  // Ветка Груз X
  { id: 'pk_33', title: 'Груз X. Часть 2', parentId: 'pk_31', x: 1000, y: 2400, kappa: true },
  { id: 'pk_34', title: 'Груз X. Часть 3', parentId: 'pk_33', x: 1000, y: 2600, kappa: true },
  { id: 'pk_35', title: 'Груз X. Часть 4', parentId: 'pk_34', x: 1000, y: 2800, kappa: true },
  
  // Концовки ветки Груз X
  { id: 'pk_36', title: 'Бессоница', parentId: 'pk_35', x: 780, y: 3000, kappa: true },
  { id: 'pk_37', title: 'Расстановка приоритетов', parentId: 'pk_35', x: 1000, y: 3000, kappa: false },
  { id: 'pk_38', title: 'Техосмотр', parentId: 'pk_35', x: 1220, y: 3000, kappa: false },

  // Ветка Мокрое дело
  { id: 'pk_39', title: 'Мокрое дело. Часть 2', parentId: 'pk_32', x: 1550, y: 2400, kappa: true },
  { id: 'pk_40', title: 'Мокрое дело. Часть 3', parentId: 'pk_39', x: 1550, y: 2600, kappa: true },
  { id: 'pk_41', title: 'Мокрое дело. Часть 4', parentId: 'pk_40', x: 1550, y: 2800, kappa: true },

  // Разветвление от Мокрого дела Часть 4
  { id: 'pk_42', title: 'Мокрое дело. Часть 5', parentId: 'pk_41', x: 1450, y: 3000, kappa: true },
  { id: 'pk_43', title: 'Наставник', parentId: 'pk_41', x: 1700, y: 3000, kappa: false },

  // Концовка после Мокрого дела Часть 5
  { id: 'pk_44', title: 'Худшая работа на свете (Финал)', parentId: 'pk_42', x: 1250, y: 3200, kappa: false },
  { id: 'pk_45', title: 'Мокрое дело. Часть 6', parentId: 'pk_42', x: 1550, y: 3200, kappa: true },

  // Финальные квесты
  { id: 'pk_46', title: 'Снайпер-психопат', parentId: 'pk_45', x: 1350, y: 3400, kappa: false },
  { id: 'pk_47', title: 'Проводник', parentId: 'pk_45', x: 1650, y: 3400, kappa: true },
  { id: 'pk_48', title: 'Чистильщик', parentId: 'pk_47', x: 1650, y: 3600, kappa: false }
];