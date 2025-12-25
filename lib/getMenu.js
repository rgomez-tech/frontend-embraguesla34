export async function getMenu() {
  try {
    const query = `
      query GetPrimaryMenu {
        menu(id: "PRIMARY", idType: LOCATION) {
          menuItems {
            nodes {
              id
              label
              url
            }
          }
        }
      }
    `;

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      cache: "no-store"
    });

    const json = await response.json();

    if (!json?.data?.menu?.menuItems?.nodes) {
      return [];
    }

    return json.data.menu.menuItems.nodes;
  } catch (error) {
    console.error("Error fetching menu:", error);
    return [];
  }
}


