import { Route, Routes } from 'react-router'

import { Layout } from './components/Layout'
import {
  getChatsPageRoute,
  getEquipmentPageRoute,
  getInvestorsPageRoute,
  getLandsPageRoute,
  getProfilePageRoute,
  getProjectsPageRoute,
  getRoomsPageRoute,
  getSettingsPageRoute,
  getSpecialistsPageRoute,
} from './lib/routes'
import { Chats } from './pages/Chats'
import { Equipment } from './pages/Equipment'
import { Investors } from './pages/Investors'
import { Lands } from './pages/Lands'
import { Profile } from './pages/Main'
import { Projects } from './pages/Projects'
import { Rooms } from './pages/Rooms'
import { Settings } from './pages/Settings'
import { Specialists } from './pages/Specialists'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={getProjectsPageRoute()} element={<Projects />} />
        <Route path={getProfilePageRoute()} element={<Profile />} />
        <Route path={getChatsPageRoute()} element={<Chats />} />
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
