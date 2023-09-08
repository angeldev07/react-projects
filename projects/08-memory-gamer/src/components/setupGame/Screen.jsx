import { useContext, useState } from 'react'
import '../../screen.css'
import { MemoryContext } from '../contexts/Memory'

export const Screen = () => {
    const {startGame} = useContext(MemoryContext)
    const [settings, setSettings] = useState({
        icons: 'number',
        players: 1,
        size: 4
    })

    const handleChange = ({key, value}) => () => {
        setSettings(prev => ({...prev, [key]: value}))
    }


  return (
    <section className='container-screen'>
        <div className='modal'>
            <div>
                <span className='modal-title' >select theme</span>
                <div className='btns-container'>    
                    <button onClick={handleChange({key: "icons", value: "number"})} className={`btn btn-secondary ${settings.icons == "number" ? "active": ""} `}>Numbers</button>
                    <button onClick={handleChange({key: "icons", value: "icon"})} className={`btn btn-secondary ${settings.icons == "icon" ? "active": ""} `}>Icons</button>
                </div>
            </div>
            <div>
                <span className='modal-title' >numbers of players</span>
                <div className='btns-container'>
                    <button onClick={handleChange({key: "players", value: 1})} className={`btn btn-secondary ${settings.players == 1 ? "active": ""} `}>1</button>
                    <button onClick={handleChange({key: "players", value: 2})} className={`btn btn-secondary ${settings.players == 2 ? "active": ""} `}>2</button>
                    <button onClick={handleChange({key: "players", value: 3})} className={`btn btn-secondary ${settings.players == 3 ? "active": ""} `}>3</button>
                    <button onClick={handleChange({key: "players", value: 4})} className={`btn btn-secondary ${settings.players == 4 ? "active": ""} `}>4</button>
                </div>
            </div>
            <div>
                <span className='modal-title' >Grid size</span>
                <div className='btns-container'>
                    <button onClick={handleChange({key: "size", value: 4})} className={`btn btn-secondary ${settings.size == 4 ? "active": ""} `}>4</button>
                    <button onClick={handleChange({key: "size", value: 6})} className={`btn btn-secondary ${settings.size == 6 ? "active": ""} `}>6</button>
                </div>
            </div>
            <button onClick={startGame} className='btn btn-primary'>Start game</button>
        </div>
    </section>
  )
}
