// Страница-заглушка для Arc Raiders
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Raiders | В разработке",
};

export default function ArcraidersPage() {
  return (
    <PlaceholderPage
      themeClass="theme-arcr"
      logoSrc="/games/arcraiders/arcraiders-logo.svg"
      logoAlt="Arc Raiders"
      description="В разработке"
      bgImage="/games/arcraiders/bg.webp"
      bgVideo="/games/arcraiders/video-loop.webm"
    />
  );
}