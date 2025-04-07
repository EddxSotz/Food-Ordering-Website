function HeroSection() {
  return (
    <div className={`bg-[url("/src/assets/background.jpg")] bg-cover h-screen bg-center flex flex-col justify-center items-center text-white`}>
      <h1>Fresh & Tasty Meals</h1>
      <p>Your all-in-one place for your food service needs</p>
      <button className="cta-button">Shop Menu</button>
    </div>
  );
}
export default HeroSection;
