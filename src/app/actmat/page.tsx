// Страница-заглушка для Active Matter
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Active Matter | В разработке",
};

export default function ActmatPage() {
  return (
    <PlaceholderPage
      themeClass="theme-actmat"
      logoSrc="/games/actmat/actmat-logo.svg"
      logoAlt="Active Matter"
      description="В разработке"
      bgImage="/games/actmat/bg.webp"
      bgVideo="/games/actmat/video-loop.webm"
    />
  );
}