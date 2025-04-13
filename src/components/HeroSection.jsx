function HeroSection() {
  return (
    <div className={`bg-[url("/src/assets/background.jpg")] bg-cover h-screen bg-center flex flex-col justify-center items-center text-white px-4`}>
      <h1 className="text-6xl mb-4">Fresh & Tasty Meals</h1>
      <p className="text-2xl mb-4">Your all-in-one place for your food service needs</p>
      <button className="py-4 px-8 text-2xl font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-gray-700 hover:cursor-pointer active:text-stone-50 active:bg-lime-800">Shop Menu</button>
    </div>
  );
}
export default HeroSection;
