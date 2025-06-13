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
          <Meals isFiltered={"favorites"} categoryTitle="Popular Meals" showAsSlider={true}/>
          <Meals isFiltered={"main"} categoryTitle="Main Dishes" showAsSlider={true}/>
          <Meals isFiltered={"salads"} categoryTitle="Salads" showAsSlider={true}/>
          <Meals isFiltered={"desserts"} categoryTitle="Desserts" showAsSlider={true}/>                                
        </section>
    );
}

export default Home;


