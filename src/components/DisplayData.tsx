import useFetch from "../hooks/fetch";

//https://apipheny.io/free-api/#apis-without-key

const url = "https://randomuser.me/api/";

// Component using the useFetch Hook
function DataDisplayComponent({ url }: { url: string }) {
  const { data, loading, error } = useFetch(url); // Utilizing useFetch

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
