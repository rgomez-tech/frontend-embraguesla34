import React from 'react';
import './post.css';

export async function generateMetadata({ params }) {
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blogs/${params.slug}`,
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



