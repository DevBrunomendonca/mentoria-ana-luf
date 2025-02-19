import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script"; // Importe o componente Script

import { Montserrat } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Image from "next/image";

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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11294631168"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11294631168');
          `}
        </Script>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1647846286108828');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            alt=""
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1647846286108828&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
