import React from 'react';
import './post.css';
import { getPostSEO } from "@/lib/getPostSEO";

export async function generateMetadata({ params }) {
  const post = await getPostSEO(params.slug);
  const seo = post.seo;

  const ogImage =
    seo.opengraphImage?.sourceUrl ||
    post.featuredImage?.node?.sourceUrl;

  return {
    title: seo.title || post.title,
    description: seo.metaDesc,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.opengraphTitle || seo.title,
      description: seo.opengraphDescription || seo.metaDesc,
      url: seo.canonical,
      siteName: seo.opengraphSiteName || "Embragues La 34",
      type: "article",
      publishedTime: seo.opengraphPublishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}




async function fetchPostBySlug(slug) {
  const res = await fetch('https://tech.embraguesla34.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
      variables: { slug }, // usar parámetro de la función
    }),
  });

  const json = await res.json();
  return json.data.post;
}

export default async function BlogPostPage(props) {
  // Si params es un Promise
  const params = await props.params;
  const slug = params.slug;

  const post = await fetchPostBySlug(slug);

  if (!post) return <p>Post no encontrado</p>;

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
          Publicado por <strong>{post.author.node.name}</strong> el{' '}
          {new Date(post.date).toLocaleDateString()}
        </p>
      </footer>
    </article>
  );
}



