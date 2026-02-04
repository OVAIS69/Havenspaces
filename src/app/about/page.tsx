import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-neutral-900 py-24 text-center">
                <h1 className="text-5xl font-bold font-heading text-white mb-6">Redefining Real Estate</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">We are on a mission to make finding your next home as simple and joyful as living in it.</p>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-6">Who We Are</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            HavenSpaces was born out of frustration with clunky, outdated, and dishonest real estate platforms. We believe that looking for a home should be an exciting journey, not a stressful chore.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            By combining cutting-edge technology, verified listings, and a human-centric approach, we are building a platform that you can trust.
                        </p>
                        <Button asChild>
                            <Link href="/contact">
                                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/about_team.png"
                            alt="Our Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
