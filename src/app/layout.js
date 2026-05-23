import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ФУЛЛ КАМЕНЬ - Тактический Хаб",
  description: "Главная страница выбора игровых хабов: Escape From Tarkov и Fragmentary Order.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen">
        {/* The page content will be injected here */}
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}