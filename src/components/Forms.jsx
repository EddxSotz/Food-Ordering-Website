import Modal from '../UI/Modal.jsx';
import { useState } from 'react';

export default function Forms({ onSubmit }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const inputData = Object.fromEntries(formData.entries());
        onSubmit(inputData);
        setIsModalOpen(true);
    };

    return (
        <>
        <form onSubmit={handleSubmit} id='shipping-form'>
            <div className='input-field'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className='input-field'>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
            </div>
            <div className='input-field'>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />
            </div>
            <div className='input-field'>
                <label htmlFor="postalCode">Postal Code:</label>
                <input type="text" id="postalCode" name="postalCode" required />
            </div>
            <div className='input-field'>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" required />
            </div>
            <button type="submit" className='cart-button'>Submit</button>
        </form>
        {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)} openStatus={isModalOpen}>
             <p>Submitted Successfully!</p>
            </Modal>
        )}
        </>
    );
}