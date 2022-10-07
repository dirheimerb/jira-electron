import React from 'react';

const useFetch = (url: string) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
        };
    
        fetchData();
    }, [url]);
    
    return { data, loading };
    };

export default useFetch;
