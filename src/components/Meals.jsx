import { useState, useEffect } from "react";

function Meals() {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState([]);      
 
    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:5173/meals');
            const mealsData = await response.json();
            setMeals(mealsData);
            setIsLoading(false);
           }
        if(!response.ok) {
            throw new Error('Something went wrong!');
        }
    fetchMeals();
    }
    , []);

  return (
    <div>
      <h1>Meals</h1>
      <ul id="meals">
        {isLoading && <p>Loading...</p>}
        {!isLoading && meals.map((meal) => (
          <li key={meal.id}>
            <h3>{meal.name}</h3>
            <p>{meal.description}</p>
            <p>{meal.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Meals;