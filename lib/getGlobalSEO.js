export async function getGlobalSEO() {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GlobalSEO {
          generalSettings {
            title
            description
          }
          seo {
            schema {
              companyName
              companyLogo {
                sourceUrl
              }
            }
            social {
              facebook {
                url
              }
              twitter {
                username
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 300 },
  });

  const json = await res.json();
  return json?.data;
}
