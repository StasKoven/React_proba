import { useState, useEffect } from "react";

const useGetAllToDo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
        try {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
            setData(json);
            setIsLoading(false);
            });
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };
    fetchData();
    }, []);

    return { isLoading, data, error };
};

export default useGetAllToDo;