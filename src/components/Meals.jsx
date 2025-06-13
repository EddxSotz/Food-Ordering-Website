import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"
import currencyFormatting from "../utils/currency-formatting";
import CartContext from "../store/CartContext.jsx";
import Error from "./Error.jsx";
import preloader from "../assets/preloader.svg";
import Popup from "./Popup.jsx";
import Slider from "../UI/Slider.jsx";
import { FaCartShopping, FaEye } from "react-icons/fa6";

function Meals({isFiltered="", showAsSlider=false, categoryTitle="All available Meals"}) {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const cartContext = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 3000); 
        return () => clearTimeout(timer);
    }
    , [showPopup]);  
 
    useEffect(() => {      
        async function fetchMeals() {
            setIsLoading(true);
            try {
              const response = await fetch('https://food-ordering-website-backend-3mwk.onrender.com/meals');
              const mealsData = await response.json();
              if (!response.ok) {
                throw new Error('Something went wrong!');                
              }
              switch (isFiltered) {                    
                case "main":
                    setMeals(mealsData.filter(meal => meal.category === "Main"));
                    break;
                case "salads":
                    setMeals(mealsData.filter(meal => meal.category === "Salad"));
                    break;
                case "desserts":
                    setMeals(mealsData.filter(meal => meal.category === "Dessert"));
                    break;
                case "favorites":
                    setMeals(mealsData.filter(meal => meal.isFavorite === true));
                    break;
                case "":
                    setMeals(mealsData);
                    break;
                default:
                    setMeals(mealsData);
                    break;
            }
            } catch (error) {
              setError(error);
            }            
            setIsLoading(false);
           }        
    fetchMeals();    
    }
    , []);    


  const handleAddToCart = (meal) => {
    console.log(meal);
    cartContext.addItem(meal);
    setShowPopup(true);   
  }

  const handleSeeDetails = (meal) => {
    navigate(`/shop/${meal}`);
    console.log(meal);
  }

  const handleDiscount = (price) => {
    const discountPrice = price - price * 0.2;
    return currencyFormatting.format(discountPrice);
  }
  return (
    <section>
      {error && <Error/>}
      {isLoading && <img src={preloader} alt="Loading..." className="w-2xl"></img>}
      {showPopup && <Popup message="Item added to cart!" />}
      {showAsSlider ? (
        <Slider meals={meals} addToCart={handleAddToCart} seeDetails={handleSeeDetails} categoryTitle={categoryTitle}/>                
        ) : (
          <>
          <div className="container mx-auto pt-12 px-4">
            <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:100, y:0, transition:{ easeIn: "easeIn", duration:0.5}}} className="text-6xl font-bold text-center my-18 font-Zain text-gray-800">{categoryTitle}</motion.h2>      
            <ul className={`gap-8 mx-auto py-4 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>                    
              {!isLoading && meals.map((meal) => (
                <li key={meal.id} className={`relative text-center bg-stone-100 text-gray-700 rounded-md shadow-md`}>
                  <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${meal.image}`} alt={meal.name} />
                  <article className="py-6 px-1">              
                    <h3 className="font-semibold text-xl line-clamp-1 mb-4">{meal.name}</h3>              
                    <p className="font-bold text-2xl text-lime-700 mb-4">{currencyFormatting.format(meal.price)}<span className="ml-2 font-semibold line-through text-xl text-lime-600 mb-4">{handleDiscount(meal.price)}</span> </p>                    
                    <motion.button onClick={()=> handleSeeDetails(meal.id)} whileTap={{ scale: 1.1 }} className='block md:hidden py-1 px-4 mb-4 w-full text-lg font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50'><FaEye className='inline text-lg mr-1'/>See Details</motion.button>                   
                    <motion.button onClick={()=> handleAddToCart(meal)} whileTap={{ scale: 1.1 }} className='block md:hidden py-1 px-4 w-full text-lg font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50'><FaCartShopping className='inline text-lg mr-1'/>Add to Cart</motion.button>               
                  </article>            
                    <motion.div whileHover={{scale:1, opacity:100}} className="absolute hidden md:block opacity-0 inset-0 bg-gray-500/85 hover:cursor-pointer">
                      <div className="flex flex-col items-center justify-center h-full gap-4">
                        <motion.button onClick={()=> handleSeeDetails(meal.id)} whileHover={{ scale: 1.1 }} className="py-4 px-8 text-xl font-semibold bg-lime-700  text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 rounded-md"><FaEye className='inline text-lg mr-1'/>See Details</motion.button>             
                        <motion.button onClick={()=> handleAddToCart(meal)} whileHover={{ scale: 1.1 }} className="py-4 px-8 text-xl font-semibold bg-lime-700  text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 rounded-md"><FaCartShopping className='inline text-lg mr-1'/>Add to Cart</motion.button>
                      </div>
                    </motion.div>
                    <span className="absolute top-3 right-3 bg-lime-700 text-stone-50 text-semibold text-lg px-4 py-2 rounded-tl-full rounded-br-full">-20%</span>                         
                </li>
              ))}
            </ul>        
          </div>
          </>
      )}            
    </section>
  );
}
export default Meals;