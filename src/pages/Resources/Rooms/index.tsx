import { Segment } from '../../../components/Segment'
import { useMe } from '../../../lib/ctx'

export const Rooms = () => {
  const me = useMe()
  if (!me) {
    return (
      <Segment color="red" title="Unauthorized">
        <p>You have no access to this page</p>
      </Segment>
    )
  }
  return (
    <Segment returnToResources={true} title="Помещения и территории">
      <div>Помещения и территории</div>
    </Segment>
  )
}
