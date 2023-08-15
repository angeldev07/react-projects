import { createBrowserRouter } from 'react-router-dom'
import { CountryApp } from '../contry/CountryApp'


export const router = createBrowserRouter([
	{
		path: '',
		element: <CountryApp />,
	},
	{
		path: 'country/:codeCountry',
		element: <h1> Pagina de detalle</h1>,
	},
	{
		path: '*',
		element: <h1> 404</h1>,
	},
])
