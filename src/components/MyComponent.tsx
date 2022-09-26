import { motion } from "framer-motion"
import { Ball } from "./Ball/Ball";
import { Grid } from "./Grid/Grid";
import { Jauge } from "./Jauge/Jauge";

export const MyComponent = () => {
  return ( 
    <div className="space-y-96">
      <Ball />
      <Grid />
      <Jauge />
    </div>
  )
  
}