import { createContext } from "react";
import { useMemory } from "../hooks/useMemory";


export const MemoryProvider = ({children}) => {
    const { board, block, match, moves, times, restartGame, handleSelectedOption } = useMemory()
    return (
        <MemoryContext.Provider value={{board, block, match, moves, times, restartGame, handleSelectedOption}}>
            {children}
        </MemoryContext.Provider>
    )
}


export const MemoryContext = createContext()
