import Meals from '../components/Meals';
import PopularMeals from '../components/PopularMeals';
import HeroSection from '../components/HeroSection';

function Home()  {    
    return (
        <>
          <HeroSection />
          <PopularMeals />
          <Meals />                          
        </>
    );
}

export default Home;


