"use client";

import Image from "next/image";
import { useRef, useState, MouseEvent, useEffect, useMemo } from "react";
import { praporQuests } from "./prapor";
import { therapistQuests } from "./therapist";
import { skierQuests } from "./skier";
import { peacekeeperQuests } from "./peacekeeper";
import { mechanicQuests } from "./mechanic";
import { ragmanQuests } from "./ragman";
import { jaegerQuests } from "./jaeger";
import { fenceQuests } from "./fence";
import { refQuests } from "./ref";
import { btrQuests } from "./btrdriver";
import { lightkeeperQuests } from "./lightkeeper";

const tradersConfig = [
  { id: 'prapor', name: 'Прапор', quests: praporQuests, x: 0 },
  { id: 'therapist', name: 'Терапевт', quests: therapistQuests, x: 2500 },
  { id: 'skier', name: 'Лыжник', quests: skierQuests, x: 5000 },
  { id: 'peacekeeper', name: 'Миротворец', quests: peacekeeperQuests, x: 7500 },
  { id: 'mechanic', name: 'Механик', quests: mechanicQuests, x: 10500 },
  { id: 'ragman', name: 'Барахольщик', quests: ragmanQuests, x: 13500 },
  { id: 'jaeger', name: 'Егерь', quests: jaegerQuests, x: 17000 },
  
  { id: 'lightkeeper', name: 'Смотритель маяка', quests: lightkeeperQuests, x: 21000 },
  { id: 'btrdriver', name: 'Водитель БТР', quests: btrQuests, x: 22000 },
  { id: 'ref', name: 'Реф', quests: refQuests, x: 23000 },
  { id: 'fence', name: 'Скупщик', quests: fenceQuests, x: 24000 },
];

