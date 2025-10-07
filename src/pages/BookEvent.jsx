
import { NavLink } from 'react-router-dom';

export default function BookEvent() {
    return (<>
        <div className="bg-emerald-950 pt-40 px-4 pb-16">
                <div className='container mx-auto flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-lime-600 font-semibold mb-4'>// Full event service</p>
                        <h1 className="text-6xl font-bold text-white font-Zain">Book your Event</h1>
                    </div>
                    <div>
                        <NavLink to="/" className="text-lime-600 font-semibold text-lg hover:underline">Home</NavLink>
                        <span className="text-lime-600 font-semibold text-lg"> / </span>
                        <p className='text-lime-700 font-semibold text-lg inline-block'>Book your Event</p>
                    </div> 
                </div>                               
        </div>

        <div className="container h-auto md:h-full mx-auto px-4 py-8 pt-18 text-gray-800 text-center">
            <h1 className="text-6xl font-bold text-center mb-4 mt-12 font-Charm">Book an Event</h1>
            <p className="text-lg text-center mb-8">
                Planning a special event? Let us help you make it unforgettable! Whether it's a birthday party,
                corporate event, wedding, or any other celebration, we offer customized catering services to
                suit your needs.
            </p>
            <p className="text-lg text-center mb-8">
                Our team of culinary experts will work with you to create a menu that delights your guests
                and fits your budget. From appetizers to desserts, we provide a wide range of options to
                choose from.
            </p>
            <p className="text-lg text-center mb-8">
                Contact us today to discuss your event and let us take care of the food while you focus on
                enjoying the occasion!
            </p>                      
        </div>        
    </>);
}
