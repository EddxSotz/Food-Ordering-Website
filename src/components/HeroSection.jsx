function HeroSection() {
  return (
    <div className={`bg-[url("/src/assets/background.jpg")] bg-cover h-screen bg-center flex flex-col justify-center items-center text-white px-4`}>
      <h1 className="text-6xl mb-4">Fresh & Tasty Meals</h1>
      <p className="text-2xl mb-4">Your all-in-one place for your food service needs</p>
      <button className="bg-lime-800 py-4 px-8 text-2xl hover:bg-stone-50 hover:text-lime-800 hover:cursor-pointer rounded-md">Shop Menu</button>
    </div>
  );
}
export default HeroSection;
