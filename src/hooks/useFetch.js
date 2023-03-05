import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (response.status !== 200) {
                    throw new Error('Error en la respuesta');
                  }
                  console.log('sigo con el estado ',response.status)
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            }
            catch (e) {
                setError(e);
            }
        }
        fetchData();
    }, [url]);

    return {data,loading, error}

}