"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Bootstrap from '../libs/bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DarkModeProvider } from '../context/DarkModeContext';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XE0H3Y5RH3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XE0H3Y5RH3');
          `}
        </Script>
      </head>
      <body className="d-flex flex-column min-vh-100" style={{ paddingTop: '80px' }}>
        <DarkModeProvider>
          <Bootstrap />
          <Header />
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
