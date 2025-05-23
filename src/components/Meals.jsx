import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import currencyFormatting from "../utils/currency-formatting";
import CartContext from "../store/CartContext.jsx";
import Error from "./Error.jsx";
import preloader from "../assets/preloader.svg";
import Popup from "./Popup.jsx";
import { FaCartShopping, FaEye } from "react-icons/fa6";

function Meals({isFiltered="", categoryTitle="All available Meals"}) {
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

  return (
    <div className="container mx-auto pt-12 px-4">
      <h2 className="text-6xl font-bold text-center my-18 font-Zain text-gray-800">{categoryTitle}</h2>      
      <ul className={`gap-8 mx-auto py-4 px-2 ${isFiltered != "" ? "grid grid-flow-col grid-rows-1 snap-x overflow-x-scroll" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}`}>
        {isLoading && <img src={preloader} alt="Loading..." className="w-2xl"></img>}
        {error && <Error/>}
        {!isLoading && meals.map((meal) => (
          <li key={meal.id} className={`relative ${isFiltered != "" ? "w-3xs sm:w-2xs md:w-xs lg:w-sm snap-start" : "w-full"} text-center bg-stone-100 text-gray-700 rounded-md shadow-md`}>
            <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${meal.image}`} alt={meal.name} />
            <article className="pt-2 px-1">              
              <h3 className="font-semibold text-xl line-clamp-1">{meal.name}</h3>
              <p className="line-clamp-2">{meal.description}</p>
              <p className="font-bold text-xl text-lime-700 mb-4">{currencyFormatting.format(meal.price)}</p>        
              <button onClick={()=> handleSeeDetails(meal.id)} className='block md:hidden py-1 px-4 mb-4 w-full text-lg font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50'><FaEye className='inline text-lg mr-1'/>See Details</button>                   
              <button onClick={()=> handleAddToCart(meal)} className='block md:hidden py-1 px-4 w-full text-lg font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50'><FaCartShopping className='inline text-lg mr-1'/>Add to Cart</button>               
            </article>
            <div className="hidden md:block group absolute inset-0">
              <div className="invisible group-hover:visible absolute inset-0 bg-gray-500/85">
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <button onClick={()=> handleSeeDetails(meal.id)} className="py-4 px-8 text-xl font-semibold bg-lime-700  text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 rounded-md"><FaEye className='inline text-lg mr-1'/>See Details</button>             
                  <button onClick={()=> handleAddToCart(meal)} className="py-4 px-8 text-xl font-semibold bg-lime-700  text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 rounded-md"><FaCartShopping className='inline text-lg mr-1'/>Add to Cart</button>
                </div>
              </div>              
            </div>            
          </li>
        ))}
      </ul>
      {showPopup && <Popup message="Item added to cart!" />}
    </div>
  );
}
export default Meals;