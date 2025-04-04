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
    <div>
      <h2>All available Meals</h2>      
      <ul id="meals">
        {isLoading && <img src={preloader} alt="Loading..." id="preloader"></img>}
        {error && <Error/>}
        {!isLoading && meals.map((meal) => (
          <li key={meal.id} className="meal-item">
            <article>
              <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${meal.image}`} alt={meal.name} />
              <h3>{meal.name}</h3>
              <p className="meal-item-description">{meal.description}</p>
              <p className="meal-item-price">{currencyFormatting.format(meal.price)}</p>
              <p className="meal-item-actions">
                <button onClick={()=> handleAddToCart(meal)} className='cart-button'>Add to Cart</button>
              </p>
            </article>            
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Meals;