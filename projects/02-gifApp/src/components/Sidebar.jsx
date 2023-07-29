import { useState } from 'react'

export const Sidebar = () => {
	// estado para el input
	const [inputValue, setInputValue] = useState('')

	// estado para el historial de busqueda
	const [history, setHistory] = useState([])

	const handleInputChange = value => {
		setInputValue(value)
	}

	const handleSearch = () => {
		setHistory([...history, inputValue])
        setInputValue('')
	}

	return (
		<aside>
			<p>Historial de Busqueda</p>
			<div>
				<input
					type="text"
					placeholder="goku, vegeta, valorant.."
					value={inputValue}
					onChange={ e => handleInputChange(e.target.value) }
                    onKeyDown={ e => e.key === 'Enter' && handleSearch() }
				/>
				<button onClick={ handleSearch }>Buscar</button>
			</div>

            {
                history.map( item => (<p key={item}>{item}</p>) )
            }
		</aside>
	)
}
