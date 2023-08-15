import { Moon } from '../../const/icons'

export const Header = () => {
	const handleDarkMode = () => {
		document.documentElement.classList.toggle('dark')
	}

	return (
		<header className="p-7 flex shadow-md">
			<h1 className="font-bold text-xl">Where in the world?</h1>
			<button
				className="ml-auto capitalize flex items-center gap-3 font-semibold"
				onClick={handleDarkMode}
			>
				<div className="w-5 h-5">
					<Moon />
				</div>
				dark mode
			</button>
		</header>
	)
}
