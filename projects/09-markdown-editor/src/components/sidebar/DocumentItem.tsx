import { useContext } from "react"
import { DocumentIcon } from "../icons/icons"
import { Document } from "../interfaces/documents"
import { DocumentsContext } from "../../contexts/Documents"


interface State {
  document: Document,
  isSelected: boolean
}

export const DocumentItem = ({document, isSelected}: State) => {
  const {handleSelectDoc} = useContext(DocumentsContext)
  return (
    <li onClick={() => handleSelectDoc(document.id)} className="flex items-center leading-none cursor-pointer group">
        <span className="mr-4">
            <DocumentIcon />
        </span>
        <div className="flex flex-col w-full">
            <span className="text-[#7c8187] font-light text-sm">{document.createdAt}</span>
            <span className={`${isSelected? 'text-[#e46643]': 'text-white'} text-sm group-hover:text-[#e46643] transition-colors`}>{document.title}</span>
        </div>
    </li>
  )
}
