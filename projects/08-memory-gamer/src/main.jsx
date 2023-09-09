
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { MemoryProvider } from './components/contexts/Memory.jsx'

import './app.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <MemoryProvider>
    <App />
  </MemoryProvider>
)
