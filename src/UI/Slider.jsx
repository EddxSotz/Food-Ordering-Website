//import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroImage from "../assets/HeroImage.png";
import currencyFormatting from "../utils/currency-formatting";
import { motion } from "framer-motion";
import { FaCartShopping, FaEye } from "react-icons/fa6";

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

    const handleDiscount = (price) => {
    const discountPrice = price - price * 0.2;
    return currencyFormatting.format(discountPrice);
  }   
     

    return (
        <section className="container h-auto mx-auto py-6 ">
            <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:100, y:0, transition:{ easeIn: "easeIn", duration:0.5}}} className="text-6xl font-bold text-center my-18 font-Zain text-gray-800">{categoryTitle}</motion.h2>                              
            <div className='relative px-12'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}                    
                    autoplay={{ delay: 3000, disableOnInteraction: false }}                                                
                    speed={1000}
                    loop={false}
                    breakpoints={{
                        640: {
                        slidesPerView: 2,
                        },
                        768: {
                        slidesPerView: 3,
                        },
                        1024: {
                        slidesPerView: 4,
                        },
                    }}
                >                
                        {meals.map((meal, index) => (
                        <SwiperSlide key={index}>
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
                        </SwiperSlide>
                        ))}
                                
                </Swiper>
                <div className="swiper-button-prev absolute -left-2 top-1/2 -translate-y-1/2 z-10 p-2  text-white rounded-full cursor-pointer"></div>
                <div className="swiper-button-next absolute -right-2 top-1/2 -translate-y-1/2 z-10 p-2  text-white rounded-full cursor-pointer"></div> 
            </div>        
        </section>
    );
    }


