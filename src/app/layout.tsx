import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Философия Каменизма",
  description: "Официальный хаб проектов Full Kamen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased dark" suppressHydrationWarning>
      <body 
        className="min-h-full flex flex-col selection:bg-kamen-action selection:text-black font-mono"
        suppressHydrationWarning
      >
        {/* Здесь нет глобальной шапки, она определяется в подпапках layout.tsx */}
        {children}
        
        <footer className="w-full py-8 border-t border-white/5 mt-auto">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-30 text-[10px] uppercase tracking-[0.3em]">
            <span>© 2026 FULL KAMEN</span>
            <span>ФИЛОСОФИЯ КАМЕНИЗМА</span>
          </div>
        </footer>
      </body>
    </html>
  );
}