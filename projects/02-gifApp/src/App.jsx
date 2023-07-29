import { Gifts } from "./components/Gifts"
import { Sidebar } from "./components/Sidebar"
import './style.css'

export const App = () => {
  return (
    <main className="main-container">
        <Sidebar />
        <Gifts search="goku" />
    </main>
  )
}
