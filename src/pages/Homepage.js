import Slideshow from "../components/carousel/Slideshow"
import {motion} from 'framer-motion'
import Slide from "../components/div/Slide";
const Homepage= () =>{
    return (
        <motion.div initial={{opacity:0, }} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.5}}}>
            <Slideshow/>
            <Slide/>
        </motion.div>
    )
}
export default Homepage;