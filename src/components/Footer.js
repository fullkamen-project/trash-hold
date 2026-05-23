const socialLinks = [
  {
    name: "Twitch",
    url: "https://twitch.tv/fullkamen",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@fullkamen", // Замени на свою ссылку
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/fullkamen", // Замени на свою ссылку
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@fullkamen", // Замени на свою ссылку
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-1.06-.63-1.9-1.47-2.46-2.55-1.02-2.02-1.06-4.38.12-6.32.65-1.09 1.54-2.01 2.65-2.71.02-.01.03-.02.05-.03v-4.02c.26.1.52.2.78.31.8.34 1.6.54 2.41.69.02 2.88.01 5.76.02 8.64.01.47-.02.95-.02 1.42-.16-.02-.32-.04-.48-.07-1.19-.22-2.35-.66-3.39-1.31-.33-.2-.65-.42-.96-.66.03-1.46.02-2.93.01-4.39.01-2.33-.41-4.64-1.52-6.69-1.04-1.9-2.86-3.29-4.91-3.74 0-4.02.01-8.04.01-12.06 1.44.01 2.88.02 4.32.02.01 1.49-.09 2.98-.02 4.47.25-.09.5-.18.76-.26.78-.26 1.56-.42 2.35-.5.02-1.48.01-2.96.01-4.44z"></path></svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-lines-hover bg-base p-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-text-muted hover:text-primary transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* Copyright Text */}
        <p className="text-xs text-text-muted font-blender-book uppercase tracking-wider text-center sm:text-right">
          © 2024-2026 FULL KAMEN PROJECT. ВСЕ ПРАВА ЗАЩИЩЕНЫ. ПРОЕКТ НЕ ЯВЛЯЕТСЯ КОММЕРЧЕСКИМ.
        </p>
      </div>
    </footer>
  );
}