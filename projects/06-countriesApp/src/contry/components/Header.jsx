import { Moon } from "../../const/icons"

export const Header = () => {
    return (
        <header>
            <h1>Where in the world?</h1>
            <button className="capitalize">
                <div className="w-5 h-5"> 
                    <Moon />

                </div>
                dark mode 
            </button>
        </header>
    )
}