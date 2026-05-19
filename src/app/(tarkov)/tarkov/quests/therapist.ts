// therapist.ts
export interface Quest {
  id: string;
  title: string;
  parentId: string | null;
  x: number;
  y: number;
  kappa: boolean;
}

export const therapistQuests: Quest[] = [
  { id: 't_1', title: 'Первый в очереди', parentId: null, x: 0, y: 0, kappa: true },
  { id: 't_1_1', title: 'Дефицит', parentId: 't_1', x: 0, y: 200, kappa: true },
  
  // Ветки от Дефицита
  { id: 't_1_1_1', title: 'Операция "Водолей". Часть 1', parentId: 't_1_1', x: -300, y: 400, kappa: true },
  { id: 't_1_1_1_1', title: 'Операция "Водолей". Часть 2', parentId: 't_1_1_1', x: -300, y: 600, kappa: true },
  
  { id: 't_1_1_2', title: 'Санэпиднадзор. Часть 1', parentId: 't_1_1', x: 200, y: 400, kappa: true },
  { id: 't_1_1_2_1', title: 'Санэпиднадзор. Часть 2', parentId: 't_1_1_2', x: 200, y: 600, kappa: true },
  { id: 't_1_1_2_2', title: 'Пэйнкиллер', parentId: 't_1_1_2_1', x: 200, y: 800, kappa: true },
  { id: 't_1_1_2_3', title: 'Провизор', parentId: 't_1_1_2_2', x: 200, y: 1000, kappa: true },
  
  // Ветки от Провизора
  { id: 't_1_1_2_3_1', title: 'Сельпо', parentId: 't_1_1_2_3', x: -400, y: 1200, kappa: true },
  { id: 't_1_1_2_3_1_1', title: 'Коллеги. Часть 1', parentId: 't_1_1_2_3_1', x: -700, y: 1400, kappa: true },
  { id: 't_1_1_2_3_1_2', title: 'Коллеги. Часть 2', parentId: 't_1_1_2_3_1', x: -450, y: 1400, kappa: true },
  { id: 't_1_1_2_3_1_3', title: 'Коллеги. Часть 3', parentId: 't_1_1_2_3_1', x: -200, y: 1400, kappa: true },
  { id: 't_1_1_2_3_1_3_1', title: 'Ловкач', parentId: 't_1_1_2_3_1_3', x: -320, y: 1600, kappa: false },
  { id: 't_1_1_2_3_1_3_2', title: 'Сотрудник Terragroup', parentId: 't_1_1_2_3_1_3', x: -80, y: 1600, kappa: true },
  
  { id: 't_1_1_2_3_2', title: 'Планы снабжения', parentId: 't_1_1_2_3', x: -100, y: 1200, kappa: true },
  { id: 't_1_1_2_3_2_1', title: 'Опасная дорога', parentId: 't_1_1_2_3_2', x: -100, y: 1400, kappa: false },
  
  { id: 't_1_1_2_3_3', title: 'Своего рода саботаж', parentId: 't_1_1_2_3', x: 150, y: 1200, kappa: true },
  { id: 't_1_1_2_3_3_1', title: 'Опасная дорога', parentId: 't_1_1_2_3_3', x: 150, y: 1400, kappa: false },
  
  { id: 't_1_1_2_3_4', title: 'Авторем', parentId: 't_1_1_2_3', x: 400, y: 1200, kappa: true },
  
  { id: 't_1_1_2_3_5', title: 'Перепись населения', parentId: 't_1_1_2_3', x: 650, y: 1200, kappa: false },
  { id: 't_1_1_2_3_5_1', title: 'Инвентаризация. Часть 1', parentId: 't_1_1_2_3_5', x: 500, y: 1400, kappa: false },
  { id: 't_1_1_2_3_5_1_1', title: 'Инвентаризация. Часть 2', parentId: 't_1_1_2_3_5_1', x: 380, y: 1600, kappa: false },
  { id: 't_1_1_2_3_5_1_2', title: 'Непарадный Тарков', parentId: 't_1_1_2_3_5_1', x: 620, y: 1600, kappa: false },
  { id: 't_1_1_2_3_5_2', title: 'Городская медицина', parentId: 't_1_1_2_3_5', x: 800, y: 1400, kappa: false },
  { id: 't_1_1_2_3_5_2_1', title: 'Фельдшер', parentId: 't_1_1_2_3_5_2', x: 800, y: 1600, kappa: false },
  
  { id: 't_1_1_2_3_6', title: 'Медицинский журнал', parentId: 't_1_1_2_3', x: 1050, y: 1200, kappa: true },
  { id: 't_1_1_2_3_6_1', title: 'Отдых у моря', parentId: 't_1_1_2_3_6', x: 930, y: 1400, kappa: true },
  { id: 't_1_1_2_3_6_2', title: 'Брошенный груз', parentId: 't_1_1_2_3_6', x: 1150, y: 1400, kappa: true },
  { id: 't_1_1_2_3_6_3', title: 'Отследить отправление', parentId: 't_1_1_2_3_6', x: 1370, y: 1400, kappa: true },
  { id: 't_1_1_2_3_6_4', title: 'Ближе к народу', parentId: 't_1_1_2_3_6', x: 1590, y: 1400, kappa: true },
  
  { id: 't_1_1_2_3_7', title: 'Врачебная тайна. Часть 1', parentId: 't_1_1_2_3', x: 1850, y: 1200, kappa: true },
  { id: 't_1_1_2_3_7_1', title: 'Врачебная тайна. Часть 2', parentId: 't_1_1_2_3_7', x: 1850, y: 1400, kappa: true },
  
  // Ветки от Врачебная тайна. Часть 2
  { id: 't_1_1_2_3_7_1_1', title: 'Потерянный контакт', parentId: 't_1_1_2_3_7_1', x: 1650, y: 1600, kappa: true },
  { id: 't_1_1_2_3_7_1_1_1', title: 'Наркотрафик', parentId: 't_1_1_2_3_7_1_1', x: 1650, y: 1800, kappa: true },
  
  { id: 't_1_1_2_3_7_1_2', title: 'Врачебная тайна. Часть 3', parentId: 't_1_1_2_3_7_1', x: 2050, y: 1600, kappa: true },
  { id: 't_1_1_2_3_7_1_2_1', title: 'В здоровом теле здоровый дух', parentId: 't_1_1_2_3_7_1_2', x: 1900, y: 1800, kappa: false },
  { id: 't_1_1_2_3_7_1_2_2', title: 'Врачебная тайна. Часть 4', parentId: 't_1_1_2_3_7_1_2', x: 2200, y: 1800, kappa: true },
  
  // Ветки от Врачебная тайна. Часть 4
  { id: 't_1_1_2_3_7_1_2_2_1', title: 'Физкультурник', parentId: 't_1_1_2_3_7_1_2_2', x: 2050, y: 2000, kappa: true },
  { id: 't_1_1_2_3_7_1_2_2_1_1', title: 'Доктор "Айболит"', parentId: 't_1_1_2_3_7_1_2_2_1', x: 2050, y: 2200, kappa: true },
  
  { id: 't_1_1_2_3_7_1_2_2_2', title: 'Частная клиника', parentId: 't_1_1_2_3_7_1_2_2', x: 2300, y: 2000, kappa: true },
  { id: 't_1_1_2_3_7_1_2_2_2_1', title: 'Служба дезинфекции', parentId: 't_1_1_2_3_7_1_2_2_2', x: 2300, y: 2200, kappa: true },
  
  { id: 't_1_1_2_3_7_1_2_2_3', title: 'Врачебная тайна. Часть 5', parentId: 't_1_1_2_3_7_1_2_2', x: 2550, y: 2000, kappa: true },
  { id: 't_1_1_2_3_7_1_2_2_3_1', title: 'Врачебная тайна. Часть 6', parentId: 't_1_1_2_3_7_1_2_2_3', x: 2550, y: 2200, kappa: true }
];