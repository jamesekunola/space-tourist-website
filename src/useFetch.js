import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};
