import { useState, useContext } from 'react'
import { Markdown } from './Markdown'
import { Preview } from './Preview'
import './style.css'
import { DocumentsContext } from '../../contexts/Documents'

export const Editor = () => {
	const { selectedDocument } = useContext(DocumentsContext)
	const [show, setShow] = useState(false) //true => preview, false => markdown
	const [text, setText]= useState(selectedDocument.content) 
	const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value)
	}

	return (
		<section className={`w-full h-full`}>
            <div className={`h-4/5 relative editor-container ${show ? 'notShow' : 'activate'} `}>
                <Markdown value={text} handleShow={() => setShow(!show)} onChangeText={handleChange} /> 
				<div className="absolute w-1 h-[1000%] right-[50%]  md:border-r-[.5px] border-r-[#5a6069]"></div>
                <Preview handleShow={() => setShow(!show)} value={text} />
            </div>
		</section>
	)
}
