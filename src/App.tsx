import { Route, Routes } from 'react-router'

import { Layout } from './components/Layout'
import { Main } from './pages/Main'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}
