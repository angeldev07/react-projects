import { createContext } from 'react'
import { useMemory } from '../hooks/useMemory'

export const MemoryProvider = ({ children }) => {
	const {
		board,
		isBlock,
		moves,
		match: matches,
        times,
		isWinner,
		isPaused,
		isPlaying,
        theme,
        numOfPlayers,
        grid_size,
        currentPlayer,
        pairs,
		handleSelectedOption,
		handlePauseGame,
		restartGame,
		startGame,
		reallyPausedGame,
        handleSelectConfig,
        hanldeNewGame
	} = useMemory()
	return (
		<MemoryContext.Provider
			value={{
                board,
                isBlock,
                moves,
                match: matches,
                times,
                isWinner,
                isPaused,
                isPlaying,
                theme,
                numOfPlayers,
                size: grid_size,
                currentPlayer,
                pairs,
                handleSelectedOption,
                handlePauseGame,
                restartGame,
                startGame,
                reallyPausedGame,
                handleSelectConfig,
                hanldeNewGame
			}}
		>
			{children}
		</MemoryContext.Provider>
	)
}

export const MemoryContext = createContext()
