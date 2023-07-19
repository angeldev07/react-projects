export const BoardHeader = ({ currentPlayer, onResetGame }) => {
  return (
    <div className='board--header'>
      <img
        src='assets/images/logo.svg'
        alt='logo x o'
        className='board--header__back'
      />

      <div className='board--header__player'>
        <img
          src={`assets/images/icon-${currentPlayer}.svg`}
          alt={`icono del jugador ${currentPlayer}`}
        />
        <span>turn</span>
      </div>
      <button className='board--header__reset' onClick={onResetGame}>
        <img
          src='assets/images/icon-restart.svg'
          alt='icon de reset game '
        />
      </button>
    </div>
  )
}
