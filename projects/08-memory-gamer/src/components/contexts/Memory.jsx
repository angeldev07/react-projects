import { createContext} from "react";
import { useMemory } from "../hooks/useMemory";


export const MemoryProvider = ({children}) => {
    const { board, block, match, moves, times, win, paused, play, restartGame, handleSelectedOption,handlePauseGame, startGame, reallyPausedGame, } = useMemory()
    return (
        <MemoryContext.Provider value={{board, block, match, moves, times, win, paused, play, restartGame, handleSelectedOption, handlePauseGame, startGame, reallyPausedGame,}}>
            {children}
        </MemoryContext.Provider>
    )
}


export const MemoryContext = createContext()
