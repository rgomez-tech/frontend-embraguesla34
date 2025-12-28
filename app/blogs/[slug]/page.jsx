import React from 'react';
import './post.css';
import { getPostSEO } from "@/lib/getPostSEO";

export async function generateMetadata({ params }) {
  const slug = params?.slug;

  if (!slug) {
    return {
      title: "Artículo no encontrado",
      robots: { index: false, follow: false },
    };
  }

  const postSEO = await getPostSEO(params.slug);

  if (!postSEO) {
    return {
      title: "Artículo no encontrado",
      description: "El contenido no está disponible",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = postSEO.seo || {};

  return {
    title: seo.title || postSEO.title,
    description: seo.metaDesc || "",
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.opengraphTitle || postSEO.title,
      description: seo.opengraphDescription || "",
      url: seo.canonical,
      type: "article",
      images: seo.opengraphImage?.sourceUrl
        ? [{ url: seo.opengraphImage.sourceUrl, width: 1200, height: 630 }]
        : undefined,
    },
  };
}




async function fetchPostBySlug({ params }) {
  const slug = params?.slug;
  if (!slug) return null;

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
  const slug = params?.slug;

  const post = await fetchPostBySlug(slug);

  console.log("Slug recibido:", slug);
  console.log("Post recibido:", post);

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

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <p>
        Publicado por{" "}
        {post.author?.node?.name || "Embragues La 34"} —{" "}
        {new Date(post.date).toLocaleDateString()}
      </p>
    </article>
  );
}




