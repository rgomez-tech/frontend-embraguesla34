export async function getPostSEO(slug) {
  const uri = `/blog/${slug}/`; // 👈 CLAVE

  try {
    const res = await fetch(process.env.WP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query PostSEO($uri: ID!) {
            post(id: $uri, idType: URI) {
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
              seo {
                title
                metaDesc
                canonical
                opengraphTitle
                opengraphDescription
                opengraphSiteName
                opengraphPublishedTime
                opengraphImage {
                  sourceUrl
                }
              }
            }
          }
        `,
        variables: { uri }, // 👈 CAMBIO
      }),
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("GraphQL HTTP error:", res.status);
      return null;
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      return null;
    }

    return json?.data?.post || null;
  } catch (error) {
    console.error("Fetch GraphQL failed:", error);
    return null;
  }
}

