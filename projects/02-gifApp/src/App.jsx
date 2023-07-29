import { useEffect, useState } from "react"
import { Gifts } from "./components/Gifts"
import { Sidebar } from "./components/Sidebar"
import './style.css'

export const App = () => {

  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  

  useEffect(() => {

    const getGifs = async (value) => {
      const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=8MXJImy4kbJsjNL7dy2fePXcQS84Sgv1&q=${value}`)
      const {data} = await res.json()

      setData(data)
    }

   getGifs(search)

  }, [search])

  return (
    <main className="main-container">
        <Sidebar onSearch={setSearch} />
        <Gifts search={search} data={data}/>
    </main>
  )
}
