import { AnimatePresence, motion } from 'framer-motion'
import { forwardRef } from 'react'

import css from './index.module.scss'

type animationTypeType = 'scale-in' | 'drop-vertical'

const defineAnimationVariants = (animationType: animationTypeType) => {
  return animationType === 'drop-vertical'
    ? {
        initial: { y: -30, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 30, opacity: 0 },
      }
    : {
        initial: { scale: 1.25, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.75, opacity: 0 },
      }
}

export const HoverCard = forwardRef<
  HTMLDivElement,
  {
    show: boolean
    title?: string
    animationType: animationTypeType
    children: React.ReactNode
  }
>(({ show, title, animationType, children }, ref) => {
  const { initial, animate, exit } = defineAnimationVariants(animationType)
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{ type: 'spring', duration: 0.35 }}
          className={css.hoverBox}
        >
          {title && <h3>{title}</h3>}
          <div className={css.content}>{children}</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
})

HoverCard.displayName = 'HoverCard'
