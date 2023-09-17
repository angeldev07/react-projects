import { EditorHeader } from "./EditorHeader"

interface State {
    handleShow: () => void,
	onChangeText: (event: React.ChangeEvent<HTMLTextAreaElement>)  => void
}


export const Markdown = ({handleShow, onChangeText}:State) => {
	return (
		<section className="w-full h-screen md:border-r-[.5px] border-r-[#5a6069]">
			<EditorHeader title="markdown" handleShow={handleShow} />
			<textarea onChange={onChangeText} className="block  w-full h-full bg-[#151619] text-[#c1c4cb] p-4 outline-none border-none resize-none "></textarea>
		</section>
	)
}
