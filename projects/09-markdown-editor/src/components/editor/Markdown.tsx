import { useContext } from "react";
import { DocumentsContext } from "../../contexts/Documents"
import { EditorHeader } from "./EditorHeader"

interface State {
    handleShow: () => void,
}


export const Markdown = ({handleShow}:State) => {
	const { selectedDocument, updateMarkdown } = useContext(DocumentsContext)
	return (
		<section className="w-full h-full relative ">
			<EditorHeader title="markdown" handleShow={handleShow} />
			<textarea onChange={e => updateMarkdown(e.target.value) } value={selectedDocument.content} className="block w-full min-h-full bg-[#151619] text-[#c1c4cb] p-4 outline-none border-none resize-none overflow-y-auto"></textarea>
		</section>
	)
	// onChangeText
}
