import { useState, useContext } from 'react'
import { Markdown } from './Markdown'
import { Preview } from './Preview'
import './style.css'
import { DocumentsContext } from '../../contexts/Documents'

export const Editor = () => {
	const { selectedDocument } = useContext(DocumentsContext)
	const [show, setShow] = useState(false) //true => preview, false => markdown

	return (
		<section className={`w-full h-full`}>
			{selectedDocument.id !== '-1' && (
				<div
					className={`h-[82%] relative editor-container ${
						show ? 'notShow' : 'activate'
					} `}
				>
					<Markdown handleShow={() => setShow(!show)} />
					<Preview handleShow={() => setShow(!show)} />
				</div>
			)}

			{selectedDocument.id === '-1' && (
				<div className="p-4">
					<span className="text-[#c1c4cb]">
						Looks like you deleted everything! Please create a new document in
						the sidebar :)
					</span>
				</div>
			)}
		</section>
	)
}
