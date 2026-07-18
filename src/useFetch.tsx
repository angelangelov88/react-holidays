import { useState, useEffect } from 'react';

const useFetch = <T,>(urlOrUrls: string | string[]) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const requestUrls = Array.isArray(urlOrUrls) ? urlOrUrls : [urlOrUrls];
  const cacheKey = requestUrls.join('|');

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          requestUrls.map((url) =>
            fetch(url, { signal: abortCont.signal }).then((res) => {
              if (!res.ok) {
                throw Error('Could not fetch the data for that resource');
              }
              return res.json();
            })
          )
        );

        setData((Array.isArray(urlOrUrls) ? responses : responses[0]) as T);
        setIsPending(false);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          console.log('fetch aborted');
        } else if (err instanceof Error) {
          setIsPending(false);
          setError(err.message);
        } else {
          setIsPending(false);
          setError('An unknown error occurred');
        }
      }
    };

    fetchData();

    return () => abortCont.abort();
  }, [cacheKey]);

  return { data, isPending, error };
};

export default useFetch;