import { Segment } from '../../../components/Segment'
import { useMe } from '../../../lib/ctx'

export const SignUp = () => {
  const me = useMe()

  if (me) {
    return (
      <Segment color="red" title={'Error'}>
        <p>You have no access to this page</p>
      </Segment>
    )
  }

  return (
    <Segment title="Регистрация">
      <p>Регистрация</p>
    </Segment>
  )
}
