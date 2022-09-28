import { motion, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react";


export const Ball = () => {
 
  return ( 
    <div className="">
      <motion.div   className="grid place-items-center h-80 w-80 bg-green rounded-[50%]"
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <motion.div className="h-48 w-48 bg-red-600 rounded-[50%] "
          />
      </motion.div>
    </div>
  )
  
}