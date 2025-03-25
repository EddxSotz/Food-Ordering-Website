
const Contact = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Reach out to us using the information below:</p>
            
            <div style={{ marginTop: '20px' }}>
                <h3>Address</h3>
                <p>123 Foodie Lane, Flavor Town, FT 56789</p>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <h3>Email</h3>
                <p>contact@foodorder.com</p>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 10:00 PM</p>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <h3>Follow Us</h3>
                <p>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;