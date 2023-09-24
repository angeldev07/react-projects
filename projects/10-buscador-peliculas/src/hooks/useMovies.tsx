import { useRef, useState, useCallback } from "react"
import { Movie } from "../types"
import { getMoviesFromAPI } from "../services/getMovies"

export const useMovies = ({search}: {search: string}) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false)
    const lastSearch = useRef(search)

    const getMovies = useCallback( async ({search} : {search: string}) => {
        if(lastSearch.current === search) return 
        setLoading(true)
        try{
            const listOfMovies =  await getMoviesFromAPI({search})
            setMovies(listOfMovies)
        }catch( error) {
            throw new Error("Error en la peticion");
        }finally {
            setLoading(false)
            lastSearch.current = search
        }

    }, [])


    return {
        movies,
        loading,
        getMovies
    }

}