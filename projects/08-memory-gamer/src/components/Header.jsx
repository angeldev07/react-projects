
import { useContext } from "react"
import { Logo } from "./icons/icons"
import { MemoryContext } from "./contexts/Memory"

export const Header = () => {
  const { restartGame } = useContext(MemoryContext)
  return (
    <header className="game--header">
        <Logo />
        <section>
            <div>
                <button className="btn btn-primary">menu</button>
            </div>
            <div className="desktop">
                <button className="btn btn-primary" onClick={restartGame}>restart</button>
                <button className="btn btn-secondary">new game </button>
            </div>
        </section>
    </header>
  )
}
