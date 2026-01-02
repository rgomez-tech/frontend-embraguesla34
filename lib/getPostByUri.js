async function fetchPostByUri(uri) {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query PostByUri($uri: ID!) {
          post(id: $uri, idType: URI) {
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

  const json = await res.json();
  return json?.data?.post || null;
}
