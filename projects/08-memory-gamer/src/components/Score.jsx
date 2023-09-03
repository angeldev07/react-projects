
export const Score = ({time, moves}) => {
  return (
   <footer className="score">
        <section className="score-indicador">
            <h4>Time</h4>
            <strong>1:00</strong> 
        </section>
        <section className="score-indicador">
            <h4>Moves</h4>
            <strong>{moves}</strong> 
        </section>
   </footer>
  )
}
