import { PropertyCard } from "./PropertyCard";
import { Button } from "@/components/ui/button";

const MOCK_PROPERTIES = [
    {
        id: 1,
        image: "/images/listing_1.png",
        title: "Skyline Luxury Apartment",
        location: "Indiranagar, Bangalore",
        price: "₹45,000",
        beds: 3,
        baths: 2,
        area: "1,850 sq ft",
        tag: "Verified",
    },
    {
        id: 2,
        image: "/images/listing_2.png",
        title: "Aurum Residences",
        location: "Koramangala, Bangalore",
        price: "₹32,000",
        beds: 2,
        baths: 2,
        area: "1,200 sq ft",
        tag: "Trending",
    },
    {
        id: 3,
        image: "/images/listing_3.png",
        title: "Urban Heights Studio",
        location: "HSR Layout, Bangalore",
        price: "₹22,000",
        beds: 1,
        baths: 1,
        area: "850 sq ft",
        tag: "New",
    },
];

export function FeaturedProperties() {
    return (
        <section className="container mx-auto px-6 py-10 mt-10">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">Featured Properties</h2>
                    <p className="text-muted-foreground">Handpicked properties for you in top locations.</p>
                </div>
                <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 hidden md:flex">
                    View All Properties
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_PROPERTIES.map((prop) => (
                    <PropertyCard key={prop.id} {...prop} />
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Button variant="outline" className="w-full">
                    View All Properties
                </Button>
            </div>
        </section>
    );
}
