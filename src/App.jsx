import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header.jsx";
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Checkout = lazy(() => import('./store/Checkout.jsx'));

function App() {
 
  return (
    <>
    <Header/>
    <Suspense fallback={<div className="container">Loading...</div>}>
      <Routes>    
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/checkout" element={<Checkout />}/>      
      </Routes>
    </Suspense>
    </>
  );  
}

export default App;
