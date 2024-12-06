import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "Consultoria - Ana Luf",
  description:
    "Transforme a visão que as pessoas tem ao seu respeito, acesse o seu posicionamento e ative a sua personalidade através da minha consultoria.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
