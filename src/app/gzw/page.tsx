// Страница-заглушка для Gray Zone Warfare
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gray Zone Warfare | В разработке",
};

export default function GzwPage() {
  return (
    <PlaceholderPage
      themeClass="theme-gzw"
      logoSrc="/games/gzw/gzw-logo.svg"
      logoAlt="Gray Zone Warfare"
      description="В разработке"
      bgImage="/games/gzw/bg.webp"
      bgVideo="/games/gzw/video-loop.webm"
    />
  );
}