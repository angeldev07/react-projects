

export const Menu = ({onRestart, onResume}) => {
  return (
    <div className="modal-container">
        <section className="modal">
            <button className="btn btn-primary" onClick={onRestart}>restart</button>
            <button className="btn btn-secondary">new game</button>
            <button className="btn btn-secondary" onClick={onResume}>resume game</button>
        </section>
    </div>
  )
}
