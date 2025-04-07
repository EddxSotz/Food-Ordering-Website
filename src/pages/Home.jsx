import Meals from '../components/Meals';
import PopularMeals from '../components/PopularMeals';
import HeroSection from '../components/HeroSection';

function Home()  {    
    return (
        <section className='bg-slate-200'>
          <HeroSection />
          <PopularMeals />
          <Meals />                          
        </section>
    );
}

export default Home;


