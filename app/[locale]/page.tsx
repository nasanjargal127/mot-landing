import {
  HeroSection,
  IntroSection,
  LiveAccountSection,
  PlatformSection,
  SpreadSection,
  TransactionSection,
} from "@/src/sections/Home";
import { StepsSection } from "@/src/sections/Layout";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <IntroSection />
      <LiveAccountSection />
      <TransactionSection />
      <PlatformSection />
      <SpreadSection />
      <StepsSection />
    </main>
  );
}
