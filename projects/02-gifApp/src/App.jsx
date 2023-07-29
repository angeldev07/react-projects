import { Gifts } from "./components/Gifts"
import { Sidebar } from "./components/Sidebar"

export const App = () => {
  return (
    <main>
        <Sidebar />
        <h1>GifApp</h1>
        <Gifts search="goku" />
    </main>
  )
}
