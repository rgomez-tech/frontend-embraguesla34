export async function getPostByUri(uri) {

    const endpoint = process.env.WP_GRAPHQL_URL;

    if (!endpoint) {
        throw new Error("WP_GRAPHQL_URL no definida");
    }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query PostByUri($id: ID!) {
            post(id: $id, idType: URI) {
                id
                title
                slug
                uri
                date
                content
                excerpt
                featuredImage {
                node {
                    sourceUrl
                    altText
                }
                }
            }
        }
      `,
      variables: { uri },
    }),
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const json = await res.json();
  return json?.data?.postBy || null;
}
