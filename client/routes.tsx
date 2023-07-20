import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Create from './components/Create'
import Homepage from './components/Homepage'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/flashcards" element={<Create />} />
  </Route>
)

export const router = createBrowserRouter(routes)
