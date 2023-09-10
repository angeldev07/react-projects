import { useContext } from 'react'
import '../../screen.css'
import { MemoryContext } from '../contexts/Memory'
import { GRID_SIZE, THEME_GAME } from '../../const/const'

export const Screen = () => {
    const {theme, numOfPlayers, size, startGame, handleSelectConfig} = useContext(MemoryContext)

  return (
    <section className='container-screen'>
        <div className='modal'>
            <div>
                <span className='modal-title' >select theme</span>
                <div className='btns-container'>    
                    {
                        Object.entries(THEME_GAME).map(([key, value]) => (
                            <button key={key} onClick={handleSelectConfig({key: "theme", value})} className={`btn btn-secondary ${theme == value ? "active": ""} `}>{value}</button>
                        ))
                    }
                </div>
            </div>
            <div>
                <span className='modal-title' >numbers of players</span>
                <div className='btns-container'>
                    {
                        [1,2,3,4].map(btn => (
                            <button key={btn} onClick={handleSelectConfig({key: "numOfPlayers", value: btn})} className={`btn btn-secondary ${numOfPlayers == btn ? "active": ""} `}>{btn}</button>
                        ))
                    }
                </div>
            </div>
            <div>
                <span className='modal-title' >Grid size</span>
                <div className='btns-container'>
                    {
                        Object.entries(GRID_SIZE).map(([key, value]) => (
                            <button key={key} onClick={handleSelectConfig({key: "grid_size", value})} className={`btn btn-secondary ${size == value ? "active": ""} `}>{value}</button>
                        ))
                    }
                </div>
            </div>
            <button onClick={startGame} className='btn btn-primary'>Start game</button>
        </div>
    </section>
  )
}
