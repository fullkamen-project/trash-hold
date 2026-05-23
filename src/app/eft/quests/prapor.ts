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
  { id: 'eft-prapor-1', title: 'Стрельба по баночкам', x: 0, y: 0, parentId: null, kappa: true },

  // Ветка 1.1: Ад на земле
  { id: 'eft-prapor-2', title: 'Ад на земле. Часть 1', x: -1600, y: 180, parentId: 'eft-prapor-1', kappa: false },
  { id: 'eft-prapor-3', title: 'Ад на земле. Часть 2', x: -1600, y: 360, parentId: 'eft-prapor-2', kappa: false },

  // Ветка 1.2: Гренадёр
  { id: 'eft-prapor-4', title: 'Гренадёр', x: -1300, y: 180, parentId: 'eft-prapor-1', kappa: false },
  { id: 'eft-prapor-5', title: 'Искусство взрывотехники', x: -1300, y: 360, parentId: 'eft-prapor-4', kappa: false },

  // Ветка 1.3: Тест-драйв
  { id: 'eft-prapor-6', title: 'Тест-драйв. Часть 1', x: -1000, y: 180, parentId: 'eft-prapor-1', kappa: true },
  { id: 'eft-prapor-7', title: 'Тест-драйв. Часть 2', x: -1000, y: 360, parentId: 'eft-prapor-6', kappa: true },
  { id: 'eft-prapor-8', title: 'Тест-драйв. Часть 3', x: -1000, y: 540, parentId: 'eft-prapor-7', kappa: true },
  { id: 'eft-prapor-9', title: 'Тест-драйв. Часть 4', x: -1000, y: 720, parentId: 'eft-prapor-8', kappa: true },
  { id: 'eft-prapor-10', title: 'Тест-драйв. Часть 5', x: -1000, y: 900, parentId: 'eft-prapor-9', kappa: true },
  { id: 'eft-prapor-11', title: 'Тест-драйв. Часть 6', x: -1000, y: 1080, parentId: 'eft-prapor-10', kappa: true },

  // Ветка 1.4: Как в старые добрые
  { id: 'eft-prapor-12', title: 'Как в старые добрые. Часть 1', x: -700, y: 180, parentId: 'eft-prapor-1', kappa: false },
  { id: 'eft-prapor-13', title: 'Стандарт Качества', x: -700, y: 360, parentId: 'eft-prapor-12', kappa: false },
  { id: 'eft-prapor-14', title: 'Авиапочта', x: -700, y: 540, parentId: 'eft-prapor-13', kappa: false },
  { id: 'eft-prapor-15', title: 'Как в старые добрые. Часть 2', x: -700, y: 720, parentId: 'eft-prapor-14', kappa: false },
  { id: 'eft-prapor-16', title: 'Минута славы', x: -700, y: 900, parentId: 'eft-prapor-15', kappa: false },
  { id: 'eft-prapor-17', title: 'Наблюдатель', x: -700, y: 1080, parentId: 'eft-prapor-16', kappa: false },
  { id: 'eft-prapor-18', title: 'Серьёзные обвинения', x: -700, y: 1260, parentId: 'eft-prapor-17', kappa: false },
  { id: 'eft-prapor-19', title: 'Камера. Мотор!', x: -700, y: 1440, parentId: 'eft-prapor-18', kappa: false },
  { id: 'eft-prapor-20', title: 'Ответочка', x: -700, y: 1620, parentId: 'eft-prapor-19', kappa: false },
  { id: 'eft-prapor-21', title: 'Ключ от города', x: -700, y: 1800, parentId: 'eft-prapor-20', kappa: false },

  // Ветка 1.5: Проба пера (Основная и самая разветвленная магистраль)
  { id: 'eft-prapor-22', title: 'Проба пера', x: 600, y: 180, parentId: 'eft-prapor-1', kappa: true },
  { id: 'eft-prapor-23', title: 'Поисковая миссия', x: 600, y: 360, parentId: 'eft-prapor-22', kappa: true },
  { id: 'eft-prapor-24', title: 'Роскошная жизнь', x: 600, y: 540, parentId: 'eft-prapor-23', kappa: true },
  { id: 'eft-prapor-25', title: 'Проверка на вшивость', x: 600, y: 720, parentId: 'eft-prapor-24', kappa: true },
  { id: 'eft-prapor-26', title: 'Пикник со стрельбой', x: 600, y: 900, parentId: 'eft-prapor-25', kappa: true },
  { id: 'eft-prapor-27', title: 'Посылка из прошлого', x: 600, y: 1080, parentId: 'eft-prapor-26', kappa: true },
  
  // Ветка 1.5.2.1.2.1: Нефтянка
  { id: 'eft-prapor-28', title: 'Нефтянка', x: 600, y: 1260, parentId: 'eft-prapor-27', kappa: true },

  // Подветка Бункер (уходит влево от Нефтянки)
  { id: 'eft-prapor-29', title: 'Бункер. Часть 1', x: 300, y: 1440, parentId: 'eft-prapor-28', kappa: true },
  { id: 'eft-prapor-30', title: 'Бункер. Часть 2', x: 300, y: 1620, parentId: 'eft-prapor-29', kappa: true },
  { id: 'eft-prapor-31', title: 'Ренегатам тут не место', x: 300, y: 1800, parentId: 'eft-prapor-30', kappa: true },
  { id: 'eft-prapor-32', title: 'Документы', x: 300, y: 1980, parentId: 'eft-prapor-31', kappa: true },
  { id: 'eft-prapor-33', title: 'Спецсвязь', x: 300, y: 2160, parentId: 'eft-prapor-32', kappa: false },

  // Прямые ответвления от Нефтянки
  { id: 'eft-prapor-34', title: 'Белка и стрелка', x: 600, y: 1440, parentId: 'eft-prapor-28', kappa: true },
  { id: 'eft-prapor-35', title: 'Компромат', x: 900, y: 1440, parentId: 'eft-prapor-28', kappa: true },
  { id: 'eft-prapor-36', title: 'Рожки для мороженого', x: 750, y: 1620, parentId: 'eft-prapor-35', kappa: true },

  // Разветвление после Рожков для мороженого: Почтальон Печкин (влево) и Тряхнуть кассира (вправо)
  { id: 'eft-prapor-37', title: 'Почтальон Печкин. Часть 1', x: 700, y: 1800, parentId: 'eft-prapor-36', kappa: true },
  { id: 'eft-prapor-38', title: 'Почтальон Печкин. Часть 2', x: 700, y: 1980, parentId: 'eft-prapor-37', kappa: true },
  { id: 'eft-prapor-39', title: 'В чужой шкуре', x: 700, y: 2160, parentId: 'eft-prapor-37', kappa: true },
  { id: 'eft-prapor-40', title: 'Вам посылка', x: 700, y: 2340, parentId: 'eft-prapor-37', kappa: false },
  { id: 'eft-prapor-41', title: 'Слава КПСС. Часть 1', x: 600, y: 2520, parentId: 'eft-prapor-40', kappa: false },
  { id: 'eft-prapor-42', title: 'Слава КПСС. Часть 2', x: 700, y: 2520, parentId: 'eft-prapor-40', kappa: false },
  { id: 'eft-prapor-43', title: 'Земельный вопрос', x: 800, y: 2520, parentId: 'eft-prapor-40', kappa: false },

  // Ветка Тряхнуть кассира (уходит сильно вправо)
  { id: 'eft-prapor-44', title: 'Тряхнуть кассира', x: 1050, y: 1800, parentId: 'eft-prapor-36', kappa: true },
  { id: 'eft-prapor-45', title: 'Идеальный переговорщик', x: 1050, y: 1980, parentId: 'eft-prapor-44', kappa: true },
  
  // Ветка Анестезия и медицинские исследования
  { id: 'eft-prapor-46', title: 'Анестезия', x: 1050, y: 2160, parentId: 'eft-prapor-45', kappa: true },
  
  { id: 'eft-prapor-47', title: 'Игра на верняк', x: 950, y: 2340, parentId: 'eft-prapor-46', kappa: true },
  { id: 'eft-prapor-48', title: 'Ночная прогулка', x: 950, y: 2520, parentId: 'eft-prapor-47', kappa: false },

  { id: 'eft-prapor-49', title: 'Образцы', x: 1050, y: 2340, parentId: 'eft-prapor-46', kappa: true },
  { id: 'eft-prapor-50', title: 'Сотрудник Terragroup', x: 1050, y: 2520, parentId: 'eft-prapor-49', kappa: true },

  { id: 'eft-prapor-51', title: 'Кабинет химии', x: 1150, y: 2340, parentId: 'eft-prapor-46', kappa: true },
  { id: 'eft-prapor-52', title: 'Пристрелка', x: 1150, y: 2520, parentId: 'eft-prapor-51', kappa: false },
  { id: 'eft-prapor-53', title: 'Курьер', x: 1150, y: 2700, parentId: 'eft-prapor-52', kappa: false },
  { id: 'eft-prapor-54', title: 'Путь охотника. Садист', x: 1250, y: 2520, parentId: 'eft-prapor-51', kappa: true },
  { id: 'eft-prapor-55', title: 'Сотрудник Terragroup (Садист)', x: 1250, y: 2700, parentId: 'eft-prapor-54', kappa: true },

  // Знаменитая ветка Каратель (опускается параллельно от Идеального переговорщика)
  { id: 'eft-prapor-56', title: 'Каратель. Часть 1', x: 1450, y: 2160, parentId: 'eft-prapor-45', kappa: true },
  { id: 'eft-prapor-57', title: 'Каратель. Часть 2', x: 1450, y: 2340, parentId: 'eft-prapor-56', kappa: true },
  
  // Ответвление от Каратель 2: Простая задача
  { id: 'eft-prapor-58', title: 'Простая задача. Часть 1', x: 1350, y: 2520, parentId: 'eft-prapor-57', kappa: true },
  { id: 'eft-prapor-59', title: 'Простая задача. Часть 2', x: 1350, y: 2700, parentId: 'eft-prapor-58', kappa: true },
  { id: 'eft-prapor-60', title: 'Разведка', x: 1350, y: 2880, parentId: 'eft-prapor-58', kappa: true },

  // Продолжение цепочки Карателя
  { id: 'eft-prapor-61', title: 'Каратель. Часть 3', x: 1550, y: 2520, parentId: 'eft-prapor-57', kappa: true },
  { id: 'eft-prapor-62', title: 'Каратель. Часть 4', x: 1550, y: 2700, parentId: 'eft-prapor-61', kappa: true },
  
  // Разветвления после Каратель 4
  { id: 'eft-prapor-63', title: 'Короли высоток', x: 1450, y: 2880, parentId: 'eft-prapor-62', kappa: false },
  { id: 'eft-prapor-64', title: 'Лучшая работа на свете', x: 1450, y: 3060, parentId: 'eft-prapor-63', kappa: false },
  { id: 'eft-prapor-65', title: 'Своя земля', x: 1550, y: 2880, parentId: 'eft-prapor-62', kappa: false },
  
  // Магистраль к финалу Карателя
  { id: 'eft-prapor-66', title: 'Каратель. Часть 5', x: 1650, y: 2880, parentId: 'eft-prapor-62', kappa: true },
  { id: 'eft-prapor-67', title: 'Каратель. Часть 6', x: 1650, y: 3060, parentId: 'eft-prapor-66', kappa: true },
  
  // Финальные высокоуровневые квесты Прапора (после Каратель 6)
  { id: 'eft-prapor-68', title: 'Устрашитель', x: 1450, y: 3240, parentId: 'eft-prapor-67', kappa: true },
  { id: 'eft-prapor-69', title: 'Захват аванпоста', x: 1550, y: 3240, parentId: 'eft-prapor-67', kappa: false },
  { id: 'eft-prapor-70', title: 'Конвоир', x: 1650, y: 3240, parentId: 'eft-prapor-67', kappa: false },
  { id: 'eft-prapor-71', title: 'Городской жандарм. Охранник супермаркета', x: 1750, y: 3240, parentId: 'eft-prapor-67', kappa: false },
  { id: 'eft-prapor-72', title: 'Городской жандарм. Прерванный сеанс', x: 1750, y: 3420, parentId: 'eft-prapor-71', kappa: false },
  { id: 'eft-prapor-73', title: 'Городской жандарм - Новый участковый', x: 1750, y: 3600, parentId: 'eft-prapor-71', kappa: false },
  { id: 'eft-prapor-74', title: 'Спецзаказ', x: 2000, y: 3240, parentId: 'eft-prapor-67', kappa: false },
];