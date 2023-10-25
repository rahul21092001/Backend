/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/user';


const JTask = ({ maxretry }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        if (retryCount < maxretry) {
          setRetryCount(retryCount + 1);
        } else {
          setError('Failed to fetch data. Max retries reached.');
        }
      }
    };

    if (!data && !error) {
      fetchData();
    }
  }, [data, error, retryCount, maxretry]);

  if (data) {
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default JTask;
