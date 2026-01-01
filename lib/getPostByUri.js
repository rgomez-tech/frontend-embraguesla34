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
        query PostByUri($uri: String!) {
          postBy(uri: $uri) {
            title
            content
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            author {
              node {
                name
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
