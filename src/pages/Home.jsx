import { useEffect } from 'react';
import Meals from '../components/Meals';
import HeroSection from '../components/HeroSection';
import Banner from '../components/Banner';
import BannerFeaturedMeal from '../assets/banner-featured-meal.png';

function Home()  {    
  
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Home - Broccolinni Restaurant";
    }, []);

    return (
        <section className='h-auto pb-24'>
          <HeroSection />          
          <Meals isFiltered={"favorites"} categoryTitle="Popular Meals" showAsSlider={true}/>
          <Banner offerDiscount="Save 20% off" productTitle="Broccolinni Special Burger" productPrice="$12.99" imageUrl={BannerFeaturedMeal}/>
          <Meals isFiltered={"main"} categoryTitle="Main Dishes" showAsSlider={true}/>
          <Meals isFiltered={"salads"} categoryTitle="Salads" showAsSlider={true}/>
          <Meals isFiltered={"desserts"} categoryTitle="Desserts" showAsSlider={true}/>                                
        </section>
    );
}

export default Home;


