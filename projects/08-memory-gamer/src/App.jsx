import { Board } from './components/Board'
import './app.css'
import { Header } from './components/Header'
import { MemoryProvider } from './components/contexts/Memory'


export const App = () => {
  return (
    <main className='game'>
      <MemoryProvider>
        <Header />
        <Board />
      </MemoryProvider>
    </main>
  )
}
