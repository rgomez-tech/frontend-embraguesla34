import React from 'react';
import './post.css';
import { getPostSEO } from "@/lib/getPostSEO";

export default async function BlogPostPage(props) {
  return (
    <pre>{JSON.stringify(props, null, 2)}</pre>
  );
}

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








