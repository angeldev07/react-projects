import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import TodoProvider from './contexts/todos'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<TodoProvider>
		<App />
	</TodoProvider>
)
