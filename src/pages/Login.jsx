/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import { NavLink } from 'react-router-dom';


export default function Login() {
    return (
        <>
        <div className="bg-emerald-950 pt-40 px-4 pb-16">
                <div className='container mx-auto flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-lime-600 font-semibold mb-4'>/ Log into your account</p>
                        <h1 className="text-6xl font-bold text-white font-Zain">Login</h1>
                    </div>
                    <div>
                        <NavLink to="/" className="text-lime-600 font-semibold text-lg hover:underline">Home</NavLink>
                        <span className="text-lime-600 font-semibold text-lg"> / </span>
                        <p className='text-lime-700 font-semibold text-lg inline-block'>Login</p>
                    </div> 
                </div>                               
        </div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Login</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-lime-600 hover:bg-lime-700 active:bg-lime-800 hover:cursor-pointer text-stone-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
        </>
    );
}