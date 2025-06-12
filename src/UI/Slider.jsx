import { useState, useEffect } from "react";
import HeroImage from "../assets/HeroImage.png";
import { motion} from "motion/react"

const slidesExample = [
    { image: HeroImage, title: "Slide 1" },
    { image: HeroImage, title: "Slide 2" },
    { image: HeroImage, title: "Slide 3" },
    { image: HeroImage, title: "Slide 4" },
    { image: HeroImage, title: "Slide 5" },
    { image: HeroImage, title: "Slide 6" },
];

export default function Slider({ slides = slidesExample }) {
    const [currentIndex, setCurrentIndex] = useState(0);    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);        
    
   const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);                
    }

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);        
    }
 
    const getgridtemplateColumns = () => {        
        if (screenWidth >= 1024) { // lg breakpoint
            return 4 
        } else if (screenWidth >= 640) { 
            return 2
        } else { 
            return 1         
        }
    }

    console.log("Screen Width:", screenWidth);
    console.log("Grid Template Columns:", getgridtemplateColumns());   

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    

    return (
        <section className="container relative h-auto mx-auto py-12 px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Product Slider Test</h2>
            <div className="overflow-x-auto w-full">
                <div className={`flex flex-nowrap transform transition-transform duration-300 `} style={{ transform: `translateX(-${currentIndex * (100 / getgridtemplateColumns())}%)`}}>
                    {slides.map((slide, index) => (
                    <div key={index} className={`h-full w-full sm:w-1/2 lg:w-1/4 border-2 border-gray-300 shrink-0`}>
                        <img src={slide.image} alt={slide.title} className="w-full object-cover" />
                    </div>
                    ))}
                </div>            
            </div>
            <button onClick={handlePrevSlide} className="absolute left-5 top-0 bg-gray-800 text-white p-2 rounded">
                Prev
            </button>
            <button onClick={handleNextSlide} className="absolute right-5 top-0 bg-gray-800 text-white p-2 rounded">
                Next
            </button>
        </section>
    );
    }


