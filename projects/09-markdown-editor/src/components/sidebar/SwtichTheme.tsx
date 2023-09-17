import { useState } from 'react'
import { MoonIcon, SunIcon } from '../icons/icons'

export const SwtichTheme = () => {
	const [active, setActive] = useState(false)

	return (
		<div className="flex items-center gap-3">
			<span className={`transition-colors ${!active ? 'text-white' : 'text-[#5A6069]'}`}>
				<MoonIcon />
			</span>

			<div className="w-14 h-6 bg-[#5a6069] rounded-full">
				<label
					onClick={() => setActive(!active)}
					htmlFor="switch"
					className={`block w-full h-full cursor-pointer relative before:content-[''] before:inline-block before:absolute before:top-[15%] before:p-2 before:rounded-full before:bg-white before:transition-all ${
						active ? 'before:translate-x-8' : 'before:translate-x-2'
					}`}
				></label>
				<input type="checkbox" className="hidden" id="switch" />
			</div>
			<span className={`transition-colors ${active ? 'text-white' : 'text-[#5A6069]'}`}>
				<SunIcon />
			</span>
		</div>
	)
}
