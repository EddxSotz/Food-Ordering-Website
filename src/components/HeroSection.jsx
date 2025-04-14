import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleShopMenu = () => {
    navigate("/shop");
  };

  return (
    <div className={`bg-[url("/src/assets/background.jpg")] bg-cover h-screen bg-center flex flex-col justify-center items-center text-stone-50 text-center px-4`}>
      <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-8 font-Charm font-bold">Fresh & Tasty Meals</h1>
      <p className="text-2xl sm:text-3xl md:4xl font-Zain mb-8">Your all-in-one place for your food service needs</p>
      <button  onClick={handleShopMenu} className="py-4 px-8 text-2xl font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-gray-700 hover:cursor-pointer active:text-stone-50 active:bg-lime-800">Shop Menu</button>
    </div>
  );
}
export default HeroSection;
