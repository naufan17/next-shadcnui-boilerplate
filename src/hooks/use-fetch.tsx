/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import axiosInstance from "@/lib/axios";

type FetchState<T> = {
  data?: T | null;
  error: string | null;
  loading: boolean;
};

export function useFetch<T>(
  url: string,
  options?: AxiosRequestConfig,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET"
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance({
          method,  
          url,
          ...options
        });
        setData(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.message || 'Something went wrong');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options, method]);

  return { data, error, loading };
}