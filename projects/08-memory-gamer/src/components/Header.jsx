import { Logo } from "./icons/icons"

export const Header = () => {
  return (
    <header className="game--header">
        <Logo />
        <section>
            <div>
                <button className="btn btn-primary">menu</button>
            </div>
            <div className="desktop">
                <button className="btn btn-primary">restart</button>
                <button className="btn btn-secondary">new game </button>
            </div>
        </section>
    </header>
  )
}
