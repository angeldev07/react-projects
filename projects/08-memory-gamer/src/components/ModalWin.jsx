import { useContext } from "react"
import { MemoryContext } from "./contexts/Memory"

export const ModalWin = ({close}) => {
  const { moves, times, restartGame} = useContext(MemoryContext)
  const handleClose = () => {
    close()
    restartGame()
  }
  return (
    <div className='modal-container'>
      <article className='modal'>
          <section className="modal-header">
            <h2>You did it!</h2>
            <p>Game over! Here&apos; how you got on</p>
          </section>
          <section className="stats-container">
              <div className="stats">
                <span>time elapsed</span>
                <span>{times.minutes}:{times.seconds < 10  ? `0${times.seconds}` : times.seconds} </span>
              </div>
              <div className="stats">
                <span>moves taken</span>
                <span>{moves} moves</span>
              </div>
          </section>
          <section className="btns-container">
            <button className="btn btn-primary" onClick={handleClose}>restart</button>
            <button className="btn btn-secondary">setup new game</button>
          </section>
      </article>
    </div>
  )
}
