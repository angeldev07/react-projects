import { useState } from 'react'

import iconX from 'assets/images/icon-x.svg'
import iconO from 'assets/images/icon-o.svg'

import iconXDefault from 'assets/images/icon-x-default.svg'
import iconODefault from 'assets/images/icon-o-default.svg'

import './board.css'

export const Board = () => {
  const [player, setPlayer] = useState('x')

  const handlePlayer = (playerIcon) => {
    setPlayer(playerIcon)
  }

  const picked = player === 'x' ? 'x__picked' : 'o__picked'

  return (
    <>
      <section className='content-icons'>
        <img src={iconX} alt='icono del jugador x' className='icons' />
        <img src={iconO} alt='icono del jugador o' className='icons' />
      </section>

      <section>
        <div className='board'>
          <h3>PICK PLAYER 1S MARK</h3>
          <div className={`board__container ${picked}`}>
            <button onClick={() => handlePlayer('x')}>
              <img src={iconXDefault} />
            </button>
            <button onClick={() => handlePlayer('o')}>
              <img src={iconODefault} />
            </button>
          </div>
          <span>REMEMBER : X GOES FIRST</span>
        </div>
      </section>
    </>
  )
}
