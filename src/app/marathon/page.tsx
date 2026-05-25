// Страница-заглушка для Marathon
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marathon | В разработке",
};

export default function MarathonPage() {
  return (
    <PlaceholderPage
      themeClass="theme-mrthn"
      logoSrc="/games/marathon/marathon-logo.svg"
      logoAlt="Marathon"
      description="В разработке"
      bgImage="/games/marathon/bg.webp"
      bgVideo="/games/marathon/video-loop.webm"
    />
  );
}