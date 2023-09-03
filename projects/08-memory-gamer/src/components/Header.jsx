
import { useContext } from "react"
import { Logo } from "./icons/icons"
import { MemoryContext } from "./contexts/Memory"
import { Menu } from "./Menu"
import { useModal } from "./hooks/useModal"

export const Header = () => {
  const { restartGame, handlePauseGame } = useContext(MemoryContext)
  const { open, manageModal} = useModal()

  const handleMenu = (type) => () => {
    if(type === 1)
      handlePauseGame({block: true});
    else 
      handlePauseGame({block: false});
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
                <button className="btn btn-secondary">new game </button>
            </div>
        </section>
        {open && <Menu onResume={handleMenu(2)} onRestart={() => {restartGame(); manageModal()}} />}
    </header>
  )
}
