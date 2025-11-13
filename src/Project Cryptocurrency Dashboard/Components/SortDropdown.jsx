import React from 'react'

const SortDropdown = ({Dropdown,setDropDown}) => {
    
  return (
    <div>
            <select className='w-40 border mx-2 p-2 border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500' value={Dropdown} onChange={(e) => setDropDown(e.target.value)}>
                <option value="" disabled>Sort the List</option>
                <option value="none">Default</option>
                <option value="A - Z">A - Z</option>
                <option value="Z - A">Z - A</option>
                <option value="Highest Market Cap">Highest Market Cap</option>
                <option value="Lowest Market Cap">Lowest Market Cap</option>
            </select>
    </div>
  )
}

export default SortDropdown