import { BsSearch } from 'react-icons/bs'

interface Props {
	value: string
	onChange: (value: string) => void
	onClick: () => void
	isError: boolean
}

export const Input = ({ value, onChange, onClick, isError }: Props) => {
	return (
		<div className='card card-input'>
			<div >
				<BsSearch  />
			</div>
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
			{isError && <p className='error'>no result</p>}
		</div>
	)
}
