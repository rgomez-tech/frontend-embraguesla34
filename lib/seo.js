import { fetchGraphQL } from "./graphql";

export async function getPageSEO(slug) {
  const query = `
    query PageSEO($slug: ID!) {
      page(id: $slug, idType: URI) {
        seo {
          title
          metaDesc
          canonical
          opengraphTitle
          opengraphDescription
          opengraphImage {
            sourceUrl
          }
          schema {
            raw
          }
          robots {
            index
            follow
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query, { slug });
  return data?.page?.seo || null;
}
