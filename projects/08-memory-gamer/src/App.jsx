import { Board } from './components/Board'
import './app.css'
import { Header } from './components/Header'
export const App = () => {
  return (
    <main className='game'>
        <Header />
        <Board />
    </main>
  )
}
