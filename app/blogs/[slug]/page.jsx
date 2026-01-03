import React from "react";
import './post.css';

async function fetchPostBySlug(slug) {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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

  if (!res.ok) return null;

  const json = await res.json();
  if (json.errors) return null;

  return json.data.post;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    return <p>Artículo no encontrado</p>;
  }

  const post = await fetchPostBySlug(slug);

  if (!post) {
    return <p>Artículo no encontrado</p>;
  }

  return (
    <article className="blog-post">
      {post.featuredImage?.node && (
        <img
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText || post.title}
        />
      )}
      <h1>{post.title}</h1>
       
      <div className="contenido" dangerouslySetInnerHTML={{ __html: post.content }} />

      <p className="post-footer">
        Publicado por{" "}
        {post.author?.node?.name || "Embragues La 34"} —{" "}
        {new Date(post.date).toLocaleDateString("es-CO")}
      </p>
    </article>
  );
}



