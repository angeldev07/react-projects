import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Marvel } from '../heroes/pages/Marvel'
import { DC } from '../heroes/pages/DC'
import { HeroesApp } from '../HeroesApp'
import { Login } from '../auth/pages/Login'
import { Hero } from '../heroes/pages/Hero'
import { Search } from '../heroes/pages/Search'

const router = createBrowserRouter([
	{
		path: '',
		element: <HeroesApp />,
		children: [
			{
				path: 'marvel',
				element: <Marvel />,
			},
			{
				path: 'dc',
				element: <DC />,
			},
			{
				path: 'hero/:heroId',
				element: <Hero />,
			},
			{
				path: 'search',
				element: <Search/>,
			},
			{
				path: '',
				element: <Navigate to="/marvel" />,
			},
		],
	},
	{
		path: 'auth',
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: '',
				element: <Navigate to="/auth/login" />,
			}
		]
	}
])

export const AppRouter = () => {
	return <RouterProvider router={router}></RouterProvider>
}
