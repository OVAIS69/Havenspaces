import { Shield, CheckCircle, Users, Star } from "lucide-react";

export function TrustSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold font-heading text-gray-900 mb-16">Why choose HavenSpaces?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 font-bold">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">100% Verified Listings</h3>
                        <p className="text-muted-foreground max-w-xs mx-auto">We physically verify every property so what you see is exactly what you get.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 font-bold">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Zero Brokerage Options</h3>
                        <p className="text-muted-foreground max-w-xs mx-auto">Directly connect with owners and save thousands on brokerage fees.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 font-bold">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Instant Move-in</h3>
                        <p className="text-muted-foreground max-w-xs mx-auto">Complete paperwork digitally and move into your new home in 24 hours.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
