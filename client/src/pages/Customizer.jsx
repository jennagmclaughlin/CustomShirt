import React, { useState, useEffect } from 'react';
// import animations
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../config/motion";
// import valtio states
import { useSnapshot } from "valtio";
import state from "../store";
// import config
import config from "../config/config";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
// import icons
import { download } from "../assets";
// import components
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {/* if not on home page, load customizer */}
      {!snap.intro && (
        <>
        {/* Tabs */}
          <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation("left")}>
            <div className="min-h-screen flex items-center">
              <div className="editortabs-container tabs px-4 flex flex-col gap-y-4">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Back button */}
          <motion.div className="absolute top-4 right-4 z-10" {...fadeAnimation}>
            <CustomButton
              type="filled"
              title="Go back"
              handleClick={() => state.intro = true}
              customStyles="px-6 py-2 font-bold text-xs"
            />
          </motion.div>

          {/* Toggles */}
          <motion.div className="filtertabs-container flex gap-x-4 absolute bottom-4 left-[50%] -ml-8" {...slideAnimation("up")}>
            {FilterTabs.map((tab) => (
              <Tab 
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer