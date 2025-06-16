import {motion} from 'framer-motion';
import tomatoShapes from '../assets/tomato-shapes.png';
import spicy from '../assets/spicy.png';
import Percent from '../assets/50percent-off.png';

function Banner({offerDiscount, productTitle, productPrice, imageUrl}) {
    const animationContainer = {visible: { opacity:1, transition: { when: "beforeChildren", staggerChildren: 0.5}}, hidden: {opacity: 0}};
    const animationItem = {visible: { opacity: 1, y:0, transition:{ easeIn: "easeIn", type: "spring", stiffness: 50, duration:4}},  hidden: { opacity: 0, y:20 }};
    
  return (
    <section className="relative overflow-hidden w-full h-auto bg-[url(/src/assets/banner.webp)] bg-cover bg-center py-10 md:py-16 text-stone-50">    
      <motion.div variants={animationContainer} initial="hidden" whileInView="visible" className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center">       
        <motion.div variants={animationItem} className="text-center md:text-left px-6 z-10">
          <h2 className='text-xl md:text-2xl font-semibold mb-4'>{offerDiscount}</h2>
          <h1 className="text-3xl md:text-6xl font-bold mb-4">{productTitle}</h1>
          <p className="text-2xl md:text-4xl font-semibold text-yellow-500">{productPrice}</p>
        </motion.div>
        <motion.div variants={animationItem} className='relative'>
            <img  src={imageUrl} alt={productTitle} className="w-full h-auto object-cover"/>
            <motion.img src={Percent} alt="save % discount" className='absolute top-0 right-0 md:left-0 w-20 sm:w-34 md:w-42 lg:w-48 h-auto' initial={{y:30}} whileInView={{y:0, transition: {duration: 2, repeat: Infinity, repeatType: "reverse"}}}/>    
        </motion.div>    
      </motion.div> 
      <img src={tomatoShapes} alt="tomato shapes" className='absolute bottom-0 right-0' /> 
      <motion.img src={spicy} alt="spicy" className='absolute top-5 left-5 w-24 md:w-34 lg:w-38 h-auto' whileInView={{rotate:[0,360], transition: {  repeat: Infinity, duration: 8, repeatDelay: 0}}}/>  
    </section>
  );
}

export default Banner;
