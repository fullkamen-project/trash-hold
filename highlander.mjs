import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

// Список файлов-самозванцев подлежащих уничтожению
const ghosts = [
    path.join(projectRoot, 'Header.tsx'),
    path.join(projectRoot, 'src', 'components', 'Header.tsx'),
    path.join(projectRoot, 'src', 'components', 'header.tsx')
];

ghosts.forEach((filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath); // Аппаратное удаление
        console.log(`✅ Уничтожен клон: ${filePath}`);
    } else {
        console.log(`➖ Клон не найден (уже удален): ${filePath}`);
    }
});

console.log('\n🎯 Операция завершена. Остался только один ультимативный Хедер в src/components/layout/Header/Header.tsx!');