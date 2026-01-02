async function fetchPostBySlug(slug) {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query PostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
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
      variables: { slug },
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.post || null;
}

export default async function BlogPostPage({ params }) {
  const slug = params?.slug;

  if (!slug) {
    return <p>Slug no encontrado</p>;
  }

  const post = await fetchPostBySlug(slug);

  if (!post) {
    return <p>Artículo no encontrado</p>;
  }

  return (
    <article>
      <h1>{post.title}</h1>

      {post.featuredImage?.node && (
        <img
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText}
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      <p>
        Publicado por{" "}
        {post.author?.node?.name || "Embragues La 34"} —{" "}
        {new Date(post.date).toLocaleDateString()}
      </p>
    </article>
  );
}
