"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function FilterBar() {
    const [activeType, setActiveType] = useState("rent");

    return (
        <div className="container mx-auto px-6 -mt-10 relative z-20">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
                {/* Tabs */}
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                    <button
                        onClick={() => setActiveType("rent")}
                        className={cn("text-sm font-semibold pb-4 -mb-4 transition-colors border-b-2", activeType === "rent" ? "border-emerald-500 text-emerald-600" : "border-transparent text-gray-400 hover:text-gray-600")}
                    >
                        Rent
                    </button>
                    <button
                        onClick={() => setActiveType("buy")}
                        className={cn("text-sm font-semibold pb-4 -mb-4 transition-colors border-b-2", activeType === "buy" ? "border-emerald-500 text-emerald-600" : "border-transparent text-gray-400 hover:text-gray-600")}
                    >
                        Buy
                    </button>
                    <button
                        onClick={() => setActiveType("pg")}
                        className={cn("text-sm font-semibold pb-4 -mb-4 transition-colors border-b-2", activeType === "pg" ? "border-emerald-500 text-emerald-600" : "border-transparent text-gray-400 hover:text-gray-600")}
                    >
                        PG / Hostel
                    </button>
                </div>

                {/* Filters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

                    {/* Location */}
                    <div className="md:col-span-1">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <Input placeholder="Enter City, Locality" className="pl-9 bg-gray-50 border-gray-200" />
                        </div>
                    </div>

                    {/* Budget */}
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Budget Range</label>
                        <select className="flex h-11 w-full items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
                            <option>₹5k - ₹10k</option>
                            <option>₹10k - ₹20k</option>
                            <option>₹20k - ₹50k</option>
                            <option>₹50k+</option>
                        </select>
                    </div>

                    {/* Property Type / BHK */}
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Type</label>
                        <select className="flex h-11 w-full items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
                            <option>1 BHK</option>
                            <option>2 BHK</option>
                            <option>3 BHK</option>
                            <option>Villa</option>
                        </select>
                    </div>

                    {/* Action */}
                    <div>
                        <Button variant="default" className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 font-semibold shadow-lg shadow-emerald-200">
                            Search Properties
                        </Button>
                    </div>
                </div>

                {/* Quick Filters */}
                <div className="mt-6 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-medium text-gray-400 mr-2">Quick Select:</span>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Fully Furnished</Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Near Metro</Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Pet Friendly</Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-emerald-50 hover:text-emerald-600 transition-colors">No Brokerage</Badge>
                </div>
            </div>
        </div>
    );
}
