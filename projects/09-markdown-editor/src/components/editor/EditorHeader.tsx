import { ShowPreview } from "../icons/icons"
import { EDITORS } from "./editors"

interface State { 
    title: string
    handleShow: () => void
}


export const EditorHeader = ({title, handleShow}:State) => {
  const displayCondition = title === EDITORS.markdown
  return (
    <header className={`bg-[#1d1f22] p-4 flex items-center justify-between`}>
        <span className="text-[#c1c4cb] uppercase text-sm tracking-widest">{title}</span>
        <button className={`cursor-pointer ${displayCondition ? 'md:hidden': ''}`} onClick={handleShow}>
            <ShowPreview />
        </button>
    </header>
  )
}