export default function QuestsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 150 });
  const [startMouse, setStartMouse] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.6);
  const [completedQuests, setCompletedQuests] = useState<Record<string, boolean>>({});
  
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyKappa, setOnlyKappa] = useState(false);

  const stats = useMemo(() => {
    let total = 0;
    let completed = 0;
    tradersConfig.forEach(trader => {
      trader.quests.forEach(quest => {
        total++;
        if (completedQuests[quest.id]) {
          completed++;
        }
      });
    });
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percent };
  }, [completedQuests]);

  // Функция автоматического скролла и приближения к квесту
  const scrollToQuest = (titleQuery: string) => {
    if (!titleQuery.trim()) return;

    let foundQuest: any = null;
    let foundTrader: any = null;

    for (const trader of tradersConfig) {
      const quest = trader.quests.find(q => 
        q.title.toLowerCase().includes(titleQuery.toLowerCase())
      );
      if (quest) {
        foundQuest = quest;
        foundTrader = trader;
        break;
      }
    }

    if (foundQuest && foundTrader) {
      // Глобальные координаты относительно начала координат внутри p-[500px]
      const questGlobalX = foundTrader.x + foundQuest.x;
      const questGlobalY = 250 + foundQuest.y; // 250px — это отступ сетки квестов под торговцем

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Оптимальный зум для чтения карточки
      const targetScale = 0.85; 
      setScale(targetScale);

      // Магия центрирования с учетом p-[500px] (сдвиг холста на 500px)
      setPosition({
        x: windowWidth / 2 - (questGlobalX + 500) * targetScale,
        y: windowHeight / 2 - (questGlobalY + 500) * targetScale
      });
    }
  };

  const toggleQuest = (questId: string) => {
    setCompletedQuests(prev => {
      const isCurrentlyCompleted = prev[questId];
      const nextState = { ...prev };

      if (!isCurrentlyCompleted) {
        nextState[questId] = true;
        let currentQuestId: string | null | undefined = questId;
        const currentTrader = tradersConfig.find(t => t.quests.some(q => q.id === questId));

        if (currentTrader) {
          while (currentQuestId) {
            const currentQuest = currentTrader.quests.find(q => q.id === currentQuestId);
            if (currentQuest && currentQuest.parentId) {
              nextState[currentQuest.parentId] = true;
              currentQuestId = currentQuest.parentId;
            } else {
              currentQuestId = null;
            }
          }
        }
      } else {
        nextState[questId] = false;
      }
      return nextState;
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelRaw = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.1;
      let newScale = scale;

      if (e.deltaY < 0) {
        newScale = Math.min(scale * (1 + zoomSpeed), 2);
      } else {
        newScale = Math.max(scale * (1 - zoomSpeed), 0.1);
      }

      if (newScale === scale) return;

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const containerX = (mouseX - position.x) / scale;
      const containerY = (mouseY - position.y) / scale;

      setScale(newScale);
      setPosition({
        x: mouseX - containerX * newScale,
        y: mouseY - containerY * newScale
      });
    };

    container.addEventListener("wheel", handleWheelRaw as any, { passive: false });
    return () => container.removeEventListener("wheel", handleWheelRaw as any);
  }, [scale, position]);

  const handleMouseDown = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('input') || (e.target as HTMLElement).closest('.control-panel')) return;
    setIsDragging(true);
    setStartMouse({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - startMouse.x, y: e.clientY - startMouse.y });
  };

  const renderConnector = (x1: number, y1: number, x2: number, y2: number, isCurrentDone: boolean, id: string, isDimmed: boolean) => {
    x1 = Math.round(x1);
    y1 = Math.round(y1);
    x2 = Math.round(x2);
    y2 = Math.round(y2);

    let d = "";
    if (Math.abs(x1 - x2) < 50) {
      d = `M ${x1} ${y1} L ${x1} ${y2}`;
    } else {
      const midY = Math.round(y1 + 40);
      d = `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
    }
    
    return (
      <path
        key={`line-${id}`}
        d={d}
        fill="none"
        stroke={isCurrentDone ? 'rgba(255, 255, 255, 0.03)' : '#ff4d00'}
        strokeWidth="2"
        className={!isCurrentDone ? 'line-ants' : ''}
        style={{ 
          transition: 'stroke 0.4s ease, opacity 0.3s ease',
          opacity: isDimmed ? 0.1 : 1 
        }}
      />
    );
  };

  return (
    <div className="w-full h-screen bg-kamen-bg flex flex-col overflow-hidden select-none relative">
      <style>{`
        @keyframes ants { to { stroke-dashoffset: -12; } }
        .line-ants { stroke-dasharray: 6, 6; animation: ants 0.8s linear infinite; }
        html, body { overflow: hidden !important; height: 100% !important; }
        ::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
        * { scrollbar-width: none !important; -ms-overflow-style: none !important; }
      `}</style>

      {/* КОМПАКТНАЯ ПАНЕЛЬ УПРАВЛЕНИЯ ФУНКЦИЯМИ */}
      <div className="control-panel absolute top-6 left-6 z-50 bg-kamen-stone/95 border border-white/5 backdrop-blur-md p-4 flex flex-col gap-3 w-[280px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Прогресс квестов</span>
          <span className="text-[11px] font-mono font-black text-white">{stats.completed}/{stats.total} <span className="text-kamen-action">({stats.percent}%)</span></span>
        </div>
        
        {/* Интерактивный поиск с лупой внутри */}
        <div className="relative flex items-center bg-black/40 border border-white/10 focus-within:border-kamen-action/50 transition-colors pr-2">
          <input 
            type="text"
            placeholder="ПОИСК КВЕСТА..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                scrollToQuest(searchQuery);
              }
            }}
            className="w-full bg-transparent px-3 py-2 text-[10px] font-black tracking-wider text-white uppercase placeholder-white/20 focus:outline-none"
          />
          <div className="flex items-center gap-2">
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="text-white/30 hover:text-white text-[10px] font-bold px-1"
              >
                ✕
              </button>
            )}
            <button 
              onClick={() => scrollToQuest(searchQuery)}
              className="text-white/40 hover:text-kamen-action transition-colors p-1 flex items-center justify-center"
              title="Найти на карте"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Переключатель Только КАППА */}
        <button 
          onClick={() => setOnlyKappa(!onlyKappa)}
          className={`w-full py-2 text-[9px] font-black uppercase tracking-widest transition-all border ${
            onlyKappa 
              ? 'bg-kamen-action text-black border-transparent shadow-[0_0_15px_rgba(255,77,0,0.3)]' 
              : 'bg-transparent border-white/10 text-white/50 hover:text-white hover:border-white/20'
          }`}
        >
          {onlyKappa ? '✓ Только КАППА' : 'Фильтр: Все квесты'}
        </button>
      </div>

      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        className={`flex-1 relative overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        <div 
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: '0 0',
          }}
          className="absolute top-0 left-0 p-[500px] min-w-max transition-transform duration-300 ease-out"
        >
          {tradersConfig.map((trader) => (
            <div 
              key={trader.id} 
              style={{
                position: 'absolute',
                left: `${trader.x}px`,
                top: '0px'
              }}
              className="flex flex-col items-center w-[220px] relative"
            >
              <span className="text-white font-black uppercase text-[10px] tracking-[0.2em] opacity-40 mb-4 whitespace-nowrap">
                {trader.name}
              </span>
              
              <div className="relative w-[150px] h-[150px] mb-[100px] border border-white/5 bg-kamen-stone/20 select-none pointer-events-none">
                <Image 
                  src={`/images/traders/${trader.id}.png`} 
                  alt={trader.name} 
                  fill 
                  className="object-cover opacity-80" 
                  sizes="150px"
                  draggable="false"
                />

                <svg className="absolute pointer-events-none overflow-visible left-1/2 bottom-0 w-0 h-0">
                  {trader.quests.map((quest) => {
                    if (!quest.parentId) {
                      const isCurrentDone = completedQuests[quest.id];
                      
                      const matchesSearch = searchQuery ? quest.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
                      const matchesKappa = onlyKappa ? quest.kappa : true;
                      const isDimmed = !matchesSearch || !matchesKappa;

                      return renderConnector(
                        0, 0,
                        quest.x, 102, 
                        isCurrentDone, 
                        `start-${trader.id}-${quest.id}`,
                        isDimmed
                      );
                    }
                    return null;
                  })}
                </svg>
              </div>

              <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-0 h-0 overflow-visible">
                <svg className="absolute pointer-events-none overflow-visible" style={{ zIndex: 0, left: 0, top: 0 }}>
                  {trader.quests.map((quest) => {
                    const questCenterX = quest.x; 
                    const isCurrentDone = completedQuests[quest.id];
                    
                    if (quest.parentId) {
                      const parent = trader.quests.find(q => q.id === quest.parentId);
                      if (parent) {
                        const matchesSearch = searchQuery ? quest.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
                        const matchesKappa = onlyKappa ? quest.kappa : true;
                        const isDimmed = !matchesSearch || !matchesKappa;

                        return renderConnector(
                          parent.x, parent.y + 114, 
                          questCenterX, quest.y + 2,         
                          isCurrentDone,
                          quest.id,
                          isDimmed
                        );
                      }
                    }
                    return null;
                  })}
                </svg>

                {trader.quests.map((quest) => {
                  const isCompleted = completedQuests[quest.id];
                  
                  const matchesSearch = searchQuery ? quest.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
                  const matchesKappa = onlyKappa ? quest.kappa : true;

                  let cardOpacity = "opacity-100";
                  
                  if (!matchesSearch) {
                    cardOpacity = "opacity-10";
                  } else if (!matchesKappa) {
                    cardOpacity = "opacity-20";
                  } else if (isCompleted) {
                    cardOpacity = "opacity-30";
                  }

                  return (
                    <div 
                      key={quest.id}
                      style={{ 
                        transform: `translate(calc(${quest.x}px - 50%), ${quest.y}px)`, 
                        zIndex: 10 
                      }}
                      className={`absolute w-[220px] p-4 bg-kamen-stone/90 border backdrop-blur-md transition-all duration-300 ${cardOpacity} ${
                        !isCompleted && matchesSearch && matchesKappa ? 'shadow-[0_10px_40px_rgba(0,0,0,0.6)] border-white/5' : ''
                      } ${quest.kappa ? 'border-kamen-action/30' : ''}`}
                    >
                      <div className="flex justify-between items-start gap-3 mb-4">
                        <span className="text-[10px] font-black text-white uppercase italic leading-tight tracking-tight">
                          {quest.title}
                        </span>
                        {quest.kappa && <span className="text-[8px] bg-kamen-action text-black px-1.5 py-0.5 font-bold">KAPPA</span>}
                      </div>

                      <button 
                        onClick={() => toggleQuest(quest.id)}
                        className={`w-full py-2 text-[9px] font-black uppercase tracking-widest transition-all border ${
                          isCompleted 
                            ? 'bg-white/5 border-white/10 text-white/20' 
                            : 'bg-transparent border-white/10 text-white/40 hover:border-kamen-action hover:text-white'
                        }`}
                      >
                        {isCompleted ? 'ГОТОВО' : 'ВЫПОЛНИТЬ'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}