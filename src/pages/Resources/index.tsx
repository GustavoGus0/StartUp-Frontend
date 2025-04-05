import { motion } from 'framer-motion'
import { Link } from 'react-router'

import { Segment } from '../../components/Segment'
import { animateSlideDown } from '../../lib/animations'
import { useMe } from '../../lib/ctx'
import { resourcesLinks } from '../../lib/links'

import css from './index.module.scss'

export const Resources = () => {
  const me = useMe()
  if (!me) {
    return (
      <Segment color="red" title="Unauthorized">
        <p>You have no access to this page</p>
      </Segment>
    )
  }
  const { initial, animate, transition } = animateSlideDown()
  return (
    <Segment title="Ресурсы">
      <ul className={css.list}>
        {resourcesLinks.map((el, i) => (
          <motion.li
            className={css.listItem}
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: i * 0.05 }}
            key={el.textInLink}
          >
            <Link className={css.reactLink} to={el.to}>
              <div className={css.icon}>{el.icon}</div>
              <Segment title={el.textInLink} size={2}>
                <p className={css.description}>{el.description}</p>
              </Segment>
            </Link>
          </motion.li>
        ))}
      </ul>
    </Segment>
  )
}
