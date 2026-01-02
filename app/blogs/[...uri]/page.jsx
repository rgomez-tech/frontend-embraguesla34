import { getPostByUri } from "@/lib/getPostByUri";
import './post.css';

export default async function getPostByUri({ params }) {
  const uriArray = params?.uri;

  if (!uriArray || !Array.isArray(uriArray)) {
    return <p>URI no encontrada</p>;
  }

  const uri = "/" + uriArray.join("/") + "/";

  console.log("URI final:", uri);

  const post = await fetchPostByUri(uri);

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

      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      <p>
        Publicado por{" "}
        {post.author?.node?.name || "Embragues La 34"} —{" "}
        {new Date(post.date).toLocaleDateString()}
      </p>
    </article>
  );
}

