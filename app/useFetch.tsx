import React, { useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;
