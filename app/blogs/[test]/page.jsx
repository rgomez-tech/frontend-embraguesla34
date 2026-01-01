export default function Test({ params }) {
  return <pre>{JSON.stringify(params, null, 2)}</pre>;
}