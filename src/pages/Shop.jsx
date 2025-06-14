import Meals from '../components/Meals';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shop - Broccolinni Restaurant";
  }, []);

  return (
    <div className='h-auto pb-24'>
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
      <Meals />
    </div>
  );
}
export default Shop;