import { motion, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react";


export const Ball = () => {
  const scrollRef = useRef(null)
  const { scrollY } = useScroll({
    container: scrollRef
  });
  const [hidden, setHidden] = useState(false);
  
  // function update() {
  //   if (scrollY?.current < scrollY?.prev) {
  //     setHidden(false);
  //   } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
  //     setHidden(true);
  //   }
  // }

  useEffect(() => {
    console.log(scrollY);
  },[scrollY]);

  return ( 
    <div className="grid place-items-center h-screen ">
      <motion.div  ref={scrollRef} className=" grid place-items-center h-80 w-80 bg-red-400 rounded-[50%]"
        // variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <motion.div className="h-48 w-48 bg-red-600 rounded-[50%] "
          />
      </motion.div>
    </div>
  )
  
}