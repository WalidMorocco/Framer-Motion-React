import { motion } from "framer-motion"
import { useRef } from 'react';

export const Ball = () => {
  const constraintsRef = useRef(null);

  return ( 
    <div className="h-">
      <motion.div ref={constraintsRef} className=" grid place-items-center h-80 w-80 bg-red-400 rounded-[50%] inner-shadow-2xl">
        <motion.div className="h-48 w-48 bg-red-600 rounded-[50%] shadow-2xl"
          drag dragConstraints={constraintsRef}
        />
      </motion.div>
    </div>
  )
  
}