"use client";

import { useEffect, useState } from "react";

interface NewbieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewbieModal({ isOpen, onClose }: NewbieModalProps) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  // Управление задержкой размонтирования для плавных анимаций
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const timer = setTimeout(() => setIsVisible(true), 10); // Даем DOM отрисоваться перед стартом анимации
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsRendered(false), 300); // Ждем 300ms (продолжительность transition)
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Эффект для закрытия модального окна по нажатию клавиши Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isRendered) {
    return null;
  }

  return (
    // Полупрозрачный фон (Backdrop)
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-base/80 backdrop-blur-sm transition-opacity duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose} // Закрытие по клику на фон
    >
      {/* Панель модального окна */}
      <div
        className={`relative w-full max-w-lg p-6 m-4 bg-card-menu border border-lines-hover rounded-lg shadow-lg transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри окна
      >
        {/* Кнопка "Закрыть" */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
          aria-label="Закрыть модальное окно"
        >
          <div className="icon-mask icon-eft-profile-btn-close w-6 h-6" />
        </button>

        <h2 className="text-2xl font-blender-medium text-primary uppercase mb-4">Гайд для новичков</h2>
        <div className="space-y-4 text-text-secondary">
          <p>Добро пожаловать в Центр Тактической Адаптации! Этот раздел поможет вам освоиться в мире Escape from Tarkov.</p>
          <p>Здесь вы найдете информацию о ключевых механиках, советы по выживанию и ссылки на полезные ресурсы.</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><a href="/eft/quests" onClick={onClose} className="text-primary/80 hover:text-primary underline">Первые квесты</a></li>
            <li><a href="/eft/keepitems" onClick={onClose} className="text-primary/80 hover:text-primary underline">Что оставлять в схроне</a></li>
            <li><a href="/eft/maps" onClick={onClose} className="text-primary/80 hover:text-primary underline">Изучение карт</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}