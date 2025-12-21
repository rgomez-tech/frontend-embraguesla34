export async function getMenu() {
  const query = `
    query GetPrimaryMenu {
      menu(id: "PRIMARY", idType: LOCATION) {
        name
        menuItems {
          nodes {
            id
            label
            url
            parentId
          }
        }
      }
    }
  `;

  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store"
  });

  const json = await response.json();
  return json.data?.menu ?? null;
}

