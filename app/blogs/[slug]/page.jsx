import React from 'react';
import './post.css';
import { getPostSEO } from "@/lib/getPostSEO";

export async function generateMetadata({ params }) {
  const post = await getPostSEO(params.slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "El contenido no está disponible",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = post.seo || {};

  return {
    title: seo.title || post.title,
    description: seo.metaDesc || "",
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.opengraphTitle || post.title,
      description: seo.opengraphDescription || "",
      url: seo.canonical,
      type: "article",
      images: seo.opengraphImage?.sourceUrl
        ? [{ url: seo.opengraphImage.sourceUrl, width: 1200, height: 630 }]
        : undefined,
    },
  };
}




async function fetchPostBySlug(slug) {
  const uri = `/blog/${slug}/`; // 👈 CLAVE

  try {
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

    if (!res.ok) return null;

    const json = await res.json();
    if (json.errors) return null;

    return json?.data?.post || null;
  } catch {
    return null;
  }
}


export default async function BlogPostPage({ params }) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return <p>Post no encontrado</p>;
  }

  return (
    <article className="post-container">
      <h1 className="post-title">{post.title}</h1>

      {post.featuredImage?.node && (
        <img
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText}
          className="post-image"
        />
      )}

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="post-footer">
        <p>
          Publicado por <strong>{post.author.node.name}</strong> el{" "}
          {new Date(post.date).toLocaleDateString()}
        </p>
      </footer>
    </article>
  );
}



