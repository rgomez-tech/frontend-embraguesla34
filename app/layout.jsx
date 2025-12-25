import "./globals.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { getMenu } from "../lib/getMenu"; // asegúrate de tener este archivo

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  let menu = null;

  try {
    menu = await getMenu();
  } catch (err) {
    console.error("Error fetching menu:", err);
  }

  const items =
    menu?.menuItems?.nodes?.map(item => ({
      ...item,
      url: item.url.replace("https://tech.embraguesla34.com", "")
    })) || [];


  return (
    <html lang="es">
      <body>
        {items.length > 0 && <Menu items={items} />}  

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}



