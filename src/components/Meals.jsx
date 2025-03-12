import { useState, useEffect } from "react";
import currencyFormatting from "../utils/currency-formatting";

function Meals() {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState([]);      
 
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
                <button>Add to Cart</button>
              </p>
            </article>            
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Meals;