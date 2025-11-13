import React from 'react'

const CryptoCard = ({ data }) => {
    let TopGainers = [...data]
    .sort((a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 5);
  
    return (
        <div>
          
        <div className='w-full flex flex-col items-center gap-5 my-10'>
                {data.length > 0 && <h1 className='text-xl'>Top 5 Gainers (24h)</h1>}
                <div className='w-full flex flex-wrap justify-center gap-5'>
                
                    {TopGainers.map(e => (
                        <div
                            key={e.id}
                            className='max-w-sm w-full rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100'
                        >   
                            <div className="flex flex-col gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                {/* Top Section */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={e.image}
                                            alt={e.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h1 className="text-base font-semibold text-gray-800">{e.name}</h1>
                                            <h2 className="text-sm text-gray-500 uppercase">{e.symbol}</h2>
                                        </div>
                                    </div>
                                    <h2 className="text-base font-semibold text-gray-800">${e.current_price.toLocaleString()}</h2>
                                </div>

                                {/* Bottom Section */}
                                <div className="flex justify-between text-sm text-gray-600">
                                    <p>Market Cap: ${e.market_cap.toLocaleString()}T</p>
                                    <p
                                        className={`font-medium ${e.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
                                            }`}
                                    >
                                        {e.price_change_percentage_24h.toFixed(2)}%
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
        </div>

        <div className='w-full flex flex-col items-center gap-5 my-10'>
                {data.length > 0 && <h1 className='text-xl'>All Cryptocurrency's</h1>}
                <div className='w-full flex flex-wrap justify-center gap-5'>
            {data.map(e => (
                <div
                    key={e.id}
                    className='max-w-sm w-full rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100'
                >   
                    <div className="flex flex-col gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        {/* Top Section */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img
                                    src={e.image}
                                    alt={e.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h1 className="text-base font-semibold text-gray-800">{e.name}</h1>
                                    <h2 className="text-sm text-gray-500 uppercase">{e.symbol}</h2>
                                </div>
                            </div>
                            <h2 className="text-base font-semibold text-gray-800">${e.current_price.toLocaleString()}</h2>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex justify-between text-sm text-gray-600">
                            <p>Market Cap: ${e.market_cap.toLocaleString()}T</p>
                            <p
                                className={`font-medium ${e.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
                                    }`}
                            >
                                {e.price_change_percentage_24h.toFixed(2)}%
                            </p>
                        </div>
                    </div>

                </div>
            ))}
                </div>
        </div>
    

        </div>
    )
}

export default CryptoCard
