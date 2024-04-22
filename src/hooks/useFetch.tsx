import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

function useFetch<T> (schema: string, fields: string, whereColumn?: string, whereValue?: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (whereColumn && whereValue) {
                    response = await supabase
                        .from(schema)
                        .select(fields)
                        .eq(whereColumn, whereValue);
                } else {
                    response = await supabase
                        .from(schema)
                        .select(fields);
                }
                const data = response.data;
                setData(data as T);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [schema, fields, whereColumn, whereValue]);

    return { data, loading, error };
}

export default useFetch;
