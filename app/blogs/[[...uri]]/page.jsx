export default async function BlogPostPage({ params }) {
  const uriArray = params?.uri;

  if (!uriArray) {
    return <p>URI no encontrada</p>;
  }

  const uri = "/blogs/" + uriArray.join("/") + "/";

  return (
    <pre>
      URI final: {uri}
    </pre>
  );
}
