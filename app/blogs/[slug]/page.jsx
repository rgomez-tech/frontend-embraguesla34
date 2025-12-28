import React from 'react';
import './post.css';
import { getPostSEO } from "@/lib/getPostSEO";

export async function generateMetadata({ params }) {
  const slug = params?.slug;

  if (!slug) {
    return {
      title: "Artículo no encontrado SEO",
      robots: { index: false, follow: false },
    };
  }

  const post = await getPostSEO(slug);
  if (!post) return { title: "Artículo no encontrado SEO", robots: { index: false, follow: false } };

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



export default async function BlogPostPage({ params }) {
  const slug = params?.slug;

    if (!slug) {
    return {
      title: "Artículo no encontrado POST",
      robots: { index: false, follow: false },
    };
  }

  const post = await getPostSEO(slug);
  if (!post) return { title: "Artículo no encontrado POST", robots: { index: false, follow: false } };

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




