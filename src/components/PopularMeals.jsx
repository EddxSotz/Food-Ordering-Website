import { useState, useEffect, useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import Error from "./Error.jsx";
import currencyFormatting from "../utils/currency-formatting";

function PopularMeals() {
    const [meals, setMeals] = useState([]);
    const cartContext = useContext(CartContext); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);    

    useEffect(() => {      
            async function fetchMeals() {
                setIsLoading(true);
                try {
                  const response = await fetch('https://food-ordering-website-backend-3mwk.onrender.com/meals');
                  const mealsData = await response.json();
                  if (!response.ok) {
                    throw new Error('Something went wrong!');                
                  }
                  setMeals(mealsData.filter(meal => meal.isFavorite === true));                  
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
    }
    

  return (
    <div className="container mx-auto mt-12 px-4">
      <h2 className="text-6xl font-bold text-center my-18">Our Popular Meals</h2>
      <ul className="snap-x overflow-x-scroll grid grid-flow-col grid-rows-1 gap-8 mx-auto py-4 px-2">
        {isLoading && <p>Loading...</p>}
        {error && <Error/>}        
        {meals.map((meal) => (
          <li key={meal.id} className="relative w-3xs sm:w-2xs md:w-xs lg:w-sm snap-start text-center bg-stone-100 text-gray-700 rounded-md shadow-md">
            <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${meal.image}`} alt={meal.name} />
            <article className="pt-2">              
              <h3 className="font-semibold">{meal.name}</h3>              
              <p className="font-bold text-lg text-lime-700">{currencyFormatting.format(meal.price)}</p>
              <div className="">
                <button onClick={()=> handleAddToCart(meal)} className='block lg:hidden bg-lime-800 py-1 px-4 w-full text-white text-lg font-semibold'>Add to Cart</button>              
              </div>              
            </article>
            <div className="hidden lg:block group absolute inset-0">
              <div className="invisible group-hover:visible absolute inset-0 bg-gray-500/75">
                <div className="flex items-center justify-center h-full">
                  <button onClick={()=> handleAddToCart(meal)} className="bg-lime-800 py-1 px-4 text-white text-lg font-semibold">Add to Cart</button>
                </div>
              </div>              
            </div>           
          </li>
        ))}
      </ul>     
    </div>
  );
}
export default PopularMeals;