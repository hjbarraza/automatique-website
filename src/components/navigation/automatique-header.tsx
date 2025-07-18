"use client";

import { Button } from "@/components/base/buttons/button";
import { ContactButton } from "@/components/contact/contact-modal";
import { cx } from "@/utils/cx";

const AutomatiqueLogo = () => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            clipRule="evenodd" 
            d="m18.3279 33.2066c.8291-.9948 2.0572-1.5701 3.3523-1.5701h17.5925c4.82 0 8.7273-3.9073 8.7273-8.7272v-4.3637c0-4.8199-3.9073-8.72724-8.7273-8.72724h-3.4107c-1.295 0-2.5232.57524-3.3522 1.57014l-2.8377 3.4052c-.8291.9949-2.0572 1.5701-3.3523 1.5701h-17.59253c-4.81994 0-8.72727 3.9073-8.72727 8.7273v4.3636c0 4.82 3.90733 8.7273 8.72727 8.7273h3.41073c1.295 0 2.5232-.5752 3.3522-1.5701zm23.1266-14.661c0-1.205-.9768-2.1818-2.1818-2.1818h-6.6834c-1.2951 0-2.5232.5752-3.3523 1.5701l-2.8377 3.4053c-.829.9948-2.0572 1.5701-3.3522 1.5701h-14.31983c-1.20498 0-2.18182.9768-2.18182 2.1818v4.3636c0 1.205.97684 2.1818 2.18182 2.1818h6.68343c1.2951 0 2.5232-.5752 3.3523-1.5701l2.8377-3.4052c.829-.9949 2.0572-1.5701 3.3522-1.5701h14.3198c1.205 0 2.1818-.9768 2.1818-2.1818z" 
            className="fill-stone-600 dark:fill-stone-300" 
            fillRule="evenodd"
        />
    </svg>
);

interface AutomatiqueHeaderProps {
    className?: string;
}

export const AutomatiqueHeader = ({ className }: AutomatiqueHeaderProps) => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={cx("fixed top-0 z-50 w-full", className)}>
            <div className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                    {/* Logo and Brand */}
                    <div className="flex items-center gap-3">
                        <AutomatiqueLogo />
                        <span className="text-xl font-bold text-primary">Automatique</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('soluciones')}
                            className="text-secondary hover:text-primary transition-colors duration-200"
                        >
                            Soluciones
                        </button>
                        <button
                            onClick={() => scrollToSection('proceso')}
                            className="text-secondary hover:text-primary transition-colors duration-200"
                        >
                            Proceso
                        </button>
                        <button
                            onClick={() => scrollToSection('testimonios')}
                            className="text-secondary hover:text-primary transition-colors duration-200"
                        >
                            Testimonios
                        </button>
                        <button
                            onClick={() => scrollToSection('precios')}
                            className="text-secondary hover:text-primary transition-colors duration-200"
                        >
                            Precios
                        </button>
                        <button
                            onClick={() => scrollToSection('faq')}
                            className="text-secondary hover:text-primary transition-colors duration-200"
                        >
                            FAQ
                        </button>
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <ContactButton 
                            size="md"
                            className="bg-brand-solid hover:bg-brand-solid_hover"
                        >
                            Hablar con un experto
                        </ContactButton>
                        
                        {/* Mobile menu button */}
                        <button className="md:hidden p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    );
};