import { useContext, useEffect, useMemo } from 'react'
import { MemoryContext } from '../contexts/Memory'

export const ModalWin = ({ close }) => {
	const { moves, times, numOfPlayers, pairs, restartGame, hanldeNewGame } =
		useContext(MemoryContext)
	const handleClose = () => {
		close()
		restartGame()
	}
	const getWinner = useMemo(() => {
		const max = Math.max(...pairs)
		return pairs.findIndex(pair => pair == max)
	}, [pairs])

  useEffect(()=> console.log(pairs), [pairs])

	return (
		<div className="modal-container">
			<article className="modal">
				<section className="modal-header">
					<h2>
						{numOfPlayers === 1 ? 'You did it!' : `Player ${getWinner+1} wins!`}
					</h2>
					<p>Game over! Here&apos; are the results</p>
				</section>

				{numOfPlayers === 1 && (
					<section className="stats-container">
						<div className="stats">
							<span>time elapsed</span>
							<span>
								{times.minutes}:
								{times.seconds < 10 ? `0${times.seconds}` : times.seconds}{' '}
							</span>
						</div>
						<div className="stats">
							<span>moves taken</span>
							<span>{moves} moves</span>
						</div>
					</section>
				)}

				{numOfPlayers > 1 && (
					<>
						{pairs.map((pair, index) => (
							<section key={pair} className="stats-container">
								<div className={`stats ${index === getWinner ? 'active': ''}`}>
									<span>{`player ${index+1} ${index === getWinner ? '(winner)': ''} `}</span>
									<span>{pair} pairs</span>
								</div>
							</section>
						))}
					</>
				)}

				<section className="btns-container">
					<button className="btn btn-primary" onClick={handleClose}>
						restart
					</button>
					<button onClick={hanldeNewGame} className="btn btn-secondary">setup new game</button>
				</section>
			</article>
		</div>
	)
}
