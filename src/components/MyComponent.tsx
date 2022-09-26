import { motion, useScroll, Variants } from "framer-motion"
import { useEffect, useState } from "react";
import { Ball } from "./Ball/Ball";
import { Grid } from "./Grid/Grid";
import { Jauge } from "./Jauge/Jauge";
import Nav from "./Nav/Nav";

const ball: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: -200, transition: { duration: 0.5 } }
};

const rest: Variants = {
  open: { opacity: 1, y: -600, transition: { duration: 0.5 } },
  closed: { opacity: 0, y: 0, transition: { duration: 0.5 } }
};

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  

  function buttonClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
    console.log()
  }

  // useEffect(() => {
  //   return scrollYProgress.onChange((latest) => {
  //     if (latest > 0) {
  //       setIsOpen(false);
  //       console.log(x.hasAnimated);
  //     } if (latest = 0) {
  //       setIsOpen(true)
  //     }
  //   })
  // }, [])
  
  return ( 
    <motion.div className="">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => buttonClick()}
      >
        Click
      </motion.button>

      <motion.div
      variants={ball}
      animate={isOpen ? "open" : "closed"}
      className="h-screen">
        <Ball />
      </motion.div>

      <motion.div variants={rest}
      animate={isOpen ? "closed" : "open"}
      className="h-screen">
        <Grid />
        <Jauge />
      {/* <Nav/> */}
      </motion.div>
    </motion.div>
  )
  
}