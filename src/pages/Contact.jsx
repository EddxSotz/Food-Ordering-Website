import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhone, FaLocationDot, FaEnvelope, FaSquareInstagram } from "react-icons/fa6";
import ContactImage from '../assets/contact-us.webp';

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
                        <h1 className="text-6xl font-bold text-white font-Zain">Contact</h1>
                    </div>
                    <div>
                        <NavLink to="/" className="text-lime-600 font-semibold text-lg hover:underline">Home</NavLink>
                        <span className="text-lime-600 font-semibold text-lg"> / </span>
                        <p className='text-lime-700 font-semibold text-lg inline-block'>Contact Us</p>
                    </div> 
                </div>                               
        </div>
        <div className="container h-auto md:h-full mx-auto p-4 pt-18 text-gray-800 text-center">   
            <div className='max-h-screen grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 '>            
                <div className="bg-gray-200 p-4 rounded-md shadow-md mb-6 flex flex-col items-center justify-center">
                    <FaLocationDot className='text-4xl mb-4'/>
                    <h2 className="text-lg md:text-xl font-semibold">Address</h2>
                    <p>123 Foodie Lane, Flavor Town, FT 56789</p>
                    <h3 className="text-lg font-semibold mt-6">Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                    <p>Saturday - Sunday: 10:00 AM - 10:00 PM</p>
                </div>            
                <div  className="bg-gray-200 p-4 rounded-md shadow-md mb-6 flex flex-col items-center justify-center">
                    <FaPhone className='text-4xl mb-4'/>
                    <h2 className="text-lg md:text-xl font-semibold">Phone</h2>                
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </div>            
                <div  className="bg-gray-200 p-4 rounded-md shadow-md mb-6 flex flex-col items-center justify-center">
                    <FaEnvelope className='text-4xl mb-4'/>
                    <h2 className="text-lg md:text-xl font-semibold">Email</h2>                
                    <a href="mailto:contact@foodorder.com">contact@foodorder.com</a>                
                </div>                                    
                <div  className="bg-gray-200 p-4 rounded-md shadow-md mb-6 flex flex-col items-center justify-center">
                    <FaSquareInstagram className='text-4xl mb-4'/>
                    <h2 className="text-lg md:text-xl font-semibold">Follow Us</h2>
                    <p>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
                    </p>
                </div>
            </div>
            <div className="p-6 mt-6">
                <h1 className="text-4xl font-semibold mb-8 text-left">Send Us a Message</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>                                     
                    <img src={ContactImage} alt="Contact Us" className="w-full h-auto rounded-md" />                  
                <form className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-semibold text-left">Fill up the form</h3>
                    <input type="text" placeholder="Your Name" className="p-2 border border-gray-300 rounded-md" required />
                    <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded-md" required />
                    <textarea placeholder="Your Message" className="p-2 border border-gray-300 rounded-md h-32" required></textarea>
                    <button type="submit" className="bg-lime-700 text-white py-2 px-4 rounded-md hover:bg-lime-800">Send Message</button>
                </form>
                </div>
                
            </div>    
        </div>
        </>
    );
};

export default Contact;