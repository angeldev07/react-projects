import { useState } from 'react'
import { Markdown } from './Markdown'
import { Preview } from './Preview'
import './style.css'

export const Editor = () => {
	const [show, setShow] = useState(false) //true => preview, false => markdown
	const [text, setText]= useState('')

	const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value)
	}

	return (
		<section className={`w-full h-full`}>
            <div className={`w-full h-full editor-container ${show ? 'notShow' : 'activate'} `}>
                <Markdown handleShow={() => setShow(!show)} onChangeText={handleChange} /> 
                <Preview handleShow={() => setShow(!show)} value={text} />
            </div>
		</section>
	)
}
