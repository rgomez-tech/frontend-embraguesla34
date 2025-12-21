import "./globals.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default async function RootLayout({ children }) {
  let menu = null;

  try {
    menu = await getMenu();
  } catch {}

  return (
    <html lang="es">
      <body>
        {menu?.menuItems?.nodes && (
          <Menu
            items={menu.menuItems.nodes.map(item => ({
              ...item,
              url: item.url.replace("https://tech.embraguesla34.com/", "")
            }))}
          />
        )}

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


