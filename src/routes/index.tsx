import { Route, Routes } from 'react-router-dom'
import { LayoutDefault } from '../components/layout/Default'
import { App } from '../pages/app/App'
import { Home } from '../pages/Home'
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  )
}
