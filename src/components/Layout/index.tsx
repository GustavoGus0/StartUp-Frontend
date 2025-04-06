import cn from 'classnames'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router'

import { useOnceAnimation } from '../../hooks/useOnceAnimation'
import { animateSlideDown, animateSlideToRight } from '../../lib/animations'
import { useMe } from '../../lib/ctx'
import { links } from '../../lib/links'
import { ILink } from '../../lib/links'
import { IMe } from '../../types'
import { ScaleOut } from '../Animation'

import css from './index.module.scss'

export const Layout = () => {
  const { initial, animate } = animateSlideToRight()
  const { needAnimation, setElementAnimated, handleReloadPage, removeListener } =
    useOnceAnimation('header-animated')

  useEffect(() => {
    setElementAnimated()

    handleReloadPage()

    return () => removeListener
  }, [])

  return (
    <div className={css.mainContainer}>
      <header className={css.header}>
        <motion.h1
          initial={needAnimation ? initial : {}}
          animate={animate}
          className={css.headerText}
        >
          TestName
        </motion.h1>
        <nav className={css.navbar}>
          <Menu />
        </nav>
      </header>
      <ScaleOut>
        <main className={css.main}>
          <div className={css.content}>
            <Outlet />
          </div>
        </main>
      </ScaleOut>
    </div>
  )
}

const Menu = () => {
  const location = useLocation()
  const me = useMe()

  const { needAnimation, setElementAnimated, handleReloadPage, removeListener } =
    useOnceAnimation('menu-animated')

  useEffect(() => {
    setElementAnimated()

    handleReloadPage()

    return () => removeListener
  }, [])

  const filterLinksIfAuth = <T extends ILink>(arr: T[], me?: IMe) => {
    if (me) {
      return arr.filter((el) => el.forAuth)
    } else {
      return arr.filter((el) => !el.forAuth || el.canSeeNotAuth)
    }
  }

  const { initial, animate, transition } = animateSlideDown()
  return (
    <ul className={css.menuList}>
      {filterLinksIfAuth(links, me).map((el, i) => (
        <motion.li
          initial={needAnimation ? initial : {}}
          animate={animate}
          transition={{ delay: i * 0.05, ease: 'easeOut', ...transition }}
          key={el.textInLink}
          className={css.listItem}
        >
          <Link
            className={cn({
              [css.link]: true,
              [css.active]: location.pathname === el.to && el.color !== 'red',
              [css.redLink]: el.color === 'red',
            })}
            to={el.to}
          >
            <div className={css.icon}>{el.icon}</div>
            <p>{el.textInLink}</p>
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}
