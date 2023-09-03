import { Score } from './Score'
import { Card } from './Card'
import { useContext } from 'react'
import { MemoryContext } from './contexts/Memory'

export const Board = () => {
  const { board, block, moves, match, times ,handleSelectedOption} = useContext(MemoryContext)
	return (
		<section>
			<div className="board">
				{board.map(({ option, isFlipped }, index) => (
					<Card
						key={index}
						option={option}
						isFlipped={isFlipped}
						isMatch={match.includes(option)}
						onSeletedOption={handleSelectedOption({ index })}
						isBlock={block}
					/>
				))}
			</div>
			<Score moves={moves} time={times} />
		</section>
	)
}

