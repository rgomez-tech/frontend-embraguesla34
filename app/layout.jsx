import "./globals.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { getMenu } from "../lib/getMenu"; // asegúrate de tener este archivo
import ModelViewer from "@/components/ModelViewerClient";
import Script from "next/script";

<Script
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
  type="module"
  strategy="beforeInteractive"
/>


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
      <body>
        <ModelViewer />
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




