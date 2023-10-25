import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.warn("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto mt-10">
      <h1 className="font-bold text-blue-500">API Data Using Axios</h1>
      <br />

      {loading ? (
        <Spinner />
      ) : (
        <ul>
          {data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </ul>
      )}
      <br />
      <hr className="h-0.5 bg-gray-500 " />
    </div>
  );
}

export default ApiData;
