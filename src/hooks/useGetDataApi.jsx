import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetDataApi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [url]);
  return {
    data,
  };
}
