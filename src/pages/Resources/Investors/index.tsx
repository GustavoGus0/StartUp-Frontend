import { Segment } from '../../../components/Segment'
import { useMe } from '../../../lib/ctx'

export const Investors = () => {
  const me = useMe()
  if (!me) {
    return (
      <Segment color="red" title="Unauthorized">
        <p>You have no access to this page</p>
      </Segment>
    )
  }
  return (
    <Segment returnToResources={true} title="Инвесторы">
      <div>Инвесторы</div>
    </Segment>
  )
}
