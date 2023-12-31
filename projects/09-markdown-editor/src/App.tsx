import { useState } from "react";
import { Header } from "./components/header/Header"
import { Sidebar } from "./components/sidebar/Sidebar"
import { Editor } from "./components/editor/Editor";
import { DocumentsProvider } from "./contexts/Documents";

export const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <main className="w-full h-screen bg-[#151619]  ">
      <DocumentsProvider>
        <>
          <Sidebar open={openSidebar} />
          <section className={`w-full h-full fixed transition-transform ${openSidebar ? 'translate-x-[250px]': 'translate-x-0 '}`} >
            <Header openSidebar={() => setOpenSidebar(!openSidebar)} open={openSidebar} />
            <Editor />
          </section>
        </>
      </DocumentsProvider>
    </main>
  )
}
