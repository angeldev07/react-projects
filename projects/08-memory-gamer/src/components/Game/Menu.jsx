import { useContext } from "react"
import { MemoryContext } from "../contexts/Memory"


export const Menu = ({onRestart, onResume}) => {
  const {hanldeNewGame} = useContext(MemoryContext)
  return (
    <div className="modal-container">
        <section className="modal">
            <button className="btn btn-primary" onClick={onRestart}>restart</button>
            <button onClick={hanldeNewGame} className="btn btn-secondary">new game</button>
            <button className="btn btn-secondary" onClick={onResume}>resume game</button>
        </section>
    </div>
  )
}
