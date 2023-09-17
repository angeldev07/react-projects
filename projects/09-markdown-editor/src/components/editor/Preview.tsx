import { EditorHeader } from "./EditorHeader"
import Markdown from "markdown-to-jsx"

interface State {
    handleShow: () => void,
    value: string
}

export const Preview = ({handleShow, value}:State) => {
  return (
    <section className="w-full h-screen">
        <EditorHeader title="preview"  handleShow={handleShow}/>
        <div className="block w-full h-full bg-[#151619] text-[#c1c4cb] p-4 outline-none border-none resize-none ">
          <Markdown children={value}></Markdown>
        </div>
    </section>
  )
}
