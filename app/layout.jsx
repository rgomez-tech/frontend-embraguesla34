import "./globals.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { getMenu } from "../lib/getMenu"; // asegúrate de tener este archivo
import { getGlobalSEO } from "@/lib/getGlobalSEO";

export async function generateMetadata() {
  const data = await getGlobalSEO();
  if (!data) return {};

  return {
    title: data.generalSettings.title,
    description: data.generalSettings.description,

    alternates: {
      canonical: "https://embraguesla34.com/",
    },

    openGraph: {
      title: data.generalSettings.title,
      description: data.generalSettings.description,
      images: data.seo.schema.companyLogo?.sourceUrl
        ? [{ url: data.seo.schema.companyLogo.sourceUrl }]
        : [],
    },
  };
}


export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  let items = [];

  try {
    const menuItems = await getMenu();

    items = menuItems.map(item => ({
      ...item,
      url: item.url.replace("https://tech.embraguesla34.com", "")
    }));
  } catch (err) {
    console.error("Error fetching menu:", err);
  }

  return (
    <html lang="es">
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HPTYG1P6TW"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-HPTYG1P6TW');
        </script>
          
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1491903375215121'); 
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1491903375215121&ev=PageView&noscript=1"
          />
        </noscript>
        <meta name="facebook-domain-verification" content="3miemlvu0q8pad6c7dej2zb32b9gop" />
      </head>
      <body>
        {items.length > 0 ? (
          <Menu items={items} />
        ) : (
          <p style={{ textAlign: "center", margin: "1rem 0" }}>
            Menú no disponible en esta web
          </p>
        )}

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}




