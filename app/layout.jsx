import "./globals.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { getMenu } from "../lib/getMenu"; // asegúrate de tener este archivo
import Script from "next/script";
import MetaPixel from "@/components/MetaPixel";

export const metadata = {
  metadataBase: new URL("https://www.embraguesla34.com"),
};




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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
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
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <meta name="facebook-domain-verification" content="3miemlvu0q8pad6c7dej2zb32b9gop" />
      </head>
      <body>
        <MetaPixel />
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




