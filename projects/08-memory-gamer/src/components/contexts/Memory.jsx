import { createContext } from "react";
import { useMemory } from "../hooks/useMemory";


export const MemoryProvider = ({children}) => {
    const { board, block, match, moves, times, restartGame, handleSelectedOption,handlePauseGame } = useMemory()
    return (
        <MemoryContext.Provider value={{board, block, match, moves, times, restartGame, handleSelectedOption, handlePauseGame}}>
            {children}
        </MemoryContext.Provider>
    )
}


export const MemoryContext = createContext()
