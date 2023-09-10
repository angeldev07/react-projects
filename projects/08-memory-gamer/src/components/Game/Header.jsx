
import { useContext} from "react"
import { Logo } from "../icons/icons"
import { MemoryContext } from "../contexts/Memory"
import { Menu } from "./Menu"
import { useModal } from "../hooks/useModal"

export const Header = () => {
  const { isPaused,restartGame, reallyPausedGame, hanldeNewGame } = useContext(MemoryContext)
  const { open, manageModal } = useModal(isPaused)

  const handleMenu = (type) => () => {
    if(type === 1)
      reallyPausedGame({paused: true});
    else 
      reallyPausedGame({paused: false});
    manageModal();
  }


  return (
    <header className="game--header">
        <Logo />
        <section>
            <div>
                <button className="btn btn-primary" onClick={handleMenu(1)}>menu</button>
            </div>
            <div className="desktop">
                <button className="btn btn-primary" onClick={restartGame}>restart</button>
                <button onClick={hanldeNewGame} className="btn btn-secondary">new game </button>
            </div>
        </section>
        {open && <Menu onResume={handleMenu(2)} onRestart={() => {restartGame(); manageModal()}} />}
    </header>
  )
}
