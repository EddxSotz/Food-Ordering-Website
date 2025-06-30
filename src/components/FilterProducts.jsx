import {useState} from 'react';
const availableCategories =["favorites", "main", "salads", "desserts"]

function FilterProducts ({mealCategory}) {        

    return (
        <section className='flex flex-col'>
            <h2>Filter by Category</h2>
            <ul className='w-48 text-mm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg'>
                {availableCategories.map((category) => (
                    <li key={category} className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                        <div className="flex items-center ps-3">
                            <input id={category} type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" onClick={()=> mealCategory(category)}/>
                            <label htmlFor={category} className="w-full py-3 ms-2 text-sm font-medium text-gray-900">{category}</label>
                        </div>
                    </li>
                ))}                               
            </ul>
        </section>
    );

}
export default FilterProducts