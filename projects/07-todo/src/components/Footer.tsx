import { TODO_FILTERS } from '../const/filters'
import { FilterValue } from '../types/types'

const FILTER_BUTTONS = {
	[TODO_FILTERS.ALL]: { literal: 'all' },
	[TODO_FILTERS.ACTIVE]: { literal: 'active' },
	[TODO_FILTERS.COMPLETED]: { literal: 'completed' },
} as const

interface Props {
	onUpdateFilter: (filter: FilterValue) => void
}

export const Footer = ({ onUpdateFilter }: Props) => {
	return (
		<footer>
			{Object.entries(FILTER_BUTTONS).map(([key, {literal}]) => (
				<button key={key} onClick={() => onUpdateFilter(literal)}>
					{literal}
				</button>
			))}
		</footer>
	)
}


