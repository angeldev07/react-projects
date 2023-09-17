import { EditorHeader } from "./EditorHeader"
import Markdown from "markdown-to-jsx"

interface State {
    handleShow: () => void,
    value: string
}

export const Preview = ({handleShow, value}:State) => {
  return (
    <section className="w-full h-full">
        <EditorHeader title="preview"  handleShow={handleShow}/>
        <div className="block w-full h-full overflow-y-auto bg-[#151619] text-[#c1c4cb] p-4 outline-none border-none ">
          <Markdown children={value}></Markdown>
        </div>
    </section>
  )
}
