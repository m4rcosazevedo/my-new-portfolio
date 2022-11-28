import { motion } from 'framer-motion'

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ scale: [1,2,2,3,1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1] }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-25 h-[450px] w-[450px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-25 h-[700px] w-[700px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[900px] w-[900px] mt-52" />
    </motion.div>
  )
}
