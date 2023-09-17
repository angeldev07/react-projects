import { useContext } from "react"
import { DocumentItem } from "./DocumentItem"
import { SwtichTheme } from "./SwtichTheme"
import { DocumentsContext } from "../../contexts/Documents"

import toast from 'react-hot-toast';

interface State {
  open: boolean
}

export const Sidebar = ({open}:State) => {
  const { documents, selectedDocument ,handleAddDoc } = useContext(DocumentsContext)
  const notify = () => toast.success('Documented Created');
  return (
    <aside className={`w-[250px] min-h-screen bg-[#1d1f22] px-6 pt-6 absolute top-0 left-0  transition-transform ${!open ? '-translate-x-[250px]' : 'translate-x-0'}`}>
        <h2 className="text-[#7c8187] uppercase tracking-[2px] text-[14px] mb-6">my documents</h2>
        <button onClick={() =>{handleAddDoc(), notify()}} className="w-full capitalize bg-[#e46643] rounded-md px-4 py-2 text-white ">+ new document</button>
        {/* all documents */}
        <section className="my-8">
           <ul className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
            {documents.map(doc => (
                    <DocumentItem key={doc.id} document={doc} isSelected={selectedDocument.id === doc.id} />
                ))}
           </ul>
        </section>
        {/* swtich theme */}
        <footer className=" absolute bottom-10">
               <SwtichTheme />
        </footer>
    </aside>
  )
}
