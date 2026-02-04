import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { FilterBar } from "@/components/home/FilterBar";

export default function BuyPage() {
    return (
        <div className="min-h-screen pb-20">
            <div className="bg-neutral-900 py-20 text-center">
                <h1 className="text-4xl font-bold font-heading text-white mb-4">Buy Properties</h1>
                <p className="text-gray-400">Find your dream home from our verified listings.</p>
            </div>
            <FilterBar />
            <div className="mt-10">
                <FeaturedProperties />
            </div>
        </div>
    );
}
