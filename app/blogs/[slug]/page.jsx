import React from "react";
import './post.css';
import { getPostBySlug } from "@/lib/getPostBySlug";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {title: 'Embragues La 34',};
  }

  const ogImage = `https://www.embraguesla34.com/og/${slug}.jpg`;


  return {
    title: post.seo?.title || post.title,
    description: post.seo?.metaDesc || '',
    alternates: {
      canonical: post.seo?.canonical || `https://embraguesla34.com/${slug}`,
    },
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.metaDesc || '',
      url: post.seo?.canonical || `https://embraguesla34.com/${slug}`,
      siteName: 'Embragues La 34',
      type: 'article',
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
            },
          ]
        : [],  
    },
      other: {
      'og:image': ogImage,
      'og:image:secure_url': ogImage,
      'og:image:width': '1200',
      'og:image:height': '630',
      'fb:app_id': '883322037410285',
    },
  };
}


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



