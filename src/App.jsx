import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from './store/CartContext.jsx';
import Footer from './components/Footer.jsx';

import Header from "./components/Header.jsx";
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Checkout = lazy(() => import('./store/Checkout.jsx'));
const Shop = lazy(() => import('./pages/Shop.jsx'));

function App() {
 
  return (
    <main className='w-screen h-dvh relative'>
    <CartContextProvider>
      <Header/>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>    
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/login" element={<h1 className='text-3xl text-center'>Login</h1>}/>
            <Route path="*" element={<h1 className='text-3xl text-center'>404 Not Found</h1>}/>     
        </Routes>
      </Suspense>
    </CartContextProvider>
    <Footer/>
    </main>
  );  
}

export default App;
