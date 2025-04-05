import { Route, Routes, useLocation } from 'react-router'

import { Layout } from './components/Layout'
import {
  getChatsPageRoute,
  getEquipmentPageRoute,
  getInvestorsPageRoute,
  getLandsPageRoute,
  getProfilePageRoute,
  getProjectsPageRoute,
  getResourcesPageRoute,
  getRoomsPageRoute,
  getSettingsPageRoute,
  getSpecialistsPageRoute,
} from './lib/routes'
import { Chats } from './pages/Chats'
import { Profile } from './pages/Main'
import { Projects } from './pages/Projects'
import { Resources } from './pages/Resources'
import { Equipment } from './pages/Resources/Equipment'
import { Investors } from './pages/Resources/Investors'
import { Lands } from './pages/Resources/Lands'
import { Rooms } from './pages/Resources/Rooms'
import { Specialists } from './pages/Resources/Specialists'
import { Settings } from './pages/Settings'

export default function App() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path={getProjectsPageRoute()} element={<Projects />} />
        <Route path={getProfilePageRoute()} element={<Profile />} />
        <Route path={getChatsPageRoute()} element={<Chats />} />
        <Route path={getResourcesPageRoute()} element={<Resources />} />
        <Route path={getSpecialistsPageRoute()} element={<Specialists />} />
        <Route path={getInvestorsPageRoute()} element={<Investors />} />
        <Route path={getEquipmentPageRoute()} element={<Equipment />} />
        <Route path={getRoomsPageRoute()} element={<Rooms />} />
        <Route path={getLandsPageRoute()} element={<Lands />} />
        <Route path={getSettingsPageRoute()} element={<Settings />} />
      </Route>
    </Routes>
  )
}
