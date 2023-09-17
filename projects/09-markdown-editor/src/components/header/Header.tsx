import { useContext } from "react"
import { CloseIcon, DeleteIcon, DocumentIcon, HamburgerIcon, Logo, SaveIcon } from "../icons/icons"
import { DocumentsContext } from "../../contexts/Documents"

import toast, { Toaster } from 'react-hot-toast';

interface State {
  openSidebar: () => void,
  open: boolean
}

export const Header = ({openSidebar, open}:State) => {
    const { selectedDocument, handleDeletedDoc, updateNameDoc, saveDoc } = useContext(DocumentsContext )
    const notify = (message: string) => toast.success(message);

  return (
    <header className="w-full bg-[#2b2d31] flex ">
        <div className="w-full flex items-center">
            <button onClick={openSidebar} className="bg-[#35393f] flex items-center justify-center p-6 cursor-pointer transition-colors hover:bg-[#e46643]">
                <span className="flex items-center w-full h-[24px]">
                    { open ? <CloseIcon /> : <HamburgerIcon />}
                </span>
            </button>
            <div className="hidden relative px-6 md:block after:content-[''] after:border-r after:border-r-[#5a6069] after:absolute after:w-10 after:h-8 after:right-0 after:-top-[80%]">
                <Logo />
            </div>
            <div className="flex items-center ml-5">
                <span className="mr-4">
                    <DocumentIcon />
                </span>
                <div className="flex flex-col">
                    <label htmlFor="" className=" hidden md:inline-block capitalize leading-none text-[#c1c4cb] font-normal text-xs">document name </label>
                    <input onChange={e => updateNameDoc(e.target.value)} type="text" placeholder="welcome.md" className="w-full text-white  bg-transparent outline-none caret-[#e46643] focus:border-white focus:border-b" value={selectedDocument.title} />
                </div>
            </div>
        </div>
        {/* contenedor del nombre el archivo y los botones de accion */}
        <div className=" flex px-2  items-center"> 
            <div className="flex gap-4">
                <button onClick={() => {handleDeletedDoc(); notify('Document deleted success')}} className={`hover:text-[#e46643] ${ selectedDocument.id === '-1' ? 'hidden': '' }`}>
                    <DeleteIcon />
                </button>
                <button onClick={() => { saveDoc(); notify('Save document success')}} disabled={selectedDocument.id === '-1'} className={`flex items-center justify-center text-white rounded-md p-3  md:w-40 ${selectedDocument.id === '-1' ? 'bg-[#5a6069]':'bg-[#e46643] hover:opacity-90'}`}>
                    <SaveIcon />
                    <span className="hidden capitalize ml-3 md:inline-block">save changes</span>
                </button>
            </div>
        </div>
        
        <Toaster/>
    
    </header>
  )
}
