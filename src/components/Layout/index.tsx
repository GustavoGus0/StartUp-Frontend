import cn from 'classnames'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router'

import { useOnceAnimation } from '../../hooks/useOnceAnimation'
import { animateSlideToRight } from '../../lib/animations'
import { links } from '../../lib/links'
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
  }, [needAnimation])

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

  const { needAnimation, setElementAnimated, handleReloadPage, removeListener } =
    useOnceAnimation('menu-animated')

  useEffect(() => {
    setElementAnimated()

    handleReloadPage()

    return () => removeListener
  }, [])

  const { initial, animate, transition } = animateSlideToRight()
  return (
    <ul className={css.menuList}>
      {links.map((el, i) => (
        <motion.li
          initial={needAnimation ? initial : {}}
          animate={animate}
          transition={{ delay: i * 0.05, ease: 'easeOut', ...transition }}
          key={el.textInLink}
          className={css.listItem}
        >
          <Link
            className={cn({ [css.link]: true, [css.active]: location.pathname === el.to })}
            to={el.to}
          >
            {el.textInLink}
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}
