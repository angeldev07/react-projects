import { useEffect, useReducer } from "react"
import { useTimer } from "./useTimer"

const INITIAL_STATE = {
    board: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8].sort(() => Math.random() - 0.5).map(option => ({ option, isFlipped: false })),
    selections: [],
    moves: 0,
    times: {minutes:0, seconds: 0},
    matches: [],
    block: false,
    win: false,
    paused: false,
    play: false
}

const ACTION_TYPE = {
    restart: 'restart',
    add: 'add',
    restart_selections: 'restart_selections',
    blocking: 'blocking',
    matched: 'matched' ,
    time: 'set-time',
    win: 'set-win',
    paused: 'set-paused',
    play: 'set-play'
}    


const reducer = (state, action) => {
    const {type, payload} = action 

    if(type === ACTION_TYPE.restart) { 
        return {
            board: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8].sort(() => Math.random() - 0.5).map(option => ({ option, isFlipped: false })),
            moves: 0,
            times: {minutes:0, seconds: 0},
            matches: [],
            selections: [],
            block: false,
            win: false,
            paused: false,
            play: true 
        }

    }

    if(type === ACTION_TYPE.add) {
        return {
            ...state, 
            board: payload.board,
            selections: payload.selections
        }
    }

    if(type === ACTION_TYPE.restart_selections) { 
        return { 
            ...state,
            ...payload
        }
    }

    if(type === ACTION_TYPE.blocking){
        return {
            ...state,
            block: payload.block
        }
    }

    if(type === ACTION_TYPE.matched){
        return {
            ...state,
            ...payload
        }
    }

    if(type === ACTION_TYPE.time) {
        return {
            ...state,
            times: payload.times
        }
    }

    if(type === ACTION_TYPE.win) {
        return {
            ...state,
            win: true 
        }
    }

    if(type === ACTION_TYPE.paused){
        return {
            ...state,
            paused: payload.paused
        }
    }

    if(type === ACTION_TYPE.play){
        return {
            ...state,
            play: payload.play
        }
    }

}


export const useMemory = () => {
    const [{board, selections, moves, times, matches, block, win, paused, play}, dispatch] = useReducer(reducer, INITIAL_STATE)
    const {resetTime} = useTimer( (prev) => { dispatch({type:'set-time', payload: {times: prev} }) }, win, paused, play )

    const handleSelectedOption = ({ index }) => () => {
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
        dispatch({type: 'add', payload:{ board: newBoard, selections:updateSelections} })
    }

    const handlePauseGame = ({block}) => {
        dispatch({type:'blocking', payload:{block} })
    }

    const reallyPausedGame = ({paused}) => {
        dispatch({type:'set-paused', payload:{paused} })

    }

    const restartGame = () => {
        resetTime()
        dispatch({type: 'restart', payload: {} })
    }

    const startGame = () => {
        dispatch({type: 'set-play', payload: {play: true } })
    }

	useEffect(() => {
		if (selections.length <= 1) return

		const [first, second] = selections

		if (first.option !== second.option) {
			handlePauseGame({block:true})
			setTimeout(() => {
                dispatch({type: 'restart_selections', payload: {
                    board: board.map(card => ({ ...card, isFlipped: false })),
                    selections: [],
                    block: false,
                    moves: moves + 1
                }})
			}, 1000)
			return
		}

		if (first.option === second.option) {
            handlePauseGame({block:true})
            setTimeout(() => {
                dispatch({type: 'matched', payload: {
                    matches: [...matches, first.option],
                    selections: [],
                    moves: moves + 1,
                    block: false
                }})   
            }, 1000);
		}
	}, [selections])

    useEffect(() => {
		if (matches.length < board.length / 2) return 
        dispatch({type: 'set-win', payload: {}})
	}, [matches])

    return {
        board,
        block,
        moves,
        match: matches,
        times,
        win,
        paused,
        play,
        handleSelectedOption,
        handlePauseGame,
        restartGame,
        startGame,
        reallyPausedGame
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