import "./globals.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { getMenu } from "../lib/getMenu"; // asegúrate de tener este archivo

export default async function RootLayout({ children }) {
  let menu = null;

  try {
    menu = await getMenu();
  } catch (err) {
    console.error("Error fetching menu:", err);
  }
console.log(menu.menuItems.nodes);

  // Extraemos items seguros para pasar al componente
  const items = menu?.menuItems?.nodes?.map(item => ({
    ...item,
    url: item.url.replace("https://tech.embraguesla34.com/", "")
  })) || []; // fallback a array vacío

  return (
    <html lang="es">
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



