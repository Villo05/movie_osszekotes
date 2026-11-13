import { Children, createContext, useContext, useState, type ReactNode } from "react";
import type { movieType } from "../types/movieType";


interface movieContextType{
    moviesList: movieType[]
}

const MovieContext = createContext<movieContextType | undefined>(undefined)

export function MovieProvider({ children }:{children:ReactNode}){
    const [moviesList, setMoviesList]=useState<movieType[]>([])

    return(
        <MovieContext.Provider value= {{moviesList}}>
            {children}
        </MovieContext.Provider>
    )
}

export function useMoviecontext(){
    const context = useContext(MovieContext)
    if(context === undefined){
        throw new Error(
            "csak"
        )
    }
    return context
}

