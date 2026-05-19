export interface Quest {
  id: string;
  title: string;
  parentId: string | null;
  x: number;
  y: number;
  kappa: boolean;
}

export const refQuests: Quest[] = [
  { id: 'ref_1', title: 'Легкие деньги. Часть 1', x: 0, y: 0, parentId: null, kappa: false },
  { id: 'ref_2', title: 'Легкие деньги. Часть 2', x: 0, y: 180, parentId: 'ref_1', kappa: false },
  { id: 'ref_3', title: 'Баланс. Часть 1', x: -250, y: 360, parentId: 'ref_2', kappa: false },
  { id: 'ref_4', title: 'Баланс. Часть 2', x: -250, y: 540, parentId: 'ref_3', kappa: false },
  { id: 'ref_5', title: 'Сюрприз', x: -500, y: 720, parentId: 'ref_4', kappa: false },
  { id: 'ref_6', title: 'Отвлекающий манёвр. Часть 1', x: -250, y: 720, parentId: 'ref_4', kappa: false },
  { id: 'ref_7', title: 'Отвлекающий манёвр. Часть 2', x: -250, y: 900, parentId: 'ref_6', kappa: false },
  { id: 'ref_8', title: 'Профпригодность - Часть 1', x: 250, y: 360, parentId: 'ref_2', kappa: false },
  { id: 'ref_9', title: 'Профпригодность - Часть 2', x: 250, y: 540, parentId: 'ref_8', kappa: false },
  { id: 'ref_10', title: 'Вперёд, к вершинам! Часть 1', x: 250, y: 720, parentId: 'ref_9', kappa: false },
  { id: 'ref_11', title: 'Вперёд, к вершинам! Часть 2', x: 250, y: 900, parentId: 'ref_10', kappa: false },
  { id: 'ref_12', title: 'Вперёд, к вершинам! Часть 3', x: 250, y: 1080, parentId: 'ref_11', kappa: false },
  { id: 'ref_13', title: 'Вперёд, к вершинам! Часть 4', x: 250, y: 1260, parentId: 'ref_12', kappa: false },
  { id: 'ref_14', title: 'Вперёд, к вершинам! Часть 5', x: 250, y: 1440, parentId: 'ref_13', kappa: false },
  { id: 'ref_15', title: 'Вперёд, к вершинам! Часть 6', x: 250, y: 1620, parentId: 'ref_14', kappa: false },
  { id: 'ref_16', title: 'Удержаться в лидерах', x: 250, y: 1800, parentId: 'ref_15', kappa: false },
  { id: 'ref_17', title: 'Сделка с совестью. Часть 1', x: 550, y: 1980, parentId: 'ref_16', kappa: false },
  { id: 'ref_18', title: 'Сделка с совестью. Часть 2', x: 550, y: 2160, parentId: 'ref_17', kappa: false },
  { id: 'ref_19', title: 'На распутье', x: 300, y: 2340, parentId: 'ref_18', kappa: false },
  { id: 'ref_20', title: 'Между двух огней', x: 550, y: 2340, parentId: 'ref_18', kappa: false },
  { id: 'ref_21', title: 'Неожиданный подарок', x: 800, y: 2340, parentId: 'ref_18', kappa: false },
  { id: 'ref_22', title: 'Отложенная награда', x: 800, y: 2520, parentId: 'ref_21', kappa: false },
  { id: 'ref_23', title: 'Дела на Арене [PVP ZONE]', x: 600, y: 360, parentId: 'ref_2', kappa: false },
  { id: 'ref_24', title: 'Обеспечить просмотры', x: 850, y: 360, parentId: 'ref_2', kappa: false },
];