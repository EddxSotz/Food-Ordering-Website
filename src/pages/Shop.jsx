import Meals from '../components/Meals';
import { useEffect } from 'react';

function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shop - Broccolinni Restaurant";
  }, []);

  return (
    <div className='h-auto pb-24'>      
      <Meals />
    </div>
  );
}
export default Shop;