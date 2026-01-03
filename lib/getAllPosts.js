export async function getAllPosts() {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query AllPosts {
          posts(first: 1000) {
            nodes {
              slug
              modified
            }
          }
        }
      `,
    }),
    next: { revalidate: 3600 },
  });

  const json = await res.json();
  return json?.data?.posts?.nodes || [];
}
