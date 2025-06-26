import { useState, useEffect, useRef, use } from "react";
import HeroImage from "../assets/HeroImage.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import currencyFormatting from "../utils/currency-formatting";
import { motion } from "framer-motion";
import { FaCartShopping, FaEye } from "react-icons/fa6";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const slidesExample = [
    { image: HeroImage, title: "Slide 1" },
    { image: HeroImage, title: "Slide 2" },
    { image: HeroImage, title: "Slide 3" },
    { image: HeroImage, title: "Slide 4" },
    { image: HeroImage, title: "Slide 5" },
    { image: HeroImage, title: "Slide 6" },
    { image: HeroImage, title: "Slide 7" },    
];

export default function Slider({ meals = slidesExample, addToCart, seeDetails, categoryTitle = "All available Meals" }) {
    const [currentIndex, setCurrentIndex] = useState(0);    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [currentScrollPosition, setCurrentScrollPosition] = useState({x: 0, y: 0});
    const [sliderWidth, setSliderWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
    //const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(false);
    const elementRef = useRef();
    const containerRef = useRef();          
    
   const handleNextSlide = () => {
        const maxIndex = meals.length - getgridtemplateColumns();        
            if (currentIndex < maxIndex && meals.length > getgridtemplateColumns() && meals.length > 0) {
                setCurrentIndex((prevIndex) => (prevIndex + 1));                
            } else if (currentIndex >= maxIndex) { 
                setCurrentIndex(maxIndex);                
            } else {
                setCurrentIndex(0); 
            }                                    
    }

    const handlePrevSlide = () => {
        const maxIndex = meals.length - getgridtemplateColumns();        
            if (currentIndex > 0 && meals.length > getgridtemplateColumns() && meals.length > 0) {
                setCurrentIndex((prevIndex) => (prevIndex - 1));                
            } else if (currentIndex <= 0) { 
                setCurrentIndex(0);                
            } else {
                setCurrentIndex(maxIndex); 
            }                            
   }
 
    const getgridtemplateColumns = () => {        
        if (screenWidth >= 1024) { 
            return 4 
        } else if (screenWidth >= 640) { 
            return 2
        } else { 
            return 1         
        }
    }

    const handleNextButtonDisable = () => {
        const maxIndex = (meals.length - getgridtemplateColumns()) + 1;
        setIsNextButtonDisabled(true);
        if(currentIndex <= maxIndex && meals.length > getgridtemplateColumns() && meals.length === 0){
            setTimeout(() => {            
                setIsNextButtonDisabled(false);            
        }
        , 500); 
        }               
    }

    const handleDiscount = (price) => {
    const discountPrice = price - price * 0.2;
    return currencyFormatting.format(discountPrice);
  }   
     

    useScrollPosition(
    ({ currPos }) => {
      setCurrentScrollPosition(currPos)
    }, [], elementRef, false, 500, containerRef
  )    

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);               
        return () => window.removeEventListener("resize", handleResize);
    }, [ screenWidth]);  
    
    useEffect(() => {
        if (elementRef.current) {
            setSliderWidth(elementRef.current.scrollWidth);
        }
        if (containerRef.current) {
            setContainerWidth(containerRef.current.clientWidth);
        }
        setCurrentIndex(0);        
    }, [meals, screenWidth]);


  
     useEffect(() => {        
        changeIndexOnScroll();        
    }, [currentScrollPosition]); 
    

    useEffect(() => {
        scrollOnIndexChange();
        //handleNextButtonDisable();
    }, [currentIndex]);

    

    const calculateScrollPercentage = () => {
        if (sliderWidth > containerWidth) {
            return Math.round((currentScrollPosition.x / (sliderWidth - containerWidth)) * 100 + 0.5);
        } else {
            return 0; 
        }
    }
      
    const changeIndexOnScroll = () => {
        const scrollPercentage = calculateScrollPercentage();
        const maxIndex = meals.length - getgridtemplateColumns();               
        const newIndex = Math.round((scrollPercentage / 100) * (maxIndex));         

        setTimeout(() => {
            if (newIndex <= 0) {
                setCurrentIndex(0);                
            } else if ( newIndex >= maxIndex) {
                setCurrentIndex(maxIndex);                                
            } else if (newIndex > 0 && newIndex < maxIndex) {
                setCurrentIndex(newIndex);
            } else {
                setCurrentIndex(0); 
            }            
        }
        , 300);                     
    }  
  
   const scrollOnIndexChange = () => {        
        const maxIndex = meals.length - getgridtemplateColumns();
        const scrollableWidth = sliderWidth - containerWidth;
        const scrollInterval = scrollableWidth / maxIndex;
        const scrollValue= currentIndex * scrollInterval;                
        
        if(currentIndex > 0 && currentIndex <= maxIndex) {            
            containerRef.current.scrollLeft = scrollValue;            
        } else if (currentIndex === 0) {
            containerRef.current.scrollLeft = 0;
        } else if (currentIndex > maxIndex) {
            containerRef.current.scrollLeft = scrollableWidth;
        } else {
            containerRef.current.scrollLeft = 0; 
        }         
       
        console.log("****Scroll Values****");
        console.log("Max Index: ", maxIndex);
        console.log("scrollable Width: ", scrollableWidth);        
        console.log("Scroll Interval: ", scrollInterval);
        console.log("Scroll Value: ", scrollValue);
        console.log("Scroll percentage: ", calculateScrollPercentage());               
    }
 
    {console.log("****Slider Values****");    
    console.log("Slider Width:", sliderWidth);
    console.log("Container Width:", containerWidth);    
    console.log("Scrollable Width:", sliderWidth - containerWidth);
    console.log("Scrolling percentage", calculateScrollPercentage());
    console.log("current Scroll Position:", currentScrollPosition.x);
    console.log("Current Index:", currentIndex);   
    console.log("isNextButtonDisabled:", isNextButtonDisabled); 
    }

    return (
        <section className="container relative h-auto mx-auto py-12 px-6">
            <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:100, y:0, transition:{ easeIn: "easeIn", duration:0.5}}} className="text-6xl font-bold text-center my-18 font-Zain text-gray-800">{categoryTitle}</motion.h2>      
            <div className="flex justify-between items-center py-4">            
                <button onClick={handlePrevSlide} className={`rounded-full p-4 bg-lime-700 border-2 border-transparent text-stone-50 ${(currentIndex === 0) ? "disabled opacity-50 cursor-not-allowed": "enabled hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 active:border-lime-800"}`} disabled={currentIndex === 0 }><FaArrowLeft className='text-xl'/></button>
                <button onClick={handleNextSlide} className={`rounded-full p-4 bg-lime-700 border-2 border-transparent text-stone-50 ${isNextButtonDisabled ? "disabled opacity-50 cursor-not-allowed" : "enabled hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 active:border-lime-800"}`} disabled={isNextButtonDisabled}><FaArrowRight className='text-xl'/></button>
            </div>            
            <div ref={containerRef} className="overflow-x-scroll w-full py-2 snap-x snap-mandatory scroll scroll-smooth">
                <div ref={elementRef} className={`container flex flex-nowrap transform transition-transform duration-400`}>
                    {meals.map((meal, index) => (
                    <div key={index} className="h-full w-full sm:w-1/2 lg:w-1/4 shrink-0 px-6 snap-start snap-always">
                        <div className="relative rounded-md shadow-md text-center bg-[url(/src/assets/food-background.svg)] bg-center bg-cover border-1 border-gray-500/85">
                            <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${meal.image}`} alt={meal.name} />
                            <article className="w-full py-6 px-1">              
                                <h3 className="font-bold text-gray-800 text-2xl line-clamp-1 mb-4">{meal.name}</h3>              
                                <p className="font-bold text-3xl text-lime-700 mb-4">{currencyFormatting.format(meal.price)}<span className="ml-2 font-semibold line-through text-2xl text-lime-600 mb-4">{handleDiscount(meal.price)}</span> </p>                    
                                <motion.button onClick={()=> seeDetails(meal.id)} whileTap={{ scale: 1.1 }} className='block md:hidden py-1 px-4 mb-4 w-full text-lg font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50'><FaEye className='inline text-lg mr-1'/>See Details</motion.button>                   
                                <motion.button onClick={()=> addToCart(meal)} whileTap={{ scale: 1.1 }} className='block md:hidden py-1 px-4 w-full text-lg font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50'><FaCartShopping className='inline text-lg mr-1'/>Add to Cart</motion.button>               
                            </article>            
                                <motion.div whileHover={{scale:1, opacity:100}} className="absolute hidden md:block rounded-md opacity-0 inset-0 bg-gray-500/85 hover:cursor-pointer">
                                    <div className="flex flex-col items-center justify-center h-full gap-4">
                                        <motion.button onClick={()=> seeDetails(meal.id)} whileHover={{ scale: 1.1 }} className="py-4 px-8 text-xl font-semibold bg-lime-700  text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 rounded-md"><FaEye className='inline text-lg mr-1'/>See Details</motion.button>             
                                        <motion.button onClick={()=> addToCart(meal)} whileHover={{ scale: 1.1 }} className="py-4 px-8 text-xl font-semibold bg-lime-700  text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 rounded-md"><FaCartShopping className='inline text-lg mr-1'/>Add to Cart</motion.button>
                                    </div>
                                </motion.div>
                                <span className="absolute top-3 right-3 bg-lime-700 text-stone-50 text-semibold text-lg px-4 py-2 rounded-tl-full rounded-br-full">-20%</span>                         
                        </div>
                    </div>
                    ))}
                </div>            
            </div>            
        </section>
    );
    }


