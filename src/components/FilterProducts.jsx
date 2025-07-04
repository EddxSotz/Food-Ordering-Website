import {useState} from 'react';
const availableCategories =["favorites", "main", "salads", "desserts"]

function FilterProducts ({mealCategory}) {        

    return (
        <section className='flex flex-col h-48 items-center mt-6 mb-6'>            
            <details className='text-md font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg'>
                <summary className='px-4 py-2 hover:cursor-pointer'>Filter by Category</summary>
                <div className='w-full z-10'>
                    {availableCategories.map((category) => (                    
                            <li key={category} className='w-full border-b border-gray-200 rounded-t-lg list-none'>
                                <div className="flex items-center ps-3">
                                    <input id={category} type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" onClick={()=> mealCategory(category)}/>
                                    <label htmlFor={category} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 hover:cursor-pointer">{category}</label>
                                </div>
                            </li>                    
                    ))}
                </div>                               
            </details>
        </section>
    );

}
export default FilterProducts