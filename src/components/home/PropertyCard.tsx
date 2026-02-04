"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, BedDouble, Bath, Square, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface PropertyCardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    area: string;
    tag?: string;
}

export function PropertyCard({ image, title, location, price, beds, baths, area, tag }: PropertyCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                    {tag && <Badge variant="secondary" className="bg-white/90 backdrop-blur text-emerald-700 font-bold shadow-sm">{tag}</Badge>}
                </div>
                <div className="absolute top-4 right-4 z-10">
                    <Button size="icon" variant="ghost" className="rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                    </Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-bold font-heading text-gray-900 leading-tight mb-1 group-hover:text-emerald-600 transition-colors">{title}</h3>
                        <div className="flex items-center text-muted-foreground text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {location}
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-bold text-emerald-600">{price}</p>
                        <span className="text-xs text-muted-foreground">/ month</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 py-4 border-t border-gray-100 mt-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <BedDouble className="w-4 h-4 mr-2 text-emerald-500" />
                        {beds} Beds
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Bath className="w-4 h-4 mr-2 text-emerald-500" />
                        {baths} Baths
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Square className="w-4 h-4 mr-2 text-emerald-500" />
                        {area}
                    </div>
                </div>

                <div className="mt-2">
                    <Button variant="outline" className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                        View Details
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
