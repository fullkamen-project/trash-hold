import fs from 'fs';
import path from 'path';

// Путь к проблемной папке
const targetDir = path.join(process.cwd(), 'src', 'app', 'eft', 'progression', 'itemtracker');
// Путь к кэшу Next.js
const nextCache = path.join(process.cwd(), '.next');

// 1. Аппаратное удаление мертвой папки
if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
    console.log(`✅ Успешно удалена мертвая директория: ${targetDir}`);
} else {
    console.log(`➖ Директория уже удалена: ${targetDir}`);
}

// 2. Очистка кэша сборки (очень важно после удаления страниц)
if (fs.existsSync(nextCache)) {
    fs.rmSync(nextCache, { recursive: true, force: true });
    console.log(`✅ Очищен кэш сборки: .next`);
}

console.log('🚀 Кэш очищен! Теперь можно снова запускать npm run dev или npm run build.');
