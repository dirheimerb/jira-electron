import React from 'react';

type QueryProps = {
    url: string;
    q: string;
    limit: number;
    offset: number;
};

/**
 * @param param0 url: string, q: string, limit: number, offset: number
 * @returns  data: any, loading: boolean, error: any
 * @types QueryProps = { url: string, q: string, limit: number, offset: number }
 */

const useQuery = ({ url, q, limit, offset }: QueryProps) => {
    const [data, setData] = React.useState(null);
    const [status, setStatus] = React.useState('idle');
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if(!q) return;
        const fetchData = async () => {
            setStatus('fetching');
            try {

                const searchURL = (`${url}?=${q}`) ?  (`${url}?q=${q}&limit=${limit}&offset=${offset}`) : (`${url}?q=${q}`);
                const resp = await fetch(searchURL);               
                const jsonResp = await resp.json();
                setData(jsonResp);    
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ q, limit, offset }),
                });
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error: any) {
                setError(error);
            }
        };

        fetchData();
    }, [url, q, limit, offset]);

    return { data, loading, error };
};

export default useQuery;

// Language: typescript
// Path: src\hooks\useSearch.ts
// Compare this snippet from src\hooks\useFetch.ts:
// import React from 'react';
// 
// const useFetch = (url: string) => {
//     const [data, setData] = React.useState(null);
//     const [loading, setLoading] = React.useState(true);
//     
//     React.useEffect(() => {
//         const fetchData = async () => {
//         const response = await fetch(url);
//         const json = await response.json();
//         setData(json);
//         setLoading(false);
//         };
//     
//         fetchData();
//     }, [url]);
//     
//     return { data, loading };
//     };
// 
// export default useFetch;
// 


// Language: typescript
// Path: src\hooks\useSearch.ts
// Compare this snippet from src\hooks\useFetch.ts:
// import React from 'react';
// 
// const useFetch = (url: string) => {
//     const [data