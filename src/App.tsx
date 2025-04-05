import { Route, Routes, useLocation } from 'react-router'

import { Layout } from './components/Layout'
import { AppContextProvider } from './lib/ctx'
import {
  getChatsPageRoute,
  getEquipmentPageRoute,
  getInvestorsPageRoute,
  getNotificationsPageRoute,
  getProfilePageRoute,
  getProjectsPageRoute,
  getResourcesPageRoute,
  getRoomsPageRoute,
  getSettingsPageRoute,
  getSignInRoute,
  getSignOutRoute,
  getSignUpRoute,
  getSpecialistsPageRoute,
} from './lib/routes'
import { SignIn } from './pages/Auth/SignIn'
import { SignOut } from './pages/Auth/SignOut'
import { SignUp } from './pages/Auth/SignUp'
import { Chats } from './pages/Chats'
import { Profile } from './pages/Main'
import { NotFound } from './pages/NotFound'
import { Notifications } from './pages/Notifications'
import { Projects } from './pages/Projects'
import { Resources } from './pages/Resources'
import { Equipment } from './pages/Resources/Equipment'
import { Investors } from './pages/Resources/Investors'
import { Rooms } from './pages/Resources/Rooms'
import { Specialists } from './pages/Resources/Specialists'
import { Settings } from './pages/Settings'

export default function App() {
  const location = useLocation()

  return (
    <AppContextProvider>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path={getSignInRoute()} element={<SignIn />} />
          <Route path={getSignUpRoute()} element={<SignUp />} />
          <Route path={getProjectsPageRoute()} element={<Projects />} />
          <Route path={getProfilePageRoute()} element={<Profile />} />
          <Route path={getNotificationsPageRoute()} element={<Notifications />} />
          <Route path={getChatsPageRoute()} element={<Chats />} />
          <Route path={getResourcesPageRoute()} element={<Resources />} />
          <Route path={getSpecialistsPageRoute()} element={<Specialists />} />
          <Route path={getInvestorsPageRoute()} element={<Investors />} />
          <Route path={getEquipmentPageRoute()} element={<Equipment />} />
          <Route path={getRoomsPageRoute()} element={<Rooms />} />
          <Route path={getSettingsPageRoute()} element={<Settings />} />
          <Route path={getSignOutRoute()} element={<SignOut />} />
          <Route path={'*'} element={<NotFound />} />
        </Route>
      </Routes>
    </AppContextProvider>
  )
}
