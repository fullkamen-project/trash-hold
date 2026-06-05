import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');
const layoutDir = path.join(srcDir, 'components', 'layout');
const headerModulesDir = path.join(layoutDir, 'header-modules');

// Убеждаемся, что целевая папка существует
if (!fs.existsSync(headerModulesDir)) {
  fs.mkdirSync(headerModulesDir, { recursive: true });
  console.log('📁 Создана папка: src/components/layout/header-modules');
}

// Карта переноса модулей
const filesToMove = [
  { old: ['components', 'features', 'StreamStatus.tsx'], new: 'StreamStatus.tsx' },
  { old: ['components', 'features', 'PlayerTelemetry.tsx'], new: 'PlayerTelemetry.tsx' },
  { old: ['components', 'features', 'TacticalSearch.tsx'], new: 'TacticalSearch.tsx' },
  { old: ['components', 'features', 'SearchItemCard.tsx'], new: 'SearchItemCard.tsx' },
  { old: ['components', 'features', 'SearchEmptyState.tsx'], new: 'SearchEmptyState.tsx' },
  { old: ['components', 'ui', 'NewbieButton.tsx'], new: 'NewbieButton.tsx' },
  { old: ['components', 'ui', 'NewbieModal.tsx'], new: 'NewbieModal.tsx' }
];

console.log('🔄 Начинаем перенос модулей...');

// Перемещаем файлы
filesToMove.forEach(f => {
  const oldPath = path.join(srcDir, ...f.old);
  const newPath = path.join(headerModulesDir, f.new);

  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`✅ Перемещен: ${f.new}`);
  } else if (fs.existsSync(newPath)) {
    console.log(`👌 Уже на месте: ${f.new}`);
  } else {
    console.warn(`⚠️ Не найден для переноса (возможно, уже перенесен): ${f.old.join('/')}`);
  }
});