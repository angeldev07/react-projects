import { useContext } from 'react'
import { TODO_FILTERS } from '../const/filters'
import { TodoContext } from '../contexts/todos'

const FILTER_BUTTONS = {
	[TODO_FILTERS.ALL]: { literal: 'all' },
	[TODO_FILTERS.ACTIVE]: { literal: 'active' },
	[TODO_FILTERS.COMPLETED]: { literal: 'completed' },
} as const

export const Footer = () => {
	const { handleChangeFilter, filterSelected } = useContext(TodoContext)
	return (
		<footer className="footer-container">
			{Object.entries(FILTER_BUTTONS).map(([key, { literal }]) => (
				<button
					key={key}
					onClick={() => handleChangeFilter(literal)}
					className={`${literal===filterSelected ? 'select': ''}`}
				>
					{literal}
				</button>
			))}
		</footer>
	)
}
