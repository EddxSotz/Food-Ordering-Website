export default function Popup({ message }) {

    return (
        <div className="fixed top-25 left-10 flex items-center justify-center z-50 transition duration-600 ease-in-out">
            <div className="bg-stone-50/80 p-4 rounded shadow-lg">
                <h2 className="text-lg font-semibold">{message}</h2>                
            </div>
        </div>
    );
}
