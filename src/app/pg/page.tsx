import { RoomsSection } from "@/components/home/RoomsSection";
import { FilterBar } from "@/components/home/FilterBar";

export default function PGPage() {
    return (
        <div className="min-h-screen pb-20">
            <div className="bg-neutral-900 py-20 text-center">
                <h1 className="text-4xl font-bold font-heading text-white mb-4">Student Living & PGs</h1>
                <p className="text-gray-400">Affordable, safe, and community-driven stays.</p>
            </div>
            <div className="-mt-10 mb-20">
                <FilterBar />
            </div>
            <RoomsSection />
        </div>
    );
}
