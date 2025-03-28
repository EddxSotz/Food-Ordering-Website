import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Checkout from './store/Checkout.jsx';



function App() {
 
  return (
    <>
    <Header/>
    <Routes>      
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/checkout" element={<Checkout />}/>      
    </Routes>
    </>
  );  
}

export default App;
