import { Link } from 'react-router'

import { Segment } from '../../components/Segment'
import { projects_data } from '../../lib/queryPlaceholder'
import { translateResources } from '../../utils/translateResources'

import css from './index.module.scss'

export const Projects = () => {
  return (
    <Segment title="Проекты">
      <ul className={css.projects}>
        {projects_data.map((el, i) => (
          <li key={i} className={css.listItem}>
            <Link className={css.reactLink} to="/">
              <div className={css.project}>
                <h3 className={css.header}>{el.title}</h3>
                <p className={css.description}>{el.description}</p>
                {!!el.searchesFor && (
                  <p className={css.inSearchOf}>
                    В поисках:
                    {translateResources(el.searchesFor).map((el) => (
                      <p className={css.category} key={el}>
                        {el}
                      </p>
                    ))}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Segment>
  )
}
