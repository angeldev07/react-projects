import { useContext } from "react";
import { DocumentsContext } from "../../contexts/Documents"
import { EditorHeader } from "./EditorHeader"
import Markdown from "markdown-to-jsx"

interface State {
    handleShow: () => void,
}

export const Preview = ({handleShow}:State) => {
  const { selectedDocument } = useContext(DocumentsContext)
  return (
    <section className="w-full h-full">
        <EditorHeader title="preview"  handleShow={handleShow}/>
        <div className="block w-full h-full overflow-y-auto bg-[#151619] text-[#c1c4cb] p-4 outline-none  md:border-l border-l-[#5a6069]">
          <Markdown children={selectedDocument.content}></Markdown>
        </div>
    </section>
  )
}
