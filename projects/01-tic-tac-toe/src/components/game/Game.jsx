import { useState, useEffect } from 'react'
import './style.css'

import { BoardScore } from './BoardScore'
import { BoardHeader } from './BoardHeader'
import { ModalWinner } from './ModalWinner'
import { Cell } from './Cell'

import { markCell, turns } from '../../logic/logicGame'

export const Game = () => {
	const [board, setBoard] = useState(Array(9).fill({ turn: undefined }))
	const [player, setPlayer] = useState(turns.X)
	const [winner, setWinner] = useState(null)
	const [score, setScore] = useState({ x: 0, ties: 0, o: 0 })

	const resetGame = () => {
		setBoard(Array(9).fill({ turn: undefined }))
		setPlayer(turns.X)
		setWinner(null)
	}

	useEffect(() => {
		console.log('board', board)
	}, [board])

	return (
		<div>
			<BoardHeader currentPlayer={player} onResetGame={resetGame} />
			<div className="board-game">
				{board.map((cell, index) => (
					<Cell
						key={index}
						index={index}
						playerIcon={cell}
						turn={player}
						onMarkCell={() =>
							markCell({
								index,
								turn: player,
								board,
								setBoard,
								player,
								setPlayer,
								winner,
								setWinner,
								score,
								setScore,
							})
						}
					/>
				))}
			</div>
			<section className="winner">
				{winner && (
					<ModalWinner
						winner={winner}
						player={player}
						onResetGame={resetGame}
					/>
				)}
			</section>
			<BoardScore winner={winner} score={score} />
		</div>
	)
}
