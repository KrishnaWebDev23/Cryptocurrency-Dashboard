import React, { useState, useEffect } from 'react'
import CryptoCard from './Components/CryptoCard';
import SearchBar from './Components/SearchBar';
import SortDropdown from './Components/SortDropdown';


const CryptoDashboard = () => {
  const [cryptos, setCryptos] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [SearchText, setSearchText] = useState('');
  const [Dropdown, setDropDown] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {

        setError(null);
        setLoading(true)
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        const data = await response.json()
        setCryptos(data)
        setTimeout(() => setLoading(false),500)
      } catch (err) {
        setLoading(false);
        setError(err.message);
      } 
    }
    fetchData()
  }, [])
  console.log(error)
  const displayCards = filteredList
  return (
    <div>
      <h1 className='text-center my-5 text-3xl'>Currencey Dashboard</h1>
      <div className='flex w-full mt-8 justify-center items-center gap-5'>
        <SearchBar data={cryptos} setFilteredList={setFilteredList} setSearchText={setSearchText} SearchText={SearchText} Dropdown={Dropdown} />
        <SortDropdown Dropdown={Dropdown} setDropDown={setDropDown} />
      </div>
      {
        loading 
        ? <p className='text-center text-2xl my-10'>Loading...</p> 
        : error ? <p className='text-center text-2xl my-10 text-red-600'>⚠️Failed to Load</p> : <CryptoCard data={displayCards} />
      }



    </div>
  )
}

export default CryptoDashboard
