import { HeroSection } from "@/components/home/HeroSection";
import { FilterBar } from "@/components/home/FilterBar";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { RoomsSection } from "@/components/home/RoomsSection";
import { TrustSection } from "@/components/home/TrustSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0">
      <HeroSection />
      <FilterBar />
      <FeaturedProperties />
      <RoomsSection />
      <TrustSection />
    </div>
  );
}
