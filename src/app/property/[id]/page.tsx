"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, BedDouble, Bath, Square, ChevronRight, User, Phone, CheckCircle, Wifi, Car, Shield, Utensils } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyDetailsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Image Gallery */}
            <div className="container mx-auto px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
                    <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
                        <Image
                            src="/images/listing_1.png"
                            alt="Living Room"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="relative group cursor-pointer">
                        <Image
                            src="/images/prop_bedroom.png"
                            alt="Master Bedroom"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="relative group cursor-pointer">
                        <Image
                            src="/images/prop_kitchen.png"
                            alt="Modular Kitchen"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="relative group cursor-pointer">
                        <Image
                            src="/images/prop_bathroom.png"
                            alt="Luxury Bathroom"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="relative group cursor-pointer bg-gray-100 flex items-center justify-center">
                        <span className="text-muted-foreground font-medium text-lg">+ 8 More</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <div className="mb-6">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge variant="default" className="bg-emerald-600">For Rent</Badge>
                            <Badge variant="secondary" className="text-emerald-700 bg-emerald-50">Verified Property</Badge>
                            <Badge variant="outline">Available Immediately</Badge>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-2">Skyline Luxury Apartment</h1>
                        <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            12th Main Road, Indiranagar, Bangalore - 560038
                        </div>
                    </div>

                    <div className="flex border-y border-gray-100 py-6 mb-8 justify-between max-w-xl">
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-1">Bedrooms</p>
                            <div className="flex items-center justify-center font-bold text-lg text-gray-800">
                                <BedDouble className="w-5 h-5 mr-2 text-emerald-500" /> 3
                            </div>
                        </div>
                        <div className="w-px bg-gray-100 h-10" />
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-1">Bathrooms</p>
                            <div className="flex items-center justify-center font-bold text-lg text-gray-800">
                                <Bath className="w-5 h-5 mr-2 text-emerald-500" /> 2
                            </div>
                        </div>
                        <div className="w-px bg-gray-100 h-10" />
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-1">Area</p>
                            <div className="flex items-center justify-center font-bold text-lg text-gray-800">
                                <Square className="w-5 h-5 mr-2 text-emerald-500" /> 1,850 sq ft
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl font-bold font-heading mb-4">About this home</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Experience the pinnacle of urban living in this stunning 3BHK apartment located in the heart of Indiranagar. Featuring floor-to-ceiling windows that offer breathtaking views of the city skyline, this home is bathed in natural light throughout the day.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The layout includes a spacious living area perfect for entertaining, a modern modular kitchen equipped with high-end appliances, and a master suite that serves as a private sanctuary. Just steps away from the city's best cafes, restaurants, and metro station.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl font-bold font-heading mb-6">Amenities</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                            <div className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 mr-3 text-emerald-500" /> 24/7 Security
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Wifi className="w-5 h-5 mr-3 text-emerald-500" /> High-speed Wifi
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Car className="w-5 h-5 mr-3 text-emerald-500" /> Covered Parking
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Shield className="w-5 h-5 mr-3 text-emerald-500" /> Gated Community
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Utensils className="w-5 h-5 mr-3 text-emerald-500" /> Modular Kitchen
                            </div>
                            <div className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 mr-3 text-emerald-500" /> Power Backup
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl font-bold font-heading mb-4">Location</h2>
                        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-md border border-gray-100">
                            <Image
                                src="/images/prop_map.png"
                                alt="Location Map"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-red-500" />
                                    <span className="text-sm font-bold text-gray-800">Indiranagar, Bangalore</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Sidebar */}
                <div className="relative">
                    <div className="sticky top-24">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <p className="text-sm text-muted-foreground line-through">₹48,000</p>
                                    <p className="text-3xl font-bold text-emerald-600">₹45,000<span className="text-sm font-normal text-gray-500">/mo</span></p>
                                </div>
                                <Badge variant="outline" className="text-emerald-600 border-emerald-200">Deposits: 3 Months</Badge>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Anita Roy</p>
                                        <p className="text-xs text-muted-foreground">Property Owner</p>
                                    </div>
                                </div>

                                <Button className="w-full h-12 text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200">
                                    Schedule a Visit
                                </Button>
                                <Button variant="outline" className="w-full h-12 text-base border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                                    Request Callback
                                </Button>
                            </div>

                            <div className="text-center">
                                <p className="text-xs text-muted-foreground mb-2">Typically replies within 2 hours</p>
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                    <Shield className="w-4 h-4 text-emerald-500" /> Safe & Verified
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
