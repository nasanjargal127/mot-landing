import {
  HeroSection,
  IntroSection,
  LiveAccountSection,
  PlatformSection,
  SpreadSection,
  TransactionSection,
} from "@/src/sections/Home";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <IntroSection />
      <LiveAccountSection />
      <TransactionSection />
      <PlatformSection />
      <SpreadSection />
    </main>
  );
}
