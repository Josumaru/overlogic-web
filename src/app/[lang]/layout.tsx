import { ThemeProvider } from "@/components/common/theme-provider";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }];
}

import Footer from "@/components/common/footer/footer";
import NavigationBar from "@/components/common/navigation/navigation-bar";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Lang } from "@/types/lang";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Overlogic",
  description:
    "Trusted software developmentagency committed to delivering high-quality digital solutions",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<Lang>;
}>) {
  const lang = (await params).lang;
  return (
    <html lang={lang}>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar lang={lang} />
          {children}
          <Footer lang={lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
