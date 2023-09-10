import { Score } from './Score'
import { Card } from './Card'
import { useContext } from 'react'
import { MemoryContext } from '../contexts/Memory'
import { ModalWin } from './ModalWin'
import { useModal } from '../hooks/useModal'
import { GRID_SIZE } from '../../const/const'
export const Board = () => {
	const {
		board,
		isBlock,
		moves,
		match,
		times,
		isWinner,
		size,
		handleSelectedOption,
	} = useContext(MemoryContext)
	const { open, manageModal } = useModal(isWinner)
	return (
		<section>
			<div className={`board board-${size == GRID_SIZE.FOUR ? '4x4' : '6x6'}`}>
				{board.map(({ option, isFlipped }, index) => (
					<Card
						key={index}
						option={option}
						isFlipped={isFlipped}
						isMatch={match.includes(option)}
						onSeletedOption={handleSelectedOption({ index })}
						isBlock={isBlock}
					/>
				))}
			</div>
			<Score moves={moves} time={times} />
			{open && <ModalWin close={manageModal} />}
		</section>
	)
}
