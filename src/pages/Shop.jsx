import Meals from '../components/Meals';
import FilterProducts from '../components/FilterProducts';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Shop() {
  const [activeFilter, setActiveFilter] = useState("");
  const [activeTitle, setActiveTitle] = useState("");

  const handleFilter = (category)=> {
    setActiveFilter(category)
    setActiveTitle(category.charAt(0).toUpperCase() + category.slice(1));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shop - Broccolinni Restaurant";
  }, []);

  console.log("active Filter", activeFilter);

  return (
    <div className='h-auto pb-24 relative'>
      <div className="bg-emerald-950 pt-40 pb-16">
                <div className='container mx-auto flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-lime-600 font-semibold mb-4'>// Our complete Selection</p>
                        <h1 className="text-6xl font-bold text-white font-Zain">Shop</h1>
                    </div>
                    <div>
                        <NavLink to="/" className="text-lime-700 font-semibold text-lg hover:underline" >Home</NavLink>
                        <span className="text-lime-600 font-semibold text-lg"> / </span>
                        <p className='text-lime-600 font-semibold text-lg inline-block'>Shop</p>
                    </div> 
                </div>                               
        </div>
      <FilterProducts mealCategory ={handleFilter}/>            
      <Meals isFiltered={activeFilter} categoryTitle={activeTitle} key={activeFilter}/>
    </div>
  );
}
export default Shop;