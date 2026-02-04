"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-heading text-foreground tracking-tight">
                        Haven<span className="text-primary">Spaces</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/buy" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Buy
                    </Link>
                    <Link href="/rent" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Rent
                    </Link>
                    <Link href="/pg" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        PG & Hostels
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        About
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="hidden md:inline-flex text-muted-foreground hover:text-foreground">
                        <Search className="w-5 h-5" />
                    </Button>

                    <Button variant="ghost" className="hidden md:inline-flex gap-2">
                        <User className="w-4 h-4" />
                        Sign In
                    </Button>

                    <Button variant="default" className="hidden md:inline-flex shadow-lg shadow-emerald-500/20">
                        List Property
                    </Button>

                    {/* Mobile Menu */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
