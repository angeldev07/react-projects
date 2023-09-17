import { useContext } from "react"
import { CloseIcon, DeleteIcon, DocumentIcon, HamburgerIcon, Logo, SaveIcon } from "../icons/icons"
import { DocumentsContext } from "../../contexts/Documents"

interface State {
  openSidebar: () => void,
  open: boolean
}

export const Header = ({openSidebar, open}:State) => {
    const { selectedDocument } = useContext(DocumentsContext )
  return (
    <header className="w-full bg-[#2b2d31] flex ">
        <div className="w-full flex items-center">
            <button onClick={openSidebar} className="bg-[#35393f] flex items-center justify-center p-6 cursor-pointer transition-colors hover:bg-[#e46643]">
                {/* {!open ? <span><HamburgerIcon /></span> : <span><CloseIcon /></span>} */}
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
                    <label htmlFor="" className=" hidden md:inline-block capitalize leading-none text-[#c1c4cb] font-normal text-xs">document name</label>
                    <input type="text" placeholder="welcome.md" className="w-full text-white  bg-transparent outline-none caret-[#e46643] focus:border-white focus:border-b" defaultValue={selectedDocument.title} />
                </div>
            </div>
        </div>
        {/* contenedor del nombre el archivo y los botones de accion */}
        <div className=" flex px-2  items-center"> 
            <div className="flex gap-4">
                <button className="hover:text-[#e46643]">
                    <DeleteIcon />
                </button>
                <button className="flex items-center gap-3 text-white bg-[#e46643] rounded-md p-3 hover:opacity-90 md:w-40">
                    <SaveIcon />
                    <span className="hidden capitalize md:inline-block">save changes</span>
                </button>
            </div>
        </div>
    </header>
  )
}
