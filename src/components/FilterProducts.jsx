import {useState} from 'react';
const availableCategories =["favorites", "main", "salads", "desserts"]

function FilterProducts ({mealCategory}) {            
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleCategoryClick = (category) => {                
        mealCategory(category);               
    };

    const handleFilterToggle = () => {
        setIsFilterOpen(!isFilterOpen);
    };
    return (
        <section className='flex flex-col items-start absolute left-1/2 mt-8 z-30 -translate-x-1/2' onClick={handleFilterToggle}>            
            <div className='text-md text-gray-800 bg-white border border-gray-300 rounded-lg'>
                <p className='px-4 py-2 font-semibold hover:cursor-pointer'>Filter by Category</p>
                {isFilterOpen && (
                    <ul>
                    <li className={`px-4 py-2 w-full border-b border-gray-200 list-none hover:bg-gray-200 hover:cursor-pointer`} onClick={() => handleCategoryClick("")}>All</li>
                    {availableCategories.map((category) => (                    
                            <li key={category} className={`px-4 py-2 w-full border-b border-gray-200 list-none hover:bg-gray-200 hover:cursor-pointer`}  onClick={ () => handleCategoryClick(category) }>                                
                                {category}
                            </li>                    
                    ))}
                    </ul>
                )}                               
            </div>
        </section>
    );

}
export default FilterProducts