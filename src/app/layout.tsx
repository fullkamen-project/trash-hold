import type { Metadata } from "next";
import "./globals.css"; // Путь к вашим глобальным стилям и дизайн-токенам
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <body className="antialiased min-h-screen flex flex-col bg-base">
        <ThemeProvider>
          {/* Глобальная тактическая шапка (теперь доступна на всех страницах!) */}
          <Header />
          
          {/* Основной контент страницы (занимает всё свободное место) */}
          <main className="flex-grow flex flex-col w-full">
            {children}
          </main>
          
          {/* Глобальный подвал */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}