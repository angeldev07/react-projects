import { createBrowserRouter } from 'react-router-dom'
import { CountryApp } from '../contry/CountryApp'
import { CountryDetail } from '../contry/pages/CountryDetail'


export const router = createBrowserRouter([
	{
		path: '',
		element: <CountryApp />,
	},
	{
		path: 'country/:nameCountry',
		element: <CountryDetail />,
	},
	{
		path: '*',
		element: <h1> 404</h1>,
	},
])
