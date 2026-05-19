export interface Quest {
  id: string;
  title: string;
  x: number;
  y: number;
  kappa: boolean;
  parentId?: string | null;
}

export const praporQuests: Quest[] = [
  // Начальный квест
  { id: 'pr_1', title: 'Стрельба по баночкам', x: 0, y: 0, parentId: null, kappa: true },

  // Ветка 1.1: Ад на земле
  { id: 'pr_2', title: 'Ад на земле. Часть 1', x: -1600, y: 180, parentId: 'pr_1', kappa: false },
  { id: 'pr_3', title: 'Ад на земле. Часть 2', x: -1600, y: 360, parentId: 'pr_2', kappa: false },

  // Ветка 1.2: Гренадёр
  { id: 'pr_4', title: 'Гренадёр', x: -1300, y: 180, parentId: 'pr_1', kappa: false },
  { id: 'pr_5', title: 'Искусство взрывотехники', x: -1300, y: 360, parentId: 'pr_4', kappa: false },

  // Ветка 1.3: Тест-драйв
  { id: 'pr_6', title: 'Тест-драйв. Часть 1', x: -1000, y: 180, parentId: 'pr_1', kappa: true },
  { id: 'pr_7', title: 'Тест-драйв. Часть 2', x: -1000, y: 360, parentId: 'pr_6', kappa: true },
  { id: 'pr_8', title: 'Тест-драйв. Часть 3', x: -1000, y: 540, parentId: 'pr_7', kappa: true },
  { id: 'pr_9', title: 'Тест-драйв. Часть 4', x: -1000, y: 720, parentId: 'pr_8', kappa: true },
  { id: 'pr_10', title: 'Тест-драйв. Часть 5', x: -1000, y: 900, parentId: 'pr_9', kappa: true },
  { id: 'pr_11', title: 'Тест-драйв. Часть 6', x: -1000, y: 1080, parentId: 'pr_10', kappa: true },

  // Ветка 1.4: Как в старые добрые
  { id: 'pr_12', title: 'Как в старые добрые. Часть 1', x: -700, y: 180, parentId: 'pr_1', kappa: false },
  { id: 'pr_13', title: 'Стандарт Качества', x: -700, y: 360, parentId: 'pr_12', kappa: false },
  { id: 'pr_14', title: 'Авиапочта', x: -700, y: 540, parentId: 'pr_13', kappa: false },
  { id: 'pr_15', title: 'Как в старые добрые. Часть 2', x: -700, y: 720, parentId: 'pr_14', kappa: false },
  { id: 'pr_16', title: 'Минута славы', x: -700, y: 900, parentId: 'pr_15', kappa: false },
  { id: 'pr_17', title: 'Наблюдатель', x: -700, y: 1080, parentId: 'pr_16', kappa: false },
  { id: 'pr_18', title: 'Серьёзные обвинения', x: -700, y: 1260, parentId: 'pr_17', kappa: false },
  { id: 'pr_19', title: 'Камера. Мотор!', x: -700, y: 1440, parentId: 'pr_18', kappa: false },
  { id: 'pr_20', title: 'Ответочка', x: -700, y: 1620, parentId: 'pr_19', kappa: false },
  { id: 'pr_21', title: 'Ключ от города', x: -700, y: 1800, parentId: 'pr_20', kappa: false },

  // Ветка 1.5: Проба пера (Основная и самая разветвленная магистраль)
  { id: 'pr_22', title: 'Проба пера', x: 600, y: 180, parentId: 'pr_1', kappa: true },
  { id: 'pr_23', title: 'Поисковая миссия', x: 600, y: 360, parentId: 'pr_22', kappa: true },
  { id: 'pr_24', title: 'Роскошная жизнь', x: 600, y: 540, parentId: 'pr_23', kappa: true },
  { id: 'pr_25', title: 'Проверка на вшивость', x: 600, y: 720, parentId: 'pr_24', kappa: true },
  { id: 'pr_26', title: 'Пикник со стрельбой', x: 600, y: 900, parentId: 'pr_25', kappa: true },
  { id: 'pr_27', title: 'Посылка из прошлого', x: 600, y: 1080, parentId: 'pr_26', kappa: true },
  
  // Ветка 1.5.2.1.2.1: Нефтянка
  { id: 'pr_28', title: 'Нефтянка', x: 600, y: 1260, parentId: 'pr_27', kappa: true },

  // Подветка Бункер (уходит влево от Нефтянки)
  { id: 'pr_29', title: 'Бункер. Часть 1', x: 300, y: 1440, parentId: 'pr_28', kappa: true },
  { id: 'pr_30', title: 'Бункер. Часть 2', x: 300, y: 1620, parentId: 'pr_29', kappa: true },
  { id: 'pr_31', title: 'Ренегатам тут не место', x: 300, y: 1800, parentId: 'pr_30', kappa: true },
  { id: 'pr_32', title: 'Документы', x: 300, y: 1980, parentId: 'pr_31', kappa: true },
  { id: 'pr_33', title: 'Спецсвязь', x: 300, y: 2160, parentId: 'pr_32', kappa: false },

  // Прямые ответвления от Нефтянки
  { id: 'pr_34', title: 'Белка и стрелка', x: 600, y: 1440, parentId: 'pr_28', kappa: true },
  { id: 'pr_35', title: 'Компромат', x: 900, y: 1440, parentId: 'pr_28', kappa: true },
  { id: 'pr_36', title: 'Рожки для мороженого', x: 750, y: 1620, parentId: 'pr_35', kappa: true },

  // Разветвление после Рожков для мороженого: Почтальон Печкин (влево) и Тряхнуть кассира (вправо)
  { id: 'pr_37', title: 'Почтальон Печкин. Часть 1', x: 700, y: 1800, parentId: 'pr_36', kappa: true },
  { id: 'pr_38', title: 'Почтальон Печкин. Часть 2', x: 700, y: 1980, parentId: 'pr_37', kappa: true },
  { id: 'pr_39', title: 'В чужой шкуре', x: 700, y: 2160, parentId: 'pr_37', kappa: true },
  { id: 'pr_40', title: 'Вам посылка', x: 700, y: 2340, parentId: 'pr_37', kappa: false },
  { id: 'pr_41', title: 'Слава КПСС. Часть 1', x: 600, y: 2520, parentId: 'pr_40', kappa: false },
  { id: 'pr_42', title: 'Слава КПСС. Часть 2', x: 700, y: 2520, parentId: 'pr_40', kappa: false },
  { id: 'pr_43', title: 'Земельный вопрос', x: 800, y: 2520, parentId: 'pr_40', kappa: false },

  // Ветка Тряхнуть кассира (уходит сильно вправо)
  { id: 'pr_44', title: 'Тряхнуть кассира', x: 1050, y: 1800, parentId: 'pr_36', kappa: true },
  { id: 'pr_45', title: 'Идеальный переговорщик', x: 1050, y: 1980, parentId: 'pr_44', kappa: true },
  
  // Ветка Анестезия и медицинские исследования
  { id: 'pr_46', title: 'Анестезия', x: 1050, y: 2160, parentId: 'pr_45', kappa: true },
  
  { id: 'pr_47', title: 'Игра на верняк', x: 950, y: 2340, parentId: 'pr_46', kappa: true },
  { id: 'pr_48', title: 'Ночная прогулка', x: 950, y: 2520, parentId: 'pr_47', kappa: false },

  { id: 'pr_49', title: 'Образцы', x: 1050, y: 2340, parentId: 'pr_46', kappa: true },
  { id: 'pr_50', title: 'Сотрудник Terragroup', x: 1050, y: 2520, parentId: 'pr_49', kappa: true },

  { id: 'pr_51', title: 'Кабинет химии', x: 1150, y: 2340, parentId: 'pr_46', kappa: true },
  { id: 'pr_52', title: 'Пристрелка', x: 1150, y: 2520, parentId: 'pr_51', kappa: false },
  { id: 'pr_53', title: 'Курьер', x: 1150, y: 2700, parentId: 'pr_52', kappa: false },
  { id: 'pr_54', title: 'Путь охотника. Садист', x: 1250, y: 2520, parentId: 'pr_51', kappa: true },
  { id: 'pr_55', title: 'Сотрудник Terragroup (Садист)', x: 1250, y: 2700, parentId: 'pr_54', kappa: true },

  // Знаменитая ветка Каратель (опускается параллельно от Идеального переговорщика)
  { id: 'pr_56', title: 'Каратель. Часть 1', x: 1450, y: 2160, parentId: 'pr_45', kappa: true },
  { id: 'pr_57', title: 'Каратель. Часть 2', x: 1450, y: 2340, parentId: 'pr_56', kappa: true },
  
  // Ответвление от Каратель 2: Простая задача
  { id: 'pr_58', title: 'Простая задача. Часть 1', x: 1350, y: 2520, parentId: 'pr_57', kappa: true },
  { id: 'pr_59', title: 'Простая задача. Часть 2', x: 1350, y: 2700, parentId: 'pr_58', kappa: true },
  { id: 'pr_60', title: 'Разведка', x: 1350, y: 2880, parentId: 'pr_58', kappa: true },

  // Продолжение цепочки Карателя
  { id: 'pr_61', title: 'Каратель. Часть 3', x: 1550, y: 2520, parentId: 'pr_57', kappa: true },
  { id: 'pr_62', title: 'Каратель. Часть 4', x: 1550, y: 2700, parentId: 'pr_61', kappa: true },
  
  // Разветвления после Каратель 4
  { id: 'pr_63', title: 'Короли высоток', x: 1450, y: 2880, parentId: 'pr_62', kappa: false },
  { id: 'pr_64', title: 'Лучшая работа на свете', x: 1450, y: 3060, parentId: 'pr_63', kappa: false },
  { id: 'pr_65', title: 'Своя земля', x: 1550, y: 2880, parentId: 'pr_62', kappa: false },
  
  // Магистраль к финалу Карателя
  { id: 'pr_66', title: 'Каратель. Часть 5', x: 1650, y: 2880, parentId: 'pr_62', kappa: true },
  { id: 'pr_67', title: 'Каратель. Часть 6', x: 1650, y: 3060, parentId: 'pr_66', kappa: true },
  
  // Финальные высокоуровневые квесты Прапора (после Каратель 6)
  { id: 'pr_68', title: 'Устрашитель', x: 1450, y: 3240, parentId: 'pr_67', kappa: true },
  { id: 'pr_69', title: 'Захват аванпоста', x: 1550, y: 3240, parentId: 'pr_67', kappa: false },
  { id: 'pr_70', title: 'Конвоир', x: 1650, y: 3240, parentId: 'pr_67', kappa: false },
  { id: 'pr_71', title: 'Городской жандарм. Охранник супермаркета', x: 1750, y: 3240, parentId: 'pr_67', kappa: false },
  { id: 'pr_72', title: 'Городской жандарм. Прерванный сеанс', x: 1750, y: 3420, parentId: 'pr_71', kappa: false },
  { id: 'pr_73', title: 'Городской жандарм - Новый участковый', x: 1750, y: 3600, parentId: 'pr_71', kappa: false },
  { id: 'pr_74', title: 'Спецзаказ', x: 2000, y: 3240, parentId: 'pr_67', kappa: false },
];