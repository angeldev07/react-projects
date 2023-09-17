import { useState } from "react";
import { Header } from "./components/header/Header"
import { Sidebar } from "./components/sidebar/Sidebar"

export const App = () => {
  const [openSidebar, setOpenSidebar] = useState(true)

  return (
    <main className="w-full min-h-screen bg-gray-700 font-roboto overflow-hidden">
        <Sidebar open={openSidebar} />
        <section className={`transition-transform ${openSidebar ? 'translate-x-[250px]': 'translate-x-0 '}`} >
          <Header openSidebar={() => setOpenSidebar(!openSidebar)} open={openSidebar} />
        </section>
    </main>
  )
}
