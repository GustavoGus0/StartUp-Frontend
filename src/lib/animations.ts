export const animateSlideToRight = () => ({
  initial: {
    x: -30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.2,
  },
})

export const animateSlideDown = () => ({
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.2,
  },
})
