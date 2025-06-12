import { useEffect } from 'react';
import Meals from '../components/Meals';
import HeroSection from '../components/HeroSection';
import Slider from '../UI/Slider';

function Home()  {    
  
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Home - Broccolinni Restaurant";
    }, []);

    return (
        <section className='h-auto pb-24'>
          <HeroSection />          
          <Meals isFiltered={"favorites"} categoryTitle="Popular Meals"/>
          <Meals isFiltered={"main"} categoryTitle="Main Dishes"/>
          <Meals isFiltered={"salads"} categoryTitle="Salads"/>
          <Meals isFiltered={"desserts"} categoryTitle="Desserts"/>
          <Slider />                      
        </section>
    );
}

export default Home;


