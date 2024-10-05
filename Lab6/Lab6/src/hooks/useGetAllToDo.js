import { useState, useEffect } from "react"
import useTodos from './useTodos'
const useGetAllToDo = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const { todos, setTodos, addTodo, removeTodo, handleSearch } = useTodos()

    useEffect(() => {
        setIsLoading(true)

        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos")
                const data = await response.json()
                setTodos(data)
                setIsLoading(false)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        };

        fetchData()
    }, [setTodos])

    return { isLoading, todos, error, addTodo, removeTodo, handleSearch }
};

export default useGetAllToDo
