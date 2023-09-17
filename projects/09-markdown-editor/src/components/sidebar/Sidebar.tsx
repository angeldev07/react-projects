import { DocumentItem } from "./DocumentItem"
import { SwtichTheme } from "./SwtichTheme"

interface State {
  open: boolean
}

export const Sidebar = ({open}:State) => {
  return (
    <aside className={`w-[250px] min-h-screen bg-[#1d1f22] px-6 pt-6 absolute top-0 left-0  transition-transform ${!open ? '-translate-x-[250px]' : 'translate-x-0'}`}>
        <h2 className="text-[#7c8187] uppercase tracking-[2px] text-[14px] mb-6">my documents</h2>
        <button className="w-full capitalize bg-[#e46643] rounded-md px-4 py-2 text-white ">+ new document</button>
        {/* all documents */}
        <section className="my-8">
           <ul className="flex flex-col gap-4">
            {[1,2].map(item => (
                    <DocumentItem key={item}/>
                ))}
           </ul>
        </section>
        {/* swtich theme */}
        <footer>
               <SwtichTheme />
        </footer>
    </aside>
  )
}
