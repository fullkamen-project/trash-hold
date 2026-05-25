// Страница-заглушка для Wardogs
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wardogs | В разработке",
};

export default function WardogsPage() {
  return (
    <PlaceholderPage
      themeClass="theme-wdg"
      logoSrc="/games/wardogs/wardogs-logo.svg"
      logoAlt="Wardogs"
      description="В разработке"
      bgImage="/games/wardogs/bg.webp"
      bgVideo="/games/wardogs/video-loop.webm"
    />
  );
}