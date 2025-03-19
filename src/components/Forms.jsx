import {useContext, useState} from 'react';

export default function Forms({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} id='shipping-form'>
            <div className='input-field'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className='input-field'>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className='input-field'>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className='input-field'>
                <label htmlFor="postalCode">Postal Code:</label>
                <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
            </div>
            <div className='input-field'>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
            </div>
            <button type="submit" className='cart-button'>Submit</button>
        </form>
    );
}