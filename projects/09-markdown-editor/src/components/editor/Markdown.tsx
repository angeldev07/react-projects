import { EditorHeader } from "./EditorHeader"

interface State {
	value: string,
    handleShow: () => void,
	onChangeText: (event: React.ChangeEvent<HTMLTextAreaElement>)  => void
}


export const Markdown = ({value, handleShow, onChangeText}:State) => {
	return (
		<section className="w-full h-full relative ">
			<EditorHeader title="markdown" handleShow={handleShow} />
			<textarea onChange={onChangeText} value={value} className="block w-full min-h-full bg-[#151619] text-[#c1c4cb] p-4 outline-none border-none resize-none overflow-y-auto"></textarea>
		</section>
	)
}
