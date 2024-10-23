import { useState, useEffect } from "react";

// Custom hook for fetching data
export default function useFetch(url: string) {
  const [data, setData] = useState(null); // State for data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState<null | string>(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError((error as Error)?.message ?? "");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Dependency array with url

  return { data, loading, error };
}
