import { Segment } from '../../components/Segment'
import { useMe } from '../../lib/ctx'
import { my_chats_data } from '../../lib/queryPlaceholder'
import { defineCyrRole } from '../../utils/defineCyrRole'

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
      <div className={css.chats}>
        <ul className={css.list}>
          {my_chats_data.map((el) => (
            <li key={el.id} className={css.listItem}>
              <div className={css.textContent}>
                <h4 className={css.fullName}>
                  {el.user2.surname} {el.user2.name}
                </h4>
                <p className={css.role}>{defineCyrRole(el.user2.role, { firstUpperCase: true })}</p>
              </div>
              <div className={css.content}>{el.user2.lastMessage}</div>
            </li>
          ))}
        </ul>
      </div>
    </Segment>
  )
}
