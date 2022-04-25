import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    axios
      .get(
        url
      )
      .then(({ data }) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
