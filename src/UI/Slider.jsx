import { useState, useEffect } from "react";
import HeroImage from "../assets/HeroImage.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { tr } from "motion/react-client";

const slidesExample = [
    { image: HeroImage, title: "Slide 1" },
    { image: HeroImage, title: "Slide 2" },
    { image: HeroImage, title: "Slide 3" },
    { image: HeroImage, title: "Slide 4" },
    { image: HeroImage, title: "Slide 5" },
    { image: HeroImage, title: "Slide 6" },
    { image: HeroImage, title: "Slide 7" },    
];

export default function Slider({ slides = slidesExample }) {
    const [currentIndex, setCurrentIndex] = useState(0);    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    //const [isButtonDisabled, setIsButtonDisabled] = useState(false);        
    
   const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);                        
    }

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);        
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

    const handleButtonDisable = () => {        
        if (slides.length % getgridtemplateColumns() != 0) {
            switch (getgridtemplateColumns()) {
            case 4:
            if (currentIndex >= (slides.length % 4)) {                
                return true;
            }
            break;

            case 2:
            if (currentIndex+1  >= slides.length) {                
                return true;
            }
            break;
            default:                
                return false;                        
            } 

        } else {            
            return false;
        }
    }

    console.log("Screen Width:", screenWidth);
    console.log("Grid Template Columns:", getgridtemplateColumns());
    console.log("Current Index:", currentIndex);
    console.log("is button disabled", handleButtonDisable());   ;

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    

    return (
        <section className="container relative h-auto mx-auto py-12 px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Product Slider Test</h2>
            <div className="overflow-x-auto w-full">
                <div className={`flex flex-nowrap transform transition-transform duration-400 snap-x`} style={{ transform: `translateX(-${currentIndex * (100 / getgridtemplateColumns())}%)`}}>
                    {slides.map((slide, index) => (
                    <div key={index} className={`h-full w-full sm:w-1/2 lg:w-1/4 border-2 border-gray-300 shrink-0 snap-start`}>
                        <img src={slide.image} alt={slide.title} className="w-full object-cover" />
                    </div>
                    ))}
                </div>            
            </div>
            <button onClick={handlePrevSlide} className={`absolute left-5 top-0 rounded-full p-4 bg-lime-700 border-2 border-transparent text-stone-50 ${(currentIndex === 0) ? "disabled opacity-50 cursor-not-allowed": "enabled hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 active:border-lime-800"}`} disabled={(currentIndex === 0)}><FaArrowLeft className='text-xl'/></button>
            <button onClick={handleNextSlide} className={`absolute right-5 top-0 rounded-full p-4 bg-lime-700 border-2 border-transparent text-stone-50 ${handleButtonDisable() ? "disabled opacity-50 cursor-not-allowed" : "enabled hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 active:border-lime-800"}`} disabled={handleButtonDisable()}><FaArrowRight className='text-xl'/></button>
        </section>
    );
    }


