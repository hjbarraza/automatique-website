"use client";

import { ArrowRight, Check, Clock, CurrencyDollar, Zap, PlayCircle, Users01 as Users, BarChart03 as BarChart3, Shield01 as Shield, Headphones01 as Headphones, ChevronDown, ChevronUp, Star01 as Star, MessageTextSquare01 as Quote, Mail01 as Mail, Phone, MarkerPin01 as MapPin, Youtube, ArrowUpRight, CheckCircle, XCircle, SearchLg as Search, PenTool02 as PenTool, Settings01 as Settings, TrendUp02 as TrendUp } from "@untitledui/icons";
import { Facebook, Twitter, Instagram, LinkedIn } from "@/components/foundations/social-icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { AutomatiqueHeader } from "@/components/navigation/automatique-header";
import { Timeline9, TimelineEntry } from "@/components/marketing/timeline";
import { ContactButton } from "@/components/contact/contact-modal";
import { Toggle } from "@/components/base/toggle/toggle";
import { useState } from "react";
import Link from "next/link";

export const HomeScreen = () => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [isAnnualBilling, setIsAnnualBilling] = useState(false);

    const features = [
        {
            icon: Clock,
            title: "Implementación Rápida",
            description: "Automatiza tus procesos en días, no meses"
        },
        {
            icon: CurrencyDollar,
            title: "Precios Transparentes",
            description: "Sin costos ocultos ni sorpresas"
        },
        {
            icon: Zap,
            title: "Resultados Predecibles",
            description: "ROI garantizado desde el primer mes"
        }
    ];

    const services = [
        {
            icon: BarChart3,
            title: "Automatización de Ventas",
            description: "Convierte más leads en clientes con flujos de trabajo automatizados",
            benefits: ["CRM integrado", "Seguimiento automático", "Análisis predictivo"]
        },
        {
            icon: Users,
            title: "Gestión de Clientes",
            description: "Mejora la experiencia del cliente con respuestas instantáneas",
            benefits: ["Chatbots inteligentes", "Tickets automáticos", "Base de conocimiento"]
        },
        {
            icon: Shield,
            title: "Procesos Internos",
            description: "Elimina tareas repetitivas y reduce errores humanos",
            benefits: ["Flujos aprobación", "Notificaciones automáticas", "Integraciones API"]
        },
        {
            icon: Headphones,
            title: "Soporte 24/7",
            description: "Asistencia continua para mantener tus automatizaciones funcionando",
            benefits: ["Soporte en español", "Monitoreo proactivo", "Actualizaciones incluidas"]
        }
    ];

    const processTimelineData: TimelineEntry[] = [
        {
            date: "Día 1-2",
            title: "Auditoría y Análisis",
            content: "Analizamos tus procesos actuales, identificamos oportunidades de automatización y definimos KPIs de éxito. Incluye mapeo de flujos de trabajo y evaluación de sistemas existentes."
        },
        {
            date: "Día 3-5",
            title: "Diseño y Configuración",
            content: "Creamos el blueprint de automatización personalizado para tu empresa. Configuramos integraciones, definimos reglas de negocio y preparamos el entorno de desarrollo."
        },
        {
            date: "Día 6-7",
            title: "Implementación y Pruebas",
            content: "Desplegamos las automatizaciones en un entorno de pruebas, realizamos testing exhaustivo y refinamos los procesos según feedback del equipo."
        },
        {
            date: "Día 8-10",
            title: "Go Live y Optimización",
            content: "Lanzamos las automatizaciones en producción, monitoreamos el rendimiento y realizamos ajustes finales. Incluye capacitación del equipo y documentación completa."
        }
    ];

    const testimonials = [
        {
            name: "Rodrigo Guerrero",
            role: "CEO",
            company: "DCR Project",
            content: "Automatique nos permitió automatizar el acceso a toda la información de nuestro catálogo de ventas, para que nuestros vendedores puedan dar recomendaciones con confianza desde el primer día. Reducimos costos y eliminamos semanas de capacitación.",
            rating: 5
        },
        {
            name: "Carlos Rodríguez",
            role: "Director de Operaciones",
            company: "LogisPro",
            content: "La implementación fue increíblemente rápida. En solo una semana ya teníamos automatizados nuestros procesos críticos. El ROI fue evidente desde el primer mes.",
            rating: 5
        },
        {
            name: "Ana Martínez",
            role: "Gerente de Ventas",
            company: "SalesForce+",
            content: "El soporte en español marca la diferencia. Siempre hay alguien disponible para ayudarnos y las actualizaciones son constantes. Muy recomendado.",
            rating: 5
        }
    ];

    const pricingPlans = [
        {
            name: "Starter",
            monthly: {
                price: 490,
                displayPrice: "$490",
                period: "/mes",
                setupFee: "$980"
            },
            annual: {
                price: 4900, // 10 months worth (2 months free)
                displayPrice: "$4,900",
                period: "/año",
                setupFee: "$980",
                monthlyEquivalent: 408, // 4900/12
                savings: 980 // 2 months worth
            },
            description: "Perfecto para pequeñas empresas",
            features: [
                "5 procesos automatizados",
                "2,000 tareas/mes",
                "500+ integraciones preintegradas",
                "Automatizaciones ilimitadas",
                "Soporte por email (48h)",
                "Pago con tarjeta",
                "Prueba gratis 14 días"
            ],
            notIncluded: [
                "API empresarial exclusiva",
                "Soporte prioritario"
            ],
            cta: "Habla con un Experto",
            popular: false
        },
        {
            name: "Professional",
            monthly: {
                price: 1490,
                displayPrice: "$1,490",
                period: "/mes",
                setupFee: "$2,980"
            },
            annual: {
                price: 14900, // 10 months worth (2 months free)
                displayPrice: "$14,900",
                period: "/año",
                setupFee: "$2,980",
                monthlyEquivalent: 1242, // 14900/12
                savings: 2980 // 2 months worth
            },
            description: "Para empresas en crecimiento",
            features: [
                "15 procesos automatizados",
                "10,000 tareas/mes",
                "500+ integraciones preintegradas",
                "Automatizaciones ilimitadas",
                "Soporte prioritario (chat/email 24h)",
                "Pago con tarjeta",
                "Prueba gratis 14 días"
            ],
            notIncluded: [
                "API empresarial exclusiva",
                "Gerente de cuenta dedicado"
            ],
            cta: "Habla con un Experto",
            popular: true
        },
        {
            name: "Enterprise",
            monthly: {
                price: 4990,
                displayPrice: "Desde $4,990",
                period: "/mes",
                setupFee: null
            },
            annual: {
                price: 49900,
                displayPrice: "Desde $49,900",
                period: "/año",
                setupFee: null,
                monthlyEquivalent: 4158,
                savings: 9980
            },
            description: "Soluciones a medida",
            features: [
                "50+ procesos automatizados",
                "Tareas ilimitadas",
                "Integraciones a la medida",
                "Automatizaciones ilimitadas",
                "API empresarial exclusiva",
                "Gerente de cuenta y soporte premium",
                "Pago por transferencia",
                "Demo/piloto sin costo"
            ],
            notIncluded: [],
            cta: "Habla con un Experto",
            popular: false
        }
    ];

    const faqs = [
        {
            question: "¿Cuánto tiempo toma implementar las automatizaciones?",
            answer: "La mayoría de las automatizaciones se implementan en 3-7 días. Los proyectos más complejos pueden tomar hasta 2 semanas, pero comenzarás a ver resultados desde el primer día."
        },
        {
            question: "¿Necesito conocimientos técnicos para usar Automatique?",
            answer: "No, nuestras soluciones están diseñadas para ser usadas sin conocimientos técnicos. Además, ofrecemos formación completa y soporte continuo en español."
        },
        {
            question: "¿Qué pasa con mis sistemas actuales?",
            answer: "Automatique se integra perfectamente con tus herramientas existentes. No necesitas cambiar de sistemas, nosotros nos conectamos con lo que ya usas."
        },
        {
            question: "¿Puedo cancelar en cualquier momento?",
            answer: "Sí, todos nuestros planes son mensuales sin compromisos a largo plazo. Puedes cancelar o cambiar de plan cuando lo necesites."
        },
        {
            question: "¿Qué garantías ofrecen?",
            answer: "Garantizamos resultados medibles en 30 días o te devolvemos tu dinero. Además, incluimos SLA de disponibilidad del 99.9% en planes Professional y Enterprise."
        },
        {
            question: "¿Cuál es el ROI típico de los clientes?",
            answer: "Nuestros clientes típicamente ven un retorno de inversión entre 2-6 meses, con ahorros promedio del 40-80% en costos operativos y reducción del 95% en errores humanos."
        },
        {
            question: "¿Cómo calculan el ROI?",
            answer: "Calculamos el ROI midiendo tiempo ahorrado, reducción de errores, costos operativos eliminados y nuevas oportunidades de negocio generadas. Proporcionamos dashboards detallados para rastrear estas métricas."
        },
        {
            question: "¿Qué pasa si la automatización falla?",
            answer: "Tenemos sistemas de monitoreo 24/7 y respaldo automático. Si algo falla, se activan alertas inmediatas y procesos de recuperación. Incluimos garantía de disponibilidad del 99.9%."
        },
        {
            question: "¿Cómo minimizan los riesgos de implementación?",
            answer: "Seguimos un proceso gradual: análisis previo, pruebas en entorno controlado, implementación por fases, y monitoreo constante. Nunca interrumpimos operaciones críticas."
        },
        {
            question: "¿Qué infraestructura necesito?",
            answer: "Mínima. Solo necesitas acceso a internet y permisos para conectar con tus sistemas existentes. Toda la infraestructura de automatización corre en nuestros servidores seguros."
        },
        {
            question: "¿Puedo tener las automatizaciones en mi propio servidor?",
            answer: "Sí, ofrecemos despliegue on-premise para clientes Enterprise. Incluye instalación, configuración, y soporte técnico dedicado en tus propios servidores."
        },
        {
            question: "¿Cómo funciona la integración con IA?",
            answer: "Integramos IA generativa para automatizar tareas complejas como análisis de documentos, generación de reportes, y toma de decisiones. Usamos GPT-4 y modelos especializados según la necesidad."
        },
        {
            question: "¿Qué tipos de IA pueden implementar?",
            answer: "Implementamos IA conversacional (chatbots), IA documental (procesamiento de contratos/facturas), IA predictiva (forecasting), y IA generativa (creación de contenido automatizado)."
        },
        {
            question: "¿La IA puede aprender de nuestros datos específicos?",
            answer: "Sí, entrenamos modelos personalizados con tus datos para mejorar precisión y relevancia. Todos los datos permanecen seguros y privados, cumpliendo con GDPR y regulaciones locales."
        },
        {
            question: "¿Cómo manejan el escalamiento?",
            answer: "Nuestras automatizaciones escalan automáticamente según demanda. Si tu negocio crece 10x, las automatizaciones se adaptan sin necesidad de reconfiguración o costos adicionales."
        },
    ];

    return (
        <div className="flex min-h-dvh flex-col">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Automatique",
                        description: "Automatiza procesos empresariales con soluciones sin código. Precios transparentes, implementación rápida, resultados predecibles.",
                        url: "https://automatique.com",
                        logo: "https://automatique.com/favicon.svg",
                        image: "https://automatique.com/ogimage.jpg",
                        sameAs: [
                            "https://www.linkedin.com/company/automatique",
                            "https://twitter.com/automatique",
                            "https://www.facebook.com/automatique",
                            "https://www.instagram.com/automatique"
                        ],
                        contactPoint: {
                            "@type": "ContactPoint",
                            contactType: "customer service",
                            telephone: "+1-555-0123",
                            email: "info@automatique.com",
                            availableLanguage: ["Spanish", "English"],
                            areaServed: ["ES", "MX", "US", "LATAM"]
                        },
                        address: [
                            {
                                "@type": "PostalAddress",
                                streetAddress: "1 Bell Slip",
                                addressLocality: "Brooklyn",
                                addressRegion: "NY",
                                postalCode: "11222",
                                addressCountry: "US"
                            },
                            {
                                "@type": "PostalAddress",
                                streetAddress: "Passeig del Mare Nostrum, 15",
                                addressLocality: "Barcelona",
                                postalCode: "08039",
                                addressCountry: "ES"
                            },
                            {
                                "@type": "PostalAddress",
                                streetAddress: "Av. P.º de la Reforma 296, Juárez",
                                addressLocality: "CDMX",
                                postalCode: "06600",
                                addressCountry: "MX"
                            }
                        ],
                        offers: {
                            "@type": "Offer",
                            name: "Automatización Empresarial",
                            description: "Soluciones de automatización sin código para empresas",
                            price: "490",
                            priceCurrency: "USD",
                            priceValidUntil: "2024-12-31",
                            availability: "https://schema.org/InStock"
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "5.0",
                            reviewCount: "50",
                            bestRating: "5",
                            worstRating: "1"
                        }
                    })
                }}
            />
            
            {/* Service Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Automatización Empresarial Sin Código",
                        description: "Automatiza procesos empresariales con soluciones sin código. Precios transparentes, implementación rápida, resultados predecibles.",
                        provider: {
                            "@type": "Organization",
                            name: "Automatique",
                            url: "https://automatique.com"
                        },
                        serviceType: "Business Process Automation",
                        areaServed: ["ES", "MX", "US", "LATAM"],
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Planes de Automatización",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    name: "Starter",
                                    description: "Perfecto para pequeñas empresas",
                                    price: "490",
                                    priceCurrency: "USD",
                                    priceValidUntil: "2024-12-31"
                                },
                                {
                                    "@type": "Offer",
                                    name: "Professional",
                                    description: "Para empresas en crecimiento",
                                    price: "1490",
                                    priceCurrency: "USD",
                                    priceValidUntil: "2024-12-31"
                                },
                                {
                                    "@type": "Offer",
                                    name: "Enterprise",
                                    description: "Soluciones a medida",
                                    price: "4990",
                                    priceCurrency: "USD",
                                    priceValidUntil: "2024-12-31"
                                }
                            ]
                        }
                    })
                }}
            />
            
            {/* FAQ Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.slice(0, 10).map(faq => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer
                            }
                        }))
                    })
                }}
            />
            
            <AutomatiqueHeader />
            {/* Hero Section with Gradient Background */}
            <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 md:px-8 pt-24">
                {/* Gradient Background with Rotating Circles */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/20 via-transparent to-transparent dark:from-brand-900/10" />
                    
                    {/* Rotating Gradient Circles - Novel CSS Grid Approach */}
                    <div className="rotating-circles-grid">
                        {/* Large Circle - Dynamic Smoke Effect */}
                        <div 
                            className="rotating-circle-grid-item w-[700px] h-[700px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] opacity-50 dark:opacity-40 blur-lg"
                            style={{
                                background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(168, 85, 247, 0.8) 0%, rgba(139, 92, 246, 0.4) 25%, rgba(124, 58, 237, 0.2) 50%, rgba(109, 40, 217, 0.1) 75%, transparent 100%)',
                                animation: 'simple-rotate-drift 20s ease-in-out infinite',
                                zIndex: 1,
                                filter: 'blur(20px) contrast(1.1) brightness(1.1)',
                                mixBlendMode: 'multiply',
                                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
                            }}
                        />
                        
                        {/* Small Circle - Dynamic Liquid Effect */}
                        <div 
                            className="rotating-circle-grid-item w-[550px] h-[550px] sm:w-[480px] sm:h-[480px] md:w-[620px] md:h-[620px] opacity-40 dark:opacity-30 blur-lg"
                            style={{
                                background: 'radial-gradient(ellipse 70% 90% at 70% 60%, rgba(147, 51, 234, 0.9) 0%, rgba(139, 92, 246, 0.5) 30%, rgba(109, 40, 217, 0.3) 60%, rgba(168, 85, 247, 0.1) 80%, transparent 100%)',
                                animation: 'simple-rotate-drift-reverse 25.6s ease-in-out infinite',
                                zIndex: 2,
                                filter: 'blur(18px) contrast(1.2) brightness(1.05)',
                                mixBlendMode: 'multiply',
                                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                            }}
                        />
                    </div>
                </div>
                
                <div className="relative z-20 flex flex-col items-center text-center">
                    {/* <Badge color="brand" className="mb-4 bg-white/20 backdrop-blur">
                        <PlayCircle className="mr-1 h-4 w-4" />
                        Ver Demo en Vivo
                    </Badge> */}
                    
                    <h1 className="max-w-5xl text-display-xl font-bold text-gray-900 dark:text-white animate-in slide-in-from-bottom-4 duration-700">
                        Eficiencias y Optimizaciones con IA
                    </h1>
                    
                    <p className="mt-6 max-w-2xl text-2xl text-gray-600 dark:text-gray-300 animate-in slide-in-from-bottom-4 duration-700 delay-150">
                        Creamos soluciones a la medida con Inteligencia Artificial para tus procesos empresariales
                    </p>
                    
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center animate-in slide-in-from-bottom-4 duration-700 delay-300">
                        <ContactButton 
                            size="xl" 
                            iconTrailing={ArrowRight}
                        >
                            Habla con un Experto
                        </ContactButton>
                    </div>
                    
                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400 animate-in slide-in-from-bottom-4 duration-700 delay-500">
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <span>Sin tarjeta de crédito</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <span>14 días gratis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <span>Cancelación inmediata</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                    <h2 className="text-center text-display-sm font-semibold text-primary mb-12 md:mb-16">
                        ¿Por qué elegir Automatique?
                    </h2>
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <li key={index}>
                                <div className="flex max-w-sm flex-col items-center gap-4 text-center p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg">
                                    <div className="relative shrink-0 items-center justify-center *:data-icon:size-6 bg-white dark:bg-gray-800 shadow-sm ring-1 ring-inset size-12 rounded-[10px] text-fg-secondary ring-gray-200 dark:ring-gray-700 hidden md:inline-flex" data-featured-icon="true">
                                        <feature.icon className="h-6 w-6 text-brand-600 dark:text-brand-400 z-1" />
                                    </div>
                                    <div className="relative shrink-0 items-center justify-center *:data-icon:size-5 bg-white dark:bg-gray-800 shadow-sm ring-1 ring-inset size-10 rounded-lg text-fg-secondary ring-gray-200 dark:ring-gray-700 inline-flex md:hidden" data-featured-icon="true">
                                        <feature.icon className="h-5 w-5 text-brand-600 dark:text-brand-400 z-1" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                                        <p className="mt-1 text-md text-tertiary">{feature.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Services Section */}
            <div id="soluciones" className="px-4 py-20 md:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-display-sm font-semibold text-primary">
                            Soluciones para cada necesidad
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            Automatizamos cualquier proceso empresarial sin importar tu industria
                        </p>
                    </div>
                    
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <div key={index} className="rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg">
                                <div className="inline-flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-3 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
                                    <service.icon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-primary">{service.title}</h3>
                                <p className="mt-2 text-sm text-tertiary">{service.description}</p>
                                <ul className="mt-4 space-y-2">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm">
                                            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                                            <span className="text-secondary">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <Timeline9 
                timelineData={processTimelineData}
                title="Como funciona"
            />

            {/* Testimonials Section */}
            <div id="testimonios" className="px-4 py-20 md:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-display-sm font-semibold text-primary">
                            Empresas que confían en nosotros
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            Más de 50 empresas han transformado sus operaciones con Automatique
                        </p>
                    </div>
                    
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg">
                                <div className="mb-4 flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="mb-6 text-secondary italic">&ldquo;{testimonial.content}&rdquo;</p>
                                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                                    <div className="font-semibold text-primary">{testimonial.name}</div>
                                    <div className="text-sm text-tertiary">{testimonial.role}</div>
                                    <div className="text-sm text-brand-600 dark:text-brand-400">{testimonial.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div id="precios" className="bg-secondary px-4 py-20 md:px-8">
                <div className="mx-auto max-w-7xl">
                    
                    {/* Title and Toggle Section - Now Above */}
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-semibold text-primary">
                            Precios transparentes, sin sorpresas
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            Elige el plan que mejor se adapte a tu empresa
                        </p>
                        
                        {/* Pricing Toggle */}
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <div className="flex items-center gap-4">
                                <span className={`text-sm font-medium ${!isAnnualBilling ? 'text-primary' : 'text-tertiary'}`}>
                                    Mensual
                                </span>
                                <Toggle
                                    isSelected={isAnnualBilling}
                                    onChange={setIsAnnualBilling}
                                    size="md"
                                />
                                <span className={`text-sm font-medium ${isAnnualBilling ? 'text-primary' : 'text-tertiary'}`}>
                                    Anual
                                </span>
                            </div>
                            {/* Savings Badge */}
                            {isAnnualBilling && (
                                <div className="flex items-center justify-center">
                                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                        2 meses gratis con plan anual
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Pricing Cards Grid */}
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
                                {pricingPlans.map((plan, index) => {
                                    console.log('Rendering plan:', plan.name, 'isAnnualBilling:', isAnnualBilling);
                                    return (
                            <div 
                                key={index} 
                                className={`relative rounded-2xl transition-all duration-300 ${
                                    plan.popular 
                                        ? 'bg-gradient-to-b from-brand-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-brand-300 dark:border-brand-700 shadow-xl hover:shadow-2xl' 
                                        : 'bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg'
                                } p-8`}
                            >
                                {plan.popular && (
                                    <Badge color="brand" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white border-0">
                                        Más Popular
                                    </Badge>
                                )}
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-primary">{plan.name}</h3>
                                    <div className="mt-4">
                                        <span className="text-display-md font-bold text-primary">
                                            {isAnnualBilling ? plan.annual.displayPrice : plan.monthly.displayPrice}
                                        </span>
                                        <span className="text-tertiary">
                                            {isAnnualBilling ? plan.annual.period : plan.monthly.period}
                                        </span>
                                    </div>
                                    
                                    {/* Annual billing additional info */}
                                    {isAnnualBilling && plan.annual.monthlyEquivalent && (
                                        <div className="mt-2">
                                            <span className="text-sm text-tertiary">
                                                Equivalente a ${plan.annual.monthlyEquivalent}/mes
                                            </span>
                                            <div className="mt-1">
                                                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                                    Ahorras ${plan.annual.savings} al año
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Setup fee */}
                                    {((isAnnualBilling && plan.annual.setupFee) || (!isAnnualBilling && plan.monthly.setupFee)) && (
                                        <div className="mt-2">
                                            <span className="text-sm text-tertiary">Setup único: </span>
                                            <span className="text-sm font-semibold text-secondary">
                                                {isAnnualBilling ? plan.annual.setupFee : plan.monthly.setupFee}
                                            </span>
                                        </div>
                                    )}
                                    
                                    <p className="mt-2 text-sm text-tertiary">{plan.description}</p>
                                </div>
                                
                                <ul className="mt-8 space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 shrink-0 text-success-solid" />
                                            <span className="text-sm text-secondary">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 opacity-50">
                                            <XCircle className="h-5 w-5 shrink-0 text-fg-quaternary" />
                                            <span className="text-sm text-tertiary line-through">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                    </div>
                                )})}
                    </div>
                    
                    {/* Single CTA Button for Pricing Section */}
                    <div className="mt-16 text-center">
                        <ContactButton 
                            size="xl"
                            className="!px-8 !py-4 !text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                            iconTrailing={ArrowRight}
                        >
                            Comienza Tu Transformación Digital Ahora
                        </ContactButton>
                        <p className="mt-4 text-sm text-tertiary">
                            Sin compromiso • Respuesta en menos de 24 horas
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section id="faq" className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Preguntas frecuentes</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Todo lo que necesitas saber sobre Automatique</p>
                    </div>
                    <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                        <div className="flex flex-col gap-8">
                            {faqs.map((faq, index) => (
                                <div key={index} className="not-first:-mt-px not-first:border-t not-first:border-secondary not-first:pt-6">
                                    <h3>
                                        <button 
                                            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                            className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                        >
                                            <span className="text-md font-semibold text-primary">{faq.question}</span>
                                            <span aria-hidden="true" className="flex size-6 items-center text-fg-quaternary">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line 
                                                        className={`origin-center transition duration-150 ease-out ${expandedFaq === index ? '-rotate-90' : 'rotate-0'}`}
                                                        x1="12" y1="8" x2="12" y2="16"
                                                    ></line>
                                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    <div 
                                        className="overflow-hidden transition-all duration-300 ease-in-out"
                                        style={{
                                            height: expandedFaq === index ? 'auto' : '0px',
                                            opacity: expandedFaq === index ? 1 : 0
                                        }}
                                    >
                                        <div className="pt-1 pr-8 md:pr-12">
                                            <p className="text-md text-tertiary">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="flex flex-col overflow-hidden rounded-2xl bg-brand-solid shadow-xl md:flex-row md:items-center md:rounded-3xl">
                        <div className="flex flex-1 flex-col px-6 pt-10 pb-12 lg:p-16">
                            <h2 className="text-display-sm font-semibold text-white md:text-display-md">¿Listo para automatizar tu empresa?</h2>
                            <p className="mt-4 text-lg text-white/80 md:mt-5 md:text-xl">Únete a más de 50 empresas que ya están ahorrando tiempo y dinero</p>
                            <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                                <ContactButton 
                                    size="lg" 
                                    iconTrailing={ArrowRight}
                                >
                                    Habla con un Experto
                                </ContactButton>
                                
                            </div>
                        </div>
                        <img 
                            alt="Automatización empresarial" 
                            src="https://replicate.delivery/xezq/WtaTS6mIaUbDEtQBSiArWzImTv2L5I4I7YSdp8kkWEiaBbQF/tmpsafb4rbn.jpg" 
                            className="h-70 w-full object-cover md:h-100 md:w-95 lg:w-120"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary border-t border-secondary px-4 py-12 md:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Company Info */}
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-bold text-primary">Automatique</h3>
                            <p className="mt-4 text-sm text-tertiary max-w-md">
                                Transformamos empresas con automatización inteligente sin código. 
                                Soluciones rápidas, resultados medibles.
                            </p>
                            <div className="mt-6 flex gap-4">
                                <Link href="#" className="text-tertiary hover:text-primary">
                                    <LinkedIn className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-tertiary hover:text-primary">
                                    <Twitter className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-tertiary hover:text-primary">
                                    <Facebook className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-tertiary hover:text-primary">
                                    <Instagram className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-tertiary hover:text-primary">
                                    <Youtube className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                        
                        {/* Company Links */}
                        <div>
                            <h4 className="font-semibold text-primary">Enlaces</h4>
                            <ul className="mt-4 space-y-2">
                                <li><Link href="#" className="text-sm text-tertiary hover:text-primary">Acerca de</Link></li>
                                <li><Link href="https://path.mba" target="_blank" rel="noopener noreferrer" className="text-sm text-tertiary hover:text-primary">Blog</Link></li>
                                <li><Link href="#precios" className="text-sm text-tertiary hover:text-primary">Precios</Link></li>
                                <li><Link href="#faq" className="text-sm text-tertiary hover:text-primary">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Office Locations */}
                    <div className="mt-12 border-t border-secondary pt-12">
                        <h4 className="font-semibold text-primary mb-8">Nuestras Oficinas</h4>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {/* NYC Office */}
                            <div>
                                <h5 className="font-semibold text-primary mb-2">NYC</h5>
                                <p className="text-sm text-tertiary">
                                    1 Bell Slip<br />
                                    Brooklyn, NY 11222
                                </p>
                            </div>
                            
                            {/* Barcelona Office */}
                            <div>
                                <h5 className="font-semibold text-primary mb-2">Barcelona</h5>
                                <p className="text-sm text-tertiary">
                                    Passeig del Mare Nostrum, 15<br />
                                    Ciutat Vella, 08039 Barcelona, Spain
                                </p>
                            </div>
                            
                            {/* CDMX Office */}
                            <div>
                                <h5 className="font-semibold text-primary mb-2">CDMX</h5>
                                <p className="text-sm text-tertiary">
                                    Av. P.º de la Reforma 296, Juárez<br />
                                    Cuauhtémoc, 06600, CDMX
                                </p>
                            </div>
                            
                            {/* Paris Office */}
                            <div>
                                <h5 className="font-semibold text-primary mb-2">Paris</h5>
                                <p className="text-sm text-tertiary">
                                    40 Rue du Colisée<br />
                                    75008 Paris
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Bottom Footer */}
                    <div className="mt-12 border-t border-secondary pt-8">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <p className="text-sm text-tertiary">
                                © 2024 Automatique. Todos los derechos reservados.
                            </p>
                            <div className="flex gap-6">
                                <Link href="#" className="text-sm text-tertiary hover:text-primary">Términos</Link>
                                <Link href="#" className="text-sm text-tertiary hover:text-primary">Privacidad</Link>
                                <Link href="#" className="text-sm text-tertiary hover:text-primary">Cookies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};