import {useState} from 'react';
const availableCategories =["favorites", "main", "salads", "desserts"]

function FilterProducts ({mealCategory}) {        

    return (
        <section className='flex flex-col items-start absolute left-1/2 mt-8 z-50 -translate-x-1/2'>            
            <details className='text-md font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg'>
                <summary className='px-4 py-2 hover:cursor-pointer'>Filter by Category</summary>
                <div>
                    {availableCategories.map((category) => (                    
                            <li key={category} className='flex justify-between items-center w-full border-b border-gray-200 rounded-t-lg list-none hover:bg-gray-100'>
                                <div className="flex items-center px-8 py-4">
                                    <input id={category} type="radio" value="" name="list-radio" className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" onClick={()=> mealCategory(category)}/>
                                    <label htmlFor={category} className="w-full text-md font-medium text-gray-900 hover:cursor-pointer">{category}</label>
                                </div>
                                <button className='border-1 rounded-full text-sm h-6 mr-2 font-semibold border-gray-400 px-4 hover:bg-red-400 hover:border-red-400 hover:cursor-pointer active:bg-red-500 active:border-none' onClick={()=> mealCategory("")}>X</button>
                            </li>                    
                    ))}
                </div>                               
            </details>
        </section>
    );

}
export default FilterProducts