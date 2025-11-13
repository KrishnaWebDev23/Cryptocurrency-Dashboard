import React, { useEffect } from 'react'

const SearchBar = ({ data, setFilteredList, setSearchText, SearchText, Dropdown }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            let filteredData = data.filter((d) => (
                d.name.toLowerCase().includes(SearchText.toLowerCase().trim())
            ))
            if (SearchText.trim() === "") {
                filteredData = [...data]
            }   
            if (Dropdown === 'A - Z') {
                filteredData.sort((a, b) => a.name.localeCompare(b.name));
            } else if (Dropdown === 'Z - A') {
                filteredData.sort((a, b) => b.name.localeCompare(a.name));
            } else if (Dropdown === 'Highest Market Cap') {
                filteredData.sort((a, b) => b.market_cap - a.market_cap);
            } else if (Dropdown === 'Lowest Market Cap') {
                filteredData.sort((a, b) => a.market_cap - b.market_cap);
            }
            setFilteredList(filteredData)
        }, 500)

        return () => {
            clearTimeout(timer);
        }
    }, [data, SearchText, setFilteredList, Dropdown])

    return (
        <div>
            <input
                type="text"
                className='border p-2 w-100 rounded-lg'
                value={SearchText}
                placeholder='Enter the currency name'
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    )
}

export default SearchBar