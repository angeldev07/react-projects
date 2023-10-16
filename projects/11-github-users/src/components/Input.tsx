import { BsSearch } from 'react-icons/bs'

interface Props {
	value: string
	onChange: (value: string) => void
	onClick: () => void
}

export const Input = ({ value, onChange, onClick }: Props) => {
	return (
		<div>
			<BsSearch />
			<input
				type="text"
				placeholder="Search Github username"
				value={value}
				onChange={e => onChange(e.target.value)}
				onKeyDown={key => {
					if (key.code != 'Enter') return
					onClick()
				}}
			/>
			<button onClick={onClick}>Search</button>
		</div>
	)
}
