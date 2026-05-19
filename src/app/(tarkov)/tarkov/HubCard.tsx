import Link from "next/link";
import React from "react";

interface HubCardProps {
  // --- Основные данные ---
  title: string;          // Заголовок: "Карты", "Квесты"
  description: string;    // Описание: "Подробные топографические данные..."
  href: string;           // Ссылка: "/tarkov/maps"

  // --- Дизайн и кастомизация (поля из Figma) ---
  
  // Иконка. Экспортируй из Figma как SVG и вставь сюда как JSX.
  // <svg width="24" height="24" viewBox="0 0 24 24">...</svg>
  icon?: React.ReactNode; 
  
  // Текст для шильдика/бейджа в углу.
  badgeText?: string;     
  
  // Вариант размера для сетки. 'large' для карточки 2x1.
  variant?: 'default' | 'large'; 
  
  // Если фон карточки - это сложный SVG паттерн, экспортируй его как код.
  customSvgBackground?: React.ReactNode;
  
  // Для уникальных Tailwind-классов, если нужно (например, md:col-span-2).
  customClass?: string;
}

export function HubCard({
  title,
  href,
  description,
  icon,
  badgeText,
  variant = 'default',
  customSvgBackground,
  customClass
}: HubCardProps) {
  const isDefault = variant === 'default';

  // --- Логика для стилей на основе пропсов ---
  const gridClasses = variant === 'large' ? 'md:row-span-2' : '';
  const paddingClasses = variant === 'large' ? 'p-8' : 'p-6';
  const titleSizeClasses = variant === 'large' ? 'text-2xl' : 'text-xl';
  const descriptionSizeClasses = variant === 'large' ? 'text-sm' : 'text-[10px]';

  // Если карточка маленькая (isDefault), мы отключаем стандартный CSS-фон и рамки, 
  // передавая управление нашему кастомному SVG из Figma
  const backgroundClasses = isDefault 
    ? '' 
    : 'bg-kamen-stone/50 border border-white/5 hover:border-kamen-action/50 overflow-hidden';

  return (
    <Link
      href={href}
      className={`group relative flex flex-col justify-between transition-all ${backgroundClasses} ${paddingClasses} ${gridClasses} ${customClass || ''}`}
    >
      {/* КАСТОМНАЯ SVG-ФИГУРА ИЗ FIGMA */}
      {isDefault && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none transition-colors duration-300" preserveAspectRatio="none" viewBox="0 0 348 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Основной фон и обводка */}
          <path d="M8 0.25H330.687C332.742 0.250065 334.713 1.06641 336.166 2.51953L345.48 11.834C346.934 13.2873 347.75 15.2583 347.75 17.3135V142.687C347.75 144.742 346.934 146.713 345.48 148.166L336.166 157.48C334.713 158.934 332.742 159.75 330.687 159.75H17.3135C15.2583 159.75 13.2873 158.934 11.834 157.48L2.51953 148.166C1.06641 146.713 0.250061 144.742 0.25 142.687V131.164C0.25 129.195 0.999958 127.3 2.34668 125.863L7.01855 120.879C8.45203 119.35 9.25 117.332 9.25 115.236V44.7637C9.25 42.6677 8.45203 40.6502 7.01855 39.1211L2.34668 34.1367C0.999958 32.7003 0.25 30.805 0.25 28.8359V8C0.25 3.71979 3.71979 0.25 8 0.25Z" strokeWidth="0.5" className="fill-[#161618] group-hover:fill-[#1c1c1f] stroke-[#222225] group-hover:stroke-kamen-action transition-all duration-300"/>
        </svg>
      )}

      {customSvgBackground && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">{customSvgBackground}</div>
      )}

      {badgeText && (
        <div className="absolute top-4 right-6 text-kamen-action/20 font-mono text-[10px] uppercase">{badgeText}</div>
      )}

      <div className="relative z-10">
        {icon && <div className="mb-4 text-kamen-action group-hover:text-white transition-colors">{icon}</div>}
        <h2 className={`${titleSizeClasses} font-black text-white uppercase`}>{title}</h2>
        <p className={`${descriptionSizeClasses} text-kamen-slate uppercase mt-2 opacity-60`}>{description}</p>
      </div>
    </Link>
  );
}