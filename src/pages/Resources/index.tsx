import { motion } from 'framer-motion'
import { Link } from 'react-router'

import { Segment } from '../../components/Segment'
import { animateSlideDown } from '../../lib/animations'
import { resourcesLinks } from '../../lib/links'

import css from './index.module.scss'

export const Resources = () => {
  const { initial, animate, transition } = animateSlideDown()
  return (
    <Segment title="Resources">
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
              {el.textInLink}
            </Link>
          </motion.li>
        ))}
      </ul>
    </Segment>
  )
}
