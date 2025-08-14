import React from "react";
import { motion, scale } from "motion/react";
const App = () => {
  return (
    <div>
      <motion.div
        className="box"
        // initial={{
        //   x: 20,
        //   y: 20,
        //   scale: 0.8,
        // }}
        animate={{
          x: [20, 100, 200, 100, 20], //alternative of initial attribute is using an array here instead of direct values
          y: [20, 100, 20, 100, 20],
          rotate: [0, 360, -360, 0, 360],

          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "anticipate",
          },
        }}
        whileHover={{ background: "#fb542b" }}
        whileTap={{ scale: 1.5 }}
        whileDrag={{ background: "#01a58ac2" }}
        drag
        dragConstraints={{
          left: 0,
          top: 0,
          right: 1000,
          bottom: 500,
        }}
      >
        <h1>R</h1>
      </motion.div>
    </div>
  );
};

export default App;
