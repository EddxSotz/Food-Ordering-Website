import { useState, useEffect, useContext } from "react";
import currencyFormatting from "../utils/currency-formatting";
import CartContext from "../store/CartContext.jsx";
import Error from "./Error.jsx";
import preloader from "../assets/preloader.svg";

function Meals({isFiltered}) {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const cartContext = useContext(CartContext);  
 
    useEffect(() => {      
        async function fetchMeals() {
            setIsLoading(true);
            try {
              const response = await fetch('https://food-ordering-website-backend-3mwk.onrender.com/meals');
              const mealsData = await response.json();
              if (!response.ok) {
                throw new Error('Something went wrong!');                
              }
              setMeals(mealsData);
            } catch (error) {
              setError(error);
            }            
            setIsLoading(false);
           }        
    fetchMeals();
    }
    , []);

    switch (isFiltered) {                    
        case "main":
            meals.filter(meal => meal.category === "main");
            break;
        case "salads":
            meals.filter(meal => meal.category === "salads");
            break;
        case "desserts":
            meals.filter(meal => meal.category === "desserts");
            break;
        default:
            break;
    }


  const handleAddToCart = (meal) => {
    console.log(meal);
    cartContext.addItem(meal);    
  }

  return (
    <div className="container mx-auto mt-12 px-4">
      <h2 className="text-6xl font-bold text-center my-18">All available Meals</h2>      
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading && <img src={preloader} alt="Loading..."></img>}
        {error && <Error/>}
        {!isLoading && meals.map((meal) => (
          <li key={meal.id} className="text-center bg-gray-600 text-stone-50 rounded-md shadow-md">
            <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${meal.image}`} alt={meal.name} />
            <article className="py-2">              
              <h3>{meal.name}</h3>
              <p>{meal.description}</p>
              <p>{currencyFormatting.format(meal.price)}</p>              
              <button onClick={()=> handleAddToCart(meal)} className='bg-lime-800 py-1 px-4'>Add to Cart</button>              
            </article>            
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Meals;