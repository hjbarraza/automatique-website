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
    title: "Automatique - Automatización Sin Código para Empresas",
    description: "Automatiza procesos empresariales con soluciones sin código. Precios transparentes, implementación rápida, resultados predecibles.",
    authors: [{ name: "Automatique" }],
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        title: "Automatique - Automatización Sin Código para Empresas",
        description: "Automatiza procesos empresariales con soluciones sin código. Precios transparentes, implementación rápida, resultados predecibles.",
        type: "website",
        images: [
            {
                url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/876a447f-f5ec-41f6-ba7b-c4a8eddb16b5/id-preview-88933a9e--1933ac68-47f6-4123-9997-854d53cdaccf.lovable.app-1746685980435.png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@automatique",
        images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/876a447f-f5ec-41f6-ba7b-c4a8eddb16b5/id-preview-88933a9e--1933ac68-47f6-4123-9997-854d53cdaccf.lovable.app-1746685980435.png"],
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
