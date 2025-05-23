import { useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa6";
import { motion } from "motion/react"
import { delay } from "motion";



function HeroSection() {
  const navigate = useNavigate();

  const handleShopMenu = () => {
    navigate("/shop");
  };

  return (
    <div className="bg-[url(/src/assets/background.webp)] bg-cover h-svh bg-center flex flex-col justify-center items-start text-stone-50 px-8 md:px-32 lg:px-64 relative">
      <motion.h1 className="text-6xl sm:text-7xl lg:text-8xl mb-8 font-Charm font-bold" initial={{ transform: "translateY(50px)", opacity:0 }} animate={{ transform: "translateY(0px)", opacity:1}} transition={{type: "ease-in", duration:1.5}}>Fresh & Tasty Meals</motion.h1>
      <motion.p className="text-2xl sm:text-3xl md:4xl font-Zain mb-8 z-20" initial={{ transform: "translateY(50px)", opacity:0}} animate={{ transform: "translateY(0px)", opacity:1}} transition={{type: "ease-in", duration:1.5, delay:0.5}}>Your all-in-one place for your food service needs</motion.p>
      <motion.button  onClick={handleShopMenu} className="py-4 px-8 text-2xl font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-gray-700 hover:cursor-pointer active:text-stone-50 active:bg-lime-800" initial={{ transform: "translateY(50px)", opacity:0}} animate={{ transform: "translateY(0px)", opacity:1}} transition={{type: "ease-in", duration:1.5, delay:1}}><FaUtensils className='inline text-lg mr-2'/>Shop Menu</motion.button>      
    </div>
  );
}
export default HeroSection;
