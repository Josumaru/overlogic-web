import { ThemeProvider } from "@/components/common/theme-provider";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }];
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./[lang]/globals.css";
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

interface Props {
  children: React.ReactNode;
  params: Promise<Lang>;
}

import { NextPage } from "next";
import { Toaster } from "@/components/ui/toaster";

interface Props {}

const RootLayout: NextPage<Props> = async ({ children, params }) => {
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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
