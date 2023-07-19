export const Cell = ({ playerIcon, onMarkCell, index, turn }) => {
  const projectionClass = playerIcon.turn ? 'marked' : 'projection';

  return (
    <div onClick={onMarkCell} className={`cell ${projectionClass}`}>
      <span>
        {playerIcon.turn ? (
          <img
            src={`assets/images/icon-${playerIcon.turn}.svg`}
            alt='icon del player'
            width={70}
            height={70}
          />
        ) : (
          <img
            src={`assets/images/icon-${turn}-outline.svg`}
            alt='icon del player'
            width={70}
            height={70}
          />
        )}
      </span>
    </div>
  )
}
