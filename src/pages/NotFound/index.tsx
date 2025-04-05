import { Link } from 'react-router'

import { icons } from '../../assets/icons'
import { Segment } from '../../components/Segment'
import { getProjectsPageRoute } from '../../lib/routes'

import css from './index.module.scss'

export const NotFound = () => {
  return (
    <Segment title="Упс..">
      <div>
        <p>Такой страницы не существует</p>
      </div>
      <Link to={getProjectsPageRoute()} className={css.link}>
        <div className={css.icon}>{icons.arrowBack()}</div>
        <p>На главную</p>
      </Link>
    </Segment>
  )
}
