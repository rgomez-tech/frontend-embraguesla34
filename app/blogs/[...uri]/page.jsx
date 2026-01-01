import { getPostByUri } from "@/lib/getPostByUri";
import './post.css';


export default async function BlogPostPage({ params }) {
  if (!params?.uri) {
    return <p>URI no encontrada</p>;
  }

  const uriArray = params?.uri;

  const uri = "/" + uriArray.join("/") + "/";

  const post = await getPostByUri(uri);

  if (!post) {
    return <p>Artículo no encontrado EN BLOG</p>;
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
