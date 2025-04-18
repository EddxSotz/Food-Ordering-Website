import Meals from '../components/Meals';
import HeroSection from '../components/HeroSection';

function Home()  {    
    return (
        <section className='h-auto pb-24'>
          <HeroSection />          
          <Meals isFiltered={"favorites"} categoryTitle="Popular Meals"/>
          <Meals isFiltered={"main"} categoryTitle="Main Dishes"/>
          <Meals isFiltered={"salads"} categoryTitle="Salads"/>
          <Meals isFiltered={"desserts"} categoryTitle="Desserts"/>                      
        </section>
    );
}

export default Home;


