import { getPostByUri } from "@/lib/getPostByUri";
import './post.css';

export async function generateMetadata({ params }) {
  const uri = "/" + params.uri.join("/") + "/";
  const post = await getPostByUri(uri);

  if (!post) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: post.title,
  };
}


export default async function BlogPostPage({ params }) {
  if (!params?.uri) {
    return <p>URI no encontrada</p>;
  }

  const uri = "/" + params.uri.join("/") + "/";

  const post = await getPostByUri(uri);

  if (!post) {
    return <p>Artículo no encontrado</p>;
  }

  return (
    <article>
      <h1>{post.title}</h1>

      {post.featuredImage?.node && (
        <img
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText || post.title}
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      <p>
        Publicado por{" "}
        {post.author?.node?.name || "Embragues La 34"} —{" "}
        {new Date(post.date).toLocaleDateString()}
      </p>
    </article>
  );
}
