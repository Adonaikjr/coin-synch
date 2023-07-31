import { ContainerHome } from './styled'
import { motion, AnimatePresence } from 'framer-motion'
export function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContainerHome></ContainerHome>
      </motion.div>
    </AnimatePresence>
  )
}
