import { ItemSearch } from '@/components/ItemSearch';
import { HubCard } from './HubCard';

export default function TarkovPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      

      {/* СТРОКА ПОИСКА */}
      <div className="mb-12 relative z-10"> {/* Added z-10 to ensure search results appear above other content */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-kamen-action" />
        <ItemSearch />
      </div>


      {/* ОСНОВНАЯ СЕТКА */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        
        {/* КАРТЫ (Левый большой блок) */}
        <HubCard
          href="/tarkov/maps"
          title="Карты"
          description="Подробные топографические данные всех локаций. выходы, спавны и ключи."
          badgeText="[Интерактив]"
          variant="large"
          // Пример, как вставить SVG иконку из Figma:
          // icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="..." fill="currentColor"/></svg>}
        />

        {/* КВЕСТЫ (Правый верхний, на 2 колонки) */}
        <HubCard
          href="/tarkov/quests"
          title="Квесты"
          description="Пошаговые гайды по выполнению задач всех торговцев."
          badgeText="[!]"
          customClass="md:col-span-2"
        />

        {/* ПАТРОНЫ */}
        <HubCard
          href="/tarkov/ammo"
          title="Патроны"
          description="Таблица пробития и урона"
        />

        {/* УБЕЖИЩЕ */}
        <HubCard
          href="/tarkov/hideout"
          title="Убежище"
          description="Расчет крафтов и модулей"
        />

        {/* ОТСЛЕЖИВАНИЕ ПРЕДМЕТОВ (Низ лево) */}
        <HubCard
          href="/tarkov/tracker"
          title="Отслеживание предметов"
          description="Отмечай то, что нужно для квестов и модулей убежища в реальном времени."
        />

        {/* КРАФТЫ (Низ центр) */}
        <HubCard
          href="/tarkov/crafts"
          title="Крафты"
          description="Выгодные рецепты для Убежища"
        />

        {/* БАРТЕРЫ (Низ право) */}
        <HubCard
          href="/tarkov/barters"
          title="Бартеры"
          description="Обмен предметов у торговцев"
        />

      {/* ДОСТИЖЕНИЯ */}
      <HubCard
        href="/tarkov/achievements"
        title="Достижения"
        description="Редкие и скрытые внутриигровые награды"
      />

      </div>
    </div>
  );
}