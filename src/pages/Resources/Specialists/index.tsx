import { Segment } from '../../../components/Segment'
import { useMe } from '../../../lib/ctx'

export const Specialists = () => {
  const me = useMe()
  if (!me) {
    return (
      <Segment color="red" title="Unauthorized">
        <p>You have no access to this page</p>
      </Segment>
    )
  }
  return (
    <Segment returnToResources={true} title="Специалисты">
      <div>Специалисты</div>
    </Segment>
  )
}
