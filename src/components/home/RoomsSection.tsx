import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Wifi, Zap, Coffee } from "lucide-react";
import Image from "next/image";

export function RoomsSection() {
    return (
        <section className="bg-gray-50 py-20 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Content */}
                    <div className="md:w-1/2">
                        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4 border-none">Student Friendly</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
                            Modern Rooms & PGs <br /> <span className="text-emerald-600">Designed for Youth</span>
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
                            Find affordable, fully furnished shared spaces with like-minded people. No restriction, no brokerage, just good vibes.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-500">
                                    <Wifi className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Fast Wifi</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-500">
                                    <Coffee className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Food Included</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-500">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Housekeeping</span>
                            </div>
                        </div>

                        <Button className="bg-emerald-600 text-white shadow-lg shadow-emerald-200" asChild>
                            <Link href="/pg">
                                Explore Rooms <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Detailed Image Grid */}
                    <div className="md:w-1/2 relative">
                        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/images/pg_room.png"
                                alt="Student Room"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-bold text-gray-900">Zolo Stays, Koramangala</p>
                                        <p className="text-xs text-muted-foreground">Starting ₹12,000/mo</p>
                                    </div>
                                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Fast Filling</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
