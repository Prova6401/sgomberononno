import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TR Trasporti - Sgombero Catania",
              "description": "Servizio professionale di sgombero e trasporti a Catania e provincia",
              "telephone": "+393490073264",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Catania",
                "addressRegion": "Sicilia",
                "addressCountry": "IT"
              },
              "serviceArea": "Catania",
              "priceRange": "€€"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}