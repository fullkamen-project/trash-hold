import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRAGO | В разработке",
};

export default function FragoPage() {
  return (
    <PlaceholderPage
      themeClass="theme-frago"
      logoSrc="/games/frago/frago-logo.svg"
      logoAlt="FRAGO"
      description="Тактический шутер 5х5"
      bgImage="/games/frago/bg.webp"
      bgVideo="/games/frago/video-loop.webm"
    />
  );
}