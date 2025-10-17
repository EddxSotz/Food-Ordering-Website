
import { NavLink } from 'react-router-dom';
import { useId } from 'react';
import ContactImage from '../assets/contact-us.webp';

export default function BookEvent() {
    const fullName = useId();
    const eventType = useId();
    const eventDate = useId();
    const guests = useId();
    const email = useId();
    const message = useId();

    return (<>
        <div className="bg-emerald-950 pt-40 px-4 pb-16">
                <div className='container mx-auto flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-lime-600 font-semibold mb-4'>Full event service</p>
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
        
            <h1 className="text-4xl font-semibold mb-8 text-left">Book your event</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>                                     
                    <img src={ContactImage} alt="Contact Us" className="w-full h-auto rounded-md" />                  
                    <form className="flex flex-col gap-4">
                        <h3 className="text-lg md:text-xl font-semibold text-left">Fill up the form</h3>
                        <label htmlFor="fullName" className="text-left font-medium">Full Name</label>
                        <input id={fullName} type="text" placeholder="Your Name" className="p-2 border border-gray-300 rounded-md" required />
                        <label htmlFor="eventType" className="text-left font-medium">Event Type</label>
                        <select id={eventType} className="p-2 border border-gray-300 rounded-md" required>
                            <option value="">Select an event type</option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="other">Other</option>
                        </select>
                        <label htmlFor="eventDate" className="text-left font-medium">Event Date</label>
                        <input type="date" id={eventDate} className="p-2 border border-gray-300 rounded-md" required />
                        <label htmlFor="guests" className="text-left font-medium">Number of Guests</label>
                        <input type="number" id={guests} placeholder="Number of Guests" className="p-2 border border-gray-300 rounded-md" required />
                        <label htmlFor="email" className="text-left font-medium">Email Address</label>
                        <input type="email" id={email} placeholder="Your Email" className="p-2 border border-gray-300 rounded-md" required />
                        <label htmlFor="message" className="text-left font-medium">Additional Details</label>
                        <textarea id={message} placeholder="Your Message" className="p-2 border border-gray-300 rounded-md h-32" required></textarea>
                        <button type="submit" className="bg-lime-700 text-white py-2 px-4 rounded-md hover:bg-lime-800">Submit Request</button>
                    </form>
                </div>
                        
        </div>        
    </>);
}
