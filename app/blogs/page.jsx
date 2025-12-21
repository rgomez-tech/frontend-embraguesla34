// app/blogs/page.jsx
import React from 'react';
import Link from 'next/link';
import './blogs.css'; // <-- tu CSS puro

// Función para hacer fetch de los posts
async function fetchPosts() {
  const res = await fetch('https://tech.embraguesla34.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query AllPosts {
          posts(first: 10) {
            nodes {
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();
  return json.data.posts.nodes;
}

export default async function BlogsPage() {
  const posts = await fetchPosts();

  if (!posts || posts.length === 0) {
    return <p>No hay posts disponibles</p>;
  }

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Información de interés</h1>
      <div className="blogs-grid">
        {posts.map(post => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="blog-card">
            {post.featuredImage?.node && (
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText}
                className="blog-image"
              />
            )}
            <div className="cont-text">
              <h2 className="blog-title">{post.title}</h2>
              <div
                className="blog-excerpt"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


