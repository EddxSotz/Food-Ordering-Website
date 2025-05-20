import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import currencyFormatting from "../utils/currency-formatting";
import { NavLink } from 'react-router-dom';
import preloader from "../assets/preloader.svg";
import Error from "../components/Error.jsx";
import Popup from "../components/Popup.jsx";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from "../store/CartContext.jsx";



export default function SingleProductView() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const cartContext = useContext(CartContext);    
    const [showPopup, setShowPopup] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 3000); 
        return () => clearTimeout(timer);
    }
    , [showPopup]); 

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Product Details - Broccolinni Restaurant";
    }
    , []);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://food-ordering-website-backend-3mwk.onrender.com/meals`);
                const mealsData = await response.json();

                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }                
                setProduct(mealsData.find(meal => meal.id === productId));
                if (!product) {
                    throw new Error('Product not found!');
                }                
            } catch (error) {
                console.error(error);                
            }
            setIsLoading(false);
        }
        fetchProduct();
    }, [productId]);

    const handleAddToCart = (product) => {
    console.log(product);
    cartContext.addItem(product);
    setShowPopup(true);   
  }
    

    return (
        <section className='h-auto pb-24'>
            <div className="bg-emerald-950 pt-40 pb-16">
                <div className='container mx-auto flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-lime-600 font-semibold mb-4'>// Welcome to our company</p>
                        <h1 className="text-6xl font-bold text-white font-Zain">Product Details</h1>
                    </div>
                    <div>
                        <NavLink to="/" className="text-lime-700 font-semibold text-lg hover:underline" >Home</NavLink>
                        <span className="text-lime-600 font-semibold text-lg"> / </span>
                        <p className='text-lime-600 font-semibold text-lg inline-block'>Product Details</p>
                    </div> 
                </div>                               
            </div>
            <div className="container mx-auto pt-16 px-4">
            {isLoading && (
                <div className="flex justify-center items-center h-screen">
                    <img src={preloader} alt="Loading..." className="w-2xl" />
                </div>
            )}            
             {product ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow-lg rounded-lg p-4">
                    <div>
                        <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${product.image}`} alt={product.name} className="w-full h-auto rounded-lg" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                        <p className="text-6xl font-bold text-lime-700">{currencyFormatting.format(product.price)}</p>
                        <p className='text-lg text-gray-600'><span>Categories: </span>{product.category}</p>
                        <p className="text-lg text-gray-600">{product.description}</p>                        
                        <button onClick={()=> handleAddToCart(product)} className='py-2 px-4 mt-4 text-lg font-semibold bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50'><FaCartShopping className='inline text-lg mr-1'/>Add to Cart</button>                    
                    </div>                    
                </div>
             ) : (
                <p className="text-xl text-red-500">Product not found!</p>
             )}
            </div>
            {showPopup && <Popup message="Product added to cart!" />}
        </section>
    );
}