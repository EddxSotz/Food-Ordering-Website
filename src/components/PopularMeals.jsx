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
    <div className="container mx-auto mt-12">
      <h2 className="text-6xl font-bold text-center my-18">Our Popular Meals</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading && <p>Loading...</p>}
        {error && <Error/>}        
        {meals.map((meal) => (
          <li key={meal.id} className="text-center bg-gray-600 text-stone-50 rounded-md shadow-md">
            <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${meal.image}`} alt={meal.name} />
            <article className="py-2">              
              <h3>{meal.name}</h3>              
              <p >{currencyFormatting.format(meal.price)}</p>              
              <button onClick={()=> handleAddToCart(meal)} className='bg-lime-800 py-1 px-4'>Add to Cart</button>              
            </article>            
          </li>
        ))}
      </ul>     
    </div>
  );
}
export default PopularMeals;