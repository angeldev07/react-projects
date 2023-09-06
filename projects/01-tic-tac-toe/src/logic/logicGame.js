const turns = {
	X: 'x',
	O: 'o',
}

const allWinners = [
	[0, 1, 2], // row 1
	[3, 4, 5], // row 2
	[6, 7, 8], // row 3
	[0, 3, 6], // col 1
	[1, 4, 7], // col 2
	[2, 5, 8], // col 3
	[0, 4, 8], // diagonal 1
	[2, 4, 6], // diagonal 2
]

const markCell = ({
	index,
	turn,
	board,
	setBoard,
	setPlayer,
	player,
	winner,
	setWinner,
	score,
	setScore,
}) => {
	const newBoard = [...board]
	if (newBoard[index].turn || winner) return

	newBoard[index] = { turn }

	checkWinner({ newBoard, setWinner, winner, score, setScore })

	setBoard(newBoard)
	setPlayer(player === turns.X ? 'o' : 'x')
}

const checkWinner = ({ newBoard, setWinner, winner, score, setScore }) => {
	allWinners.forEach(winnerP => {
		const [a, b, c] = winnerP
		if (
			newBoard[a].turn &&
			newBoard[a].turn === newBoard[b].turn &&
			newBoard[a].turn === newBoard[c].turn
		) {
			setWinner(newBoard[a].turn)
			updateScore({ winner: newBoard[a].turn, setScore, score })
		}
	})

	const allMarked = newBoard.every(cell => cell.turn)

	if (allMarked && !winner) {
		setWinner('tie')
		updateScore({ winner: 'tie', setScore, score })
	}
}

const updateScore = ({ winner, setScore, score }) => {
	if (!winner) return

	if (winner === 'x') {
		setScore({ ...score, x: score.x + 1 })
	} else if (winner === 'o') {
		setScore({ ...score, o: score.o + 1 })
	} else {
		setScore({ ...score, ties: score.ties + 1 })
	}
}

export { markCell, turns }
