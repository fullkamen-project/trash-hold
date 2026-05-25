// Страница-заглушка для Arena Breakout: Infinite
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arena Breakout: Infinite | В разработке",
};

export default function AbiPage() {
  return (
    <PlaceholderPage
      themeClass="theme-abi"
      logoSrc="/games/abi/abi-logo.svg"
      logoAlt="Arena Breakout: Infinite"
      description="PC-версия популярного шутера"
      bgImage="/games/abi/bg.webp"
      bgVideo="/games/abi/video-loop.webm"
    />
  );
}