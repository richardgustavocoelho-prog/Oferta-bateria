
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ScarcityBanner } from "@/components/landing/ScarcityBanner";
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "VoiceStream Academy",
  description: "Aulas de canto prontas para professores e escolas de música.",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.imgur.com" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" />
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "692e2e1dc2e77cefc044e93b";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        ></Script>
      </head>
      <body className="font-body antialiased">
        <ScarcityBanner />
        <div className="pt-[60px] md:pt-[45px]">{children}</div>
        <a
          href="https://wa.me/5519998059433"
          className="whatsapp-button"
          target="_blank"
          aria-label="Fale conosco no WhatsApp"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
            alt="WhatsApp"
            loading="lazy"
            width="30"
            height="30"
          />
        </a>
      </body>
    </html>
  );
}
