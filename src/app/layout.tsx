import type { Metadata } from "next";
import "./globals.css"; // Путь к вашим глобальным стилям и дизайн-токенам

export const metadata: Metadata = {
  title: "ЦТА Хаб",
  description: "Технический паспорт дизайн-системы и игровой хаб",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Указываем язык в соответствии с вашей локализацией
    <html lang="ru">
      {/* antialiased делает шрифты (включая ваш BlenderPro) более гладкими */}
      <body className="antialiased">{children}</body>
    </html>
  );
}