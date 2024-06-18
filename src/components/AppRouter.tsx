import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { RoutesArr } from '../router/routes'

export default function AppRouter() {
	return (
		<Routes>
			{RoutesArr.map(route => (
				<Route key={route.path} path={route.path} element={<route.element />} />
			))}
			<Route path='*' element={<Home />} />
		</Routes>
	)
}
