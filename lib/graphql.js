export async function fetchGraphQL(query, variables = {}) {
  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  const json = await res.json();
  return json.data;
}
