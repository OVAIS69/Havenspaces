import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block text-2xl font-bold font-heading text-foreground tracking-tight mb-4">
                            Haven<span className="text-primary">Spaces</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Finding you a place that feels like home. Verified listings, premium service, and zero hassle.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link href="/buy" className="text-muted-foreground hover:text-primary transition-colors">Buy Property</Link></li>
                            <li><Link href="/rent" className="text-muted-foreground hover:text-primary transition-colors">Rent Flats</Link></li>
                            <li><Link href="/pg" className="text-muted-foreground hover:text-primary transition-colors">PG Allocations</Link></li>
                            <li><Link href="/commercial" className="text-muted-foreground hover:text-primary transition-colors">Commercial</Link></li>
                            <li><Link href="/new-projects" className="text-muted-foreground hover:text-primary transition-colors">New Projects</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>123 Urban Avenue, Tech City,<br />Bangalore, KA 560102</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 888 888 8888</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>hello@havenspaces.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} HavenSpaces. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
