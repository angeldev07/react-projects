export const BoardScore = ({ score }) => {
  const { x, ties, o } = score
  return (
    <div className='board--score'>
      <div className='board--score__player-x'>
        <span className='board--score__player-x__name'>X (player 1) </span>
        <span className='board--score__player-x__score'> {x} </span>
      </div>
      <div className='board--score__player-tie'>
        <span className='board--score__player-x__name'> ties </span>
        <span className='board--score__player-x__score'> {ties} </span>
      </div>
      <div className='board--score__player-o'>
        <span className='board--score__player-x__name'>O (player 2) </span>
        <span className='board--score__player-x__score'> {o} </span>
      </div>
    </div>
  )
}
