import React from 'react';
import useQuery from './useQuery';

type SearchProps = {
    url: string;
    q: string;
    limit: number;
    offset: number;
};

/**
 * @param param0 url: string, q: string, limit: number, offset: number
 * @returns  data: any, loading: boolean, error: any
 * @types SearchProps = { url: string, q: string, limit: number, offset: number }
 */

const useSearch = ({ url, q, limit, offset }: SearchProps) => {
    const { data, loading, error } = useQuery({ url, q, limit, offset });
    const cache = React.useRef(data);

    React.useEffect(() => {
        if (data) {
            cache.current = data;
        }

    }, [data]);

    return { data: cache.current, loading, error };
};

export default useSearch;