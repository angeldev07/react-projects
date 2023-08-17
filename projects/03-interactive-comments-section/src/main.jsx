import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { UserProvider } from './contexts/user'
import { CommentProvider } from './contexts/CommentsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserProvider> 
			<CommentProvider> 
				<App />
			</CommentProvider>
		</UserProvider>
	</React.StrictMode>
)
