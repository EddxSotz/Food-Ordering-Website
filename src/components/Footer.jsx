import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Broccolinni Restaurant. All rights reserved.</p>
                <div className="text-sm flex flex-row gap-4 justify-center items-center mt-2">
                    <p>Follow us on</p>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><FaInstagram className='inline text-lg mr-1'/>Instagram</a> 
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><FaFacebook className='inline text-lg mr-1'/> Facebook</a> 
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><FaTwitter className='inline text-lg mr-1'/> Twitter</a>
                </div>
            </div>
        </footer>
    );
}