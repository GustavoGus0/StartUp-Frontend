import { motion } from 'framer-motion'

export const ScaleOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut', type: 'spring' }}
    >
      {children}
    </motion.div>
  )
}
