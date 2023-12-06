// import animations
import { motion, AnimatePresence } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../config/motion";
// import valtio states
import { useSnapshot } from "valtio";
import state from "../store";
// import CustomButton
import { CustomButton } from "../components";
// import images
import ThreeJSLogo from "/threejs.png";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {/* if home page = true */}
        {snap.intro && (
            <motion.section className="home" {...slideAnimation("left")}>
                {/* header */}
                <motion.header {...slideAnimation("down")}>
                    <img src={ThreeJSLogo} alt="Logo" className="w-8 aspect-square object-contain" />
                </motion.header>
                {/* home page content */}
                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className="text-5xl xl:text-7xl uppercase font-extrabold">
                            Your style, <br className="hidden xl:block" /> your statement.
                        </h1>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-4" {...headContentAnimation}>
                        <p className="max-w-[75ch] mt-6 text-gray-500">Dive into a world of limitless possibilities as you design your own shirts with our easy-to-use customization tools. From bold graphics to personal mottos, craft a wardrobe that speaks uniquely to you. Unleash your creativity, wear your imagination, and let every stitch tell your story.</p>
                        {/* navigate to customizer */}
                        <CustomButton 
                            type="filled"
                            title="Begin"
                            handleClick={() => state.intro = false}
                            customStyles="px-6 py-2 font-bold text-md mt-2"
                        />
                    </motion.div>
                    </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home