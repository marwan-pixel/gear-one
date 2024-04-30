import { useState, useEffect } from "react";

export default function UseFetch({ url, sendingData = null, method }) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const httpHeaders = {
    method: { method },
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  if (sendingData !== null) {
    httpHeaders[body] = JSON.stringify(sendingData);
  }

  useEffect(() => {
    fetch(url, httpHeaders)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [url]);
  return { data, isPending, error };
}
