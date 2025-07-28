import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        default: "Automatique - Automatización Sin Código para Empresas",
        template: "%s | Automatique",
    },
    description: "Automatiza procesos empresariales con soluciones sin código. Precios transparentes, implementación rápida, resultados predecibles. Especialistas en automatización empresarial.",
    keywords: [
        "automatización",
        "sin código",
        "no-code",
        "procesos empresariales",
        "workflow automation",
        "automatización de procesos",
        "soluciones empresariales",
        "digitalización",
        "transformación digital",
        "automatique"
    ],
    authors: [{ name: "Automatique", url: "https://www.tryautomatique.com" }],
    creator: "Automatique",
    publisher: "Automatique",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://www.tryautomatique.com"),
    alternates: {
        canonical: "/",
        languages: {
            "es-ES": "/",
            "en-US": "/en",
        },
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },
    manifest: "/manifest.json",
    openGraph: {
        title: "Automatique - Automatización Sin Código para Empresas",
        description: "Automatiza procesos empresariales con soluciones sin código. Precios transparentes, implementación rápida, resultados predecibles.",
        type: "website",
        locale: "es_ES",
        url: "https://www.tryautomatique.com",
        siteName: "Automatique",
        images: [
            {
                url: "/ogimage.jpg",
                width: 1200,
                height: 630,
                alt: "Automatique - Automatización Sin Código para Empresas",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@automatique",
        creator: "@automatique",
        title: "Automatique - Automatización Sin Código para Empresas",
        description: "Automatiza procesos empresariales con soluciones sin código. Precios transparentes, implementación rápida, resultados predecibles.",
        images: ["/ogimage.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-site-verification-code",
        yandex: "your-yandex-verification-code",
        yahoo: "your-yahoo-verification-code",
    },
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>{children}</Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
