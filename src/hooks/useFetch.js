import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (response.status !== 200) {
                    throw new Error('Error en la respuesta');
                }
                const jsonData = await response.json();
                if (isMounted) {
                    setData(jsonData);
                    setLoading(false);
                }

            }
            catch (e) {
                setError(e);
            }
        }
        fetchData();
        return ()=>isMounted=false;
    }, [url]);

    return { data, loading, error }

}