import { motion, Variants } from "framer-motion"
import { useEffect, useState } from "react";
import { Ball } from "./Ball/Ball";
import { Grid } from "./Grid/Grid";

const ball: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 100}
  },
  closed: { opacity: 0, y: -200, transition: { duration: 0.5 } }
};

const rest: Variants = {
  open: { opacity: 1, y: -200, transition: { duration: 1 } },
  closed: { opacity: 0, y: 0, transition: { duration: 0.5 } }
};

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // console.log('test', window.scrollY);
      setScrollYPosition(window.scrollY);
      
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function buttonClick() {
    document.body.scrollTop = 5; // For Safari
    document.documentElement.scrollTop = 5; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    console.log('test', scrollYPosition)
    if (scrollYPosition > 0) {
      setIsOpen(false);
    } if (scrollYPosition === 0) {
      setIsOpen(true);
    }
  },[scrollYPosition])
  
  return ( 
    <motion.div className="">

      <motion.div
      variants={ball}
      animate={isOpen ? "open" : "closed"}
      className="h-screen grid place-items-center">
        <div>
          <Ball />
          <div className="z-20 border border-black ">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => buttonClick()}
            >
              Click
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div variants={rest}
      animate={isOpen ? "closed" : "open"}
      className="h-screen">
        <Grid />
      </motion.div>
    </motion.div>
  )
  
}