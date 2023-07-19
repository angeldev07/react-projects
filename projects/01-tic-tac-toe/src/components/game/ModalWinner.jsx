export const ModalWinner = ({ winner, onResetGame, player }) => {
  const className = player === 'x' ? 'o--win' : 'x--win'
  return (
    <div className='modal--container'>
      <div className='modal--content'>
        <h2> {winner === 'tie' ? `IT'S A TIE` : 'PLAYER WIN IS '} </h2>

        {winner !== 'tie' && (
          <div className='modal--content__icons'>
            <div className='modal--content__icons--win'>
              <img src={`/public/assets/images/icon-${winner}.svg`} alt='' />
            </div>
            <p className={className}> TAKES THE ROUND </p>
          </div>
        )}

        <div className='buttons-container'>
          <button className='btn btn-quit'>quit</button>
          <button className='btn btn-next' onClick={onResetGame}>
            next round
          </button>
        </div>
      </div>
    </div>
  )
}
