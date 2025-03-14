import { useState, useEffect, useContext } from "react";
import currencyFormatting from "../utils/currency-formatting";
import CartContext from "../store/CartContext.jsx";

function Meals() {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState([]);  
    const cartContext = useContext(CartContext);  
 
    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals');
            const mealsData = await response.json();
            setMeals(mealsData);
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
    <div>      
      <ul id="meals">
        {isLoading && <p>Loading...</p>}
        {!isLoading && meals.map((meal) => (
          <li key={meal.id} className="meal-item">
            <article>
              <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
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