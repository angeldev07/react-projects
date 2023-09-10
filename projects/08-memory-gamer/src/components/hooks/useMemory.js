import { useEffect, useReducer } from 'react'
import { useTimer } from './useTimer'
import { GRID_SIZE,  THEME_GAME } from '../../const/const'
import { generateBoard } from '../utils/generateBoard'

const INITIAL_STATE = {
	theme: THEME_GAME.NUMBERS,
	numOfPlayers: 1, //para indicar al useTimer si dispararse o no,
	grid_size: GRID_SIZE.FOUR, //para indicar al useTimer si dispararse o no,
	board: [],
	selections: [],
	pairs: [],
	moves: [], //la idea es ir obteniendo los movimiento a partir del index del current player
	times: { minutes: 0, seconds: 0 },
	matches: [],
	isBlock: false,
	isWinner: false,
	isPaused: false, // por si pauso el juego cuando se esta en mobile
	isPlaying: false, // para indicar cuando es tiempo de empezar a jugar
	currentPlayer: 0,
}

const ACTION_TYPE = {
	restart: 'restart',
	add: 'add',
	changeConfig: 'changeConfig',
	restart_selections: 'restart_selections',
	blocking: 'blocking',
	matched: 'matched',
	time: 'set-time',
	win: 'set-win',
	paused: 'set-paused',
	play: 'set-play',
    reset: 'reset'
}

const reducer = (state, action) => {
	const { type } = action

	if (type === ACTION_TYPE.restart) {
		return {
            ...state,
			board: generateBoard(state.grid_size, state.theme),
			moves: Array(state.numOfPlayers).fill(0),
			times: { minutes: 0, seconds: 0 },
			matches: [],
			selections: [],
			pairs: Array(state.numOfPlayers).fill(0),
            currentPlayer: 0,
			isBlock: false,
			isWinner: false,
			isPaused: false,
			isPlaying: true,
		}
	}

	if (type === ACTION_TYPE.add) {
        const { board, selections } = action.payload
		return {
			...state,
			board:board,
			selections:selections,
		}
	}

	if (type === ACTION_TYPE.restart_selections) {
        const { payload } = action
		return {
			...state,
			...payload,
		}
	}

	if (type === ACTION_TYPE.blocking) {
        const { block } = action.payload
		return {
			...state,
			isBlock: block,
		}
	}

	if (type === ACTION_TYPE.matched) {
        const { payload } = action
		return {
			...state,
			...payload,
		}
	}

	if (type === ACTION_TYPE.time) {
        const {times} = action.payload
		return {
			...state,
			times: times,
		}
	}

	if (type === ACTION_TYPE.win) {
		return {
			...state,
			isWinner: true,
		}
	}

	if (type === ACTION_TYPE.paused) {
        const {paused} = action.payload
		return {
			...state,
			isPaused: paused,
		}
	}

	if (type === ACTION_TYPE.play) {
		return {
			...state,
            board: generateBoard(state.grid_size, state.theme),
            moves: Array(state.numOfPlayers).fill(0),
            pairs: Array(state.numOfPlayers).fill(0),
            isPlaying: true,
		}
	}

    if(type === ACTION_TYPE.reset) {
        return {
            theme: THEME_GAME.NUMBERS,
            numOfPlayers: 1, 
            grid_size: GRID_SIZE.FOUR, 
            board: [],
            selections: [],
            moves: [],
            times: { minutes: 0, seconds: 0 },
            matches: [],
            isBlock: false,
            isWinner: false,
            isPaused: false, 
            isPlaying: false, 
            currentPlayer: 0,
        }
    }

    if(type === ACTION_TYPE.changeConfig) {
        const { key, value } = action.payload
        return {
            ...state,
            [key]: value
        }
    }
}

export const useMemory = () => {
	const [
		{
			theme,
			numOfPlayers,
			grid_size,
			board,
			selections,
			pairs,
			moves,
			times,
			matches,
			isBlock,
			isWinner,
			isPaused,
			isPlaying,
			currentPlayer,
		},
		dispatch,
	] = useReducer(reducer, INITIAL_STATE)

	const { resetTime } = useTimer(
		prev => {
			dispatch({ type: 'set-time', payload: { times: prev } })
		},
		isWinner,
		isPaused,
		isPlaying,
        numOfPlayers > 1
	)

    // Function to update the game config
    const handleSelectConfig = ({key, value}) => () => [
        dispatch({type: 'changeConfig', payload: {key, value}})
    ]

	const handleSelectedOption =
		({ index }) =>
		() => {
			const newBoard = board.map((card, i) => {
				if (i == index) {
					return {
						...card,
						isFlipped: true,
					}
				}
				return card
			})

			const updateSelections = [...selections, newBoard[index]]
			dispatch({
				type: 'add',
				payload: { board: newBoard, selections: updateSelections },
			})
		}

	const handlePauseGame = ({ block }) => {
		dispatch({ type: 'blocking', payload: { block } })
	}

	const reallyPausedGame = ({ paused }) => {
		dispatch({ type: 'set-paused', payload: { paused } })
	}

	const restartGame = () => {
		resetTime()
		dispatch({ type: 'restart', payload: {} })
	}

	const startGame = () => {
		dispatch({ type: 'set-play' })
	}


    const hanldeNewGame = () => {
        dispatch({type: 'reset'})
    }

	useEffect(() => {
		if (selections.length <= 1) return

		const [first, second] = selections

		if (first.option !== second.option) {
			handlePauseGame({ block: true })
			setTimeout(() => {
                const newMoves = [...moves]
                newMoves[currentPlayer] += 1
				dispatch({
					type: 'restart_selections',
					payload: {
						board: board.map(card => ({ ...card, isFlipped: false })),
						selections: [],
						isBlock: false,
						moves: newMoves,
                        currentPlayer: currentPlayer === numOfPlayers-1 ? 0 : currentPlayer + 1
					},
				})
			}, 1000)
			return
		}

		if (first.option === second.option) {
			handlePauseGame({ block: true })
			setTimeout(() => {
                const newMoves = [...moves]
				const newPairs = [...pairs]
				newPairs[currentPlayer] += 1
                newMoves[currentPlayer] += 1
				dispatch({
					type: 'matched',
					payload: {
						matches: [...matches, first.option],
						selections: [],
						pairs: newPairs,
						moves: newMoves, 	
						isBlock: false,
					},
				})
			}, 1000)
		}
	}, [selections])

	useEffect(() => {
		if (matches.length < board.length / 2 || board.length === 0) return
		dispatch({ type: 'set-win', payload: {} })
	}, [matches])

	return {
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
	}
}

// setBoard(prev => prev.map(card => ({ ...card, isFlipped: false })))
// setSelected([])
// setBlockBoard(false)
// setMoves(moves + 1)
// ===============================================================================
// setMatch(prev => [...prev, first.option])
// setSelected([])
// setMoves(moves + 1)
