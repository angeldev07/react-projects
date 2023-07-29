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
		<aside className='history-side'>
			<p className='history-title'>Historial de Busqueda</p>
			<div className='history__search'>
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
               history.length > 0 && history.map( item => (<span className='history-item' key={item}>{item}</span>) )
            }
		</aside>
	)
}
