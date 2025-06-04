import { useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa6";
import { motion} from "motion/react"
import HeroImage from "../assets/HeroImage.png";
import DiscountImage from "../assets/Discount.png";


function HeroSection() {
  const navigate = useNavigate();
  const animationItem = {visible: { opacity: 1, y:0, transition:{ easeIn: "easeIn", type: "spring", stiffness: 50, duration:2}},  hidden: { opacity: 0, y:50 }};
  const animationContainer = {visible: { opacity:1, transition: { when: "beforeChildren", staggerChildren: 0.5}}, hidden: {opacity: 0}};

  const handleShopMenu = () => {
    navigate("/shop");
  };

  return (
    <motion.div variants={animationContainer} initial="hidden" animate="visible" className="bg-[url(/src/assets/background.webp)] bg-cover h-svh bg-center grid grid-cols-1 md:grid-cols-2 items-center text-stone-50 px-8 md:px-16 pt-32 md:pt-0 lg:px-32 relative">      
        <div className="text-center md:text-left relative">        
          <motion.h1 className="text-6xl sm:text-7xl lg:text-8xl mb-8 font-Charm font-bold" variants={animationItem}>Fresh & Tasty Meals</motion.h1>
          <motion.p className="text-2xl sm:text-3xl md:4xl font-Zain mb-8 z-20" variants={animationItem} >Your all-in-one place for your food service needs</motion.p>
          <motion.button  onClick={handleShopMenu} className="py-4 px-8 text-2xl font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-gray-700 hover:cursor-pointer active:text-stone-50 active:bg-lime-800" variants={animationItem} whileHover={{scale: 1.1}} whileTap={{rotate:3}}><FaUtensils className='inline text-lg mr-2'/>Shop Menu</motion.button>                        
        </div>
        <motion.div variants={animationItem} whileInView={{scale:1.05, transition: {type: "easeInOut", duration: 1.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.15}}}>
          <img src={HeroImage} alt="Delicious food" className="w-full h-auto"/>
        </motion.div>
        <motion.div className="absolute top-20 left-20 lg:w-48 md:w-34 w-18 h-auto z-10" variants={animationItem} whileInView={{rotate:12, transition: {type: "easeInOut", duration: 3, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.25}}}>
              <img src={DiscountImage} alt="Discount" className="w-full h-auto"/>
        </motion.div>                            
    </motion.div>
  );
}
export default HeroSection;
