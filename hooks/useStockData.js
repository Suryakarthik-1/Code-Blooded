import { useState, useEffect } from 'react'
import { fetchMultipleStocks } from '../utils/api'
import { TWELVE_DATA_API_KEY } from '../config/constants'

/**
 * Custom hook to fetch and manage stock data
 * @param {Array<string>} symbols - Array of stock symbols to fetch
 * @param {number} refreshInterval - Refresh interval in milliseconds (default: 60000)
 * @returns {Object} - Stock data, loading state, and error state
 */
export default function useStockData(symbols, refreshInterval = 60000) {
  const [stockData, setStockData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Function to fetch stock data
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchMultipleStocks(symbols, TWELVE_DATA_API_KEY)
        setStockData(data)
      } catch (err) {
        console.error('Error in useStockData hook:', err)
        setError(err.message || 'Failed to fetch stock data')
      } finally {
        setLoading(false)
      }
    }

    // Initial fetch
    fetchData()

    // Set up interval for periodic refresh
    const intervalId = setInterval(fetchData, refreshInterval)

    // Clean up interval on unmount
    return () => clearInterval(intervalId)
  }, [symbols, refreshInterval])

  return { stockData, loading, error }
}
