"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_apartment.png"
                    alt="Modern Apartment with City View"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 md:bg-gradient-to-r md:from-black/50 md:to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl text-white"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6 drop-shadow-md">
                        Find a place that <br />
                        <span className="text-emerald-400">feels like home.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 font-light max-w-lg drop-shadow-sm">
                        Verified flats, rooms, and PG accommodations across the city. No brokerage, fully furnished options available.
                    </p>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-col md:flex-row items-center bg-white p-3 rounded-2xl shadow-xl max-w-xl">
                        <div className="flex-1 w-full px-2 border-r border-gray-100">
                            <label className="text-xs text-gray-400 font-medium ml-3 mb-1 block">Location</label>
                            <div className="flex items-center px-3">
                                <MapPin className="w-4 h-4 text-emerald-500 mr-2" />
                                <Input
                                    placeholder="e.g. Koramangala"
                                    className="border-none shadow-none focus-visible:ring-0 p-0 h-auto text-gray-800 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                        </div>

                        <div className="flex-1 w-full px-2">
                            <label className="text-xs text-gray-400 font-medium ml-3 mb-1 block">Property Type</label>
                            <select className="w-full bg-transparent text-sm font-medium text-gray-700 px-3 py-1 outline-none cursor-pointer">
                                <option>Flat / Apartment</option>
                                <option>Shared Room / PG</option>
                                <option>Independent House</option>
                            </select>
                        </div>

                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 h-14 ml-2 shadow-lg shadow-emerald-500/30">
                            Search
                        </Button>
                    </div>

                    {/* Search Bar - Mobile Placeholder */}
                    <div className="md:hidden w-full">
                        <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 shadow-lg">
                            <Search className="w-4 h-4 mr-2" />
                            Start Your Search
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
