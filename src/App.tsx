import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'
import { Header } from './components/Header'
import './styles/main.css'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<AppRouter />
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
