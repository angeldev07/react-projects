import { MoonIcon, SunIcon } from '../const/svgs'
import { useState } from 'react'
import { TodoForm } from './TodoForm'

export const Header = () => {
	const [dark, setDark] = useState(true)

	const handleChangeTheme = () => {
		if (dark) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
		setDark(!dark)
	}

	return (
		<header>
			<div className="hero-img"></div>
			<div className="hero-container">
				<div className="hero-container--title">
					<h1 className="hero-title"> todo</h1>
					<button onClick={handleChangeTheme}>
						{dark ? <SunIcon /> : <MoonIcon />}
					</button>
				</div>
				<TodoForm />
			</div>
		</header>
	)
}
