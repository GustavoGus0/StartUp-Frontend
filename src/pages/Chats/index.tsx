import { Segment } from '../../components/Segment'
import { useMe } from '../../lib/ctx'
import { chats_data } from '../../lib/queryPlaceholder'

import css from './index.module.scss'

export const Chats = () => {
  const me = useMe()
  if (!me) {
    return (
      <Segment color="red" title="Unauthorized">
        <p>You have no access to this page</p>
      </Segment>
    )
  }
  return (
    <Segment title="Чаты">
      <div className={css.chats}></div>
    </Segment>
  )
}
