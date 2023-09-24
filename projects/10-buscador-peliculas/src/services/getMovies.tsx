import { Movie } from "../types"

const API_KEY = '6785d99a'

interface Props {
    search: string
}

export const getMoviesFromAPI = async ({search}: Props): Promise<Movie[]> => {

    try {
        const http = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const response = await http.json()

        return response?.Search.map( movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

    } catch (e) {
        throw new Error("Error en la consulta");
        
    }

}