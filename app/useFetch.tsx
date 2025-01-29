import React, { useEffect } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, [url]);

  return { data, loading };
};

export { useFetch };
