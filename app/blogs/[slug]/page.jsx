import React from 'react';
import './post.css';
import { getPostSEO } from "@/lib/getPostSEO";

export async function generateMetadata({ params }) {
  const slug = params?.slug;

  if (!slug) {
    return <p>SLUG no encontrado SEO</p>;
  }

  const post = await getPostSEO(slug);
  if (!post) return <p>Artículo no encontrado</p>;

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
    return <p>SLUG no encontrado EN BLOG</p>;
  }

  const post = await getPostSEO(slug);
  if (!post) return <p>Artículo no encontrado</p>;

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




