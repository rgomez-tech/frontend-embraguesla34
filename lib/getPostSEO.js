export async function getPostSEO(slug) {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query PostSEO($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            title
            seo {
              title
              metaDesc
              canonical
              opengraphTitle
              opengraphDescription
              opengraphImage {
                sourceUrl
              }
            }
          }
        }
      `,
      variables: { slug },
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.post || null;
}

