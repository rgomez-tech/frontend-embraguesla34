export async function getPostSEO(slug) {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query PostSEO($slug: ID!) {
          post(id: $slug, idType: SLUG) {
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
      variables: { slug },
    }),
    next: { revalidate: 60 },
  });

  const { data } = await res.json();
  return data.post;
}
