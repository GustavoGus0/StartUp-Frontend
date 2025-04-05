import { Segment } from '../../components/Segment'
import { useMe } from '../../lib/ctx'

export const Notifications = () => {
  const me = useMe()
  if (!me) {
    return (
      <Segment color="red" title="Unauthorized">
        <p>You have no access to this page</p>
      </Segment>
    )
  }
  return (
    <Segment title="Уведомления">
      <div>Уведомления</div>
    </Segment>
  )
}
