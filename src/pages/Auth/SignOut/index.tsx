import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Segment } from '../../../components/Segment'
import { useAppContext } from '../../../lib/ctx'
import { getSignInRoute } from '../../../lib/routes'

export const SignOut = () => {
  const navigate = useNavigate()
  const { setMe } = useAppContext()
  useEffect(() => {
    setMe?.(undefined)
    navigate(getSignInRoute())
  }, [])
  return (
    <Segment title="Выход">
      <p>В процессе...</p>
    </Segment>
  )
}
