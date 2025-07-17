import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    
    useEffect(() => {
        document.title = "Contact Us - Broccolinni Restaurant";
        window.scrollTo(0, 0);
    }
    , []);
    
    return (
        <>
        <div className="bg-emerald-950 pt-40 px-4 pb-16">
                <div className='container mx-auto flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-lime-600 font-semibold mb-4'>// Get in Touch</p>
                        <h1 className="text-6xl font-bold text-white font-Zain">Shop</h1>
                    </div>
                    <div>
                        <NavLink to="/" className="text-lime-600 font-semibold text-lg hover:underline">Home</NavLink>
                        <span className="text-lime-600 font-semibold text-lg"> / </span>
                        <p className='text-lime-700 font-semibold text-lg inline-block'>Contact Us</p>
                    </div> 
                </div>                               
        </div>
        <div className="container h-auto md:h-full mx-auto p-4 pt-18 text-gray-800 text-center">
            <h1 className="text-6xl mb-6 mt-12 font-Charm">Contact Us</h1>
            <p className="text-xl mb-6">We'd love to hear from you! Reach out to us using the information below:</p>
            
            <div className="bg-gray-200 p-4 rounded-md shadow-md mb-6">
                <h3 className="text-lg font-semibold">Address</h3>
                <p>123 Foodie Lane, Flavor Town, FT 56789</p>
            </div>
            
            <div  className="bg-gray-200 p-4 rounded-md shadow-md mb-6">
                <h3 className="text-lg font-semibold">Phone</h3>                
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </div>
            
            <div  className="bg-gray-200 p-4 rounded-md shadow-md mb-6">
                <h3 className="text-lg font-semibold">Email</h3>                
                <a href="mailto:contact@foodorder.com">contact@foodorder.com</a>                
            </div>
            
            <div  className="bg-gray-200 p-4 rounded-md shadow-md mb-6">
                <h3 className="text-lg font-semibold">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 10:00 PM</p>
            </div>
            
            <div  className="bg-gray-200 p-4 rounded-md shadow-md mb-6">
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <p>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
                </p>
            </div>
        </div>
        </>
    );
};

export default Contact;