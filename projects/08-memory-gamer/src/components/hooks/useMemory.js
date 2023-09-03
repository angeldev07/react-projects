import { useEffect, useReducer } from "react"
import Swal from "sweetalert2"
import { useTimer } from "./useTimer"

const INITIAL_STATE = {
    board: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8].sort(() => Math.random() - 0.5).map(option => ({ option, isFlipped: false })),
    selections: [],
    moves: 0,
    times: {minutes:0, seconds: 0},
    matches: [],
    block: false
}

const ACTION_TYPE = {
    restart: 'restart',
    add: 'add',
    restart_selections: 'restart_selections',
    blocking: 'blocking',
    matched: 'matched' ,
    time: 'set-time'
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
            block: false
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

}


export const useMemory = () => {
    const [{board, selections, moves, times, matches, block}, dispatch] = useReducer(reducer, INITIAL_STATE )
    const {resetTime} = useTimer( (prev) => { dispatch({type:'set-time', payload: {times: prev} }) }, block )

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

    const restartGame = () => {
        resetTime()
        dispatch({type: 'restart', payload: {} })
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
            setTimeout(() => {
                dispatch({type: 'matched', payload: {
                    matches: [...matches, first.option],
                    selections: [],
                    moves: moves + 1
                }})   
            }, 1000);
		}
	}, [selections])

    useEffect(() => {
		if (matches.length < board.length / 2) return 

		Swal.fire({
			title: 'You win ',
			text: 'You won this time. ',
			icon: 'success',
			confirmButtonText: 'Cool',
		})
        dispatch({type: 'restart', payload: {} })
	}, [matches])

    return {
        board,
        block,
        moves,
        match: matches,
        times,
        handleSelectedOption,
        handlePauseGame,
        restartGame,
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