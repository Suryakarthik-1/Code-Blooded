/**
 * Utility functions for API calls to Twelve Data
 */

/**
 * Fetch stock data from Twelve Data API
 * @param {string} symbol - Stock symbol (e.g., 'AAPL')
 * @param {string} apiKey - Twelve Data API key
 * @returns {Promise<Object>} - Stock data
 */
export async function fetchStockData(symbol, apiKey) {
  try {
    // Check if API key is set
    if (!apiKey || apiKey === 'your_api_key_here') {
      console.error(
        'API key is not set. Please add your Twelve Data API key to .env.local'
      )
      throw new Error('API key is not set')
    }

    console.log(`Fetching data for symbol: ${symbol}`)

    const response = await fetch(
      `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${apiKey}`
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(
        `API error for ${symbol}: ${response.status} - ${errorText}`
      )
      throw new Error(`API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log(`Received data for ${symbol}:`, data)

    // Check if the API returned an error message
    if (data.status === 'error') {
      console.error(`API returned error for ${symbol}:`, data.message)
      throw new Error(`API error: ${data.message}`)
    }

    return data
  } catch (error) {
    console.error(`Error fetching stock data for ${symbol}:`, error)
    throw error
  }
}

/**
 * Fetch multiple stock data from Twelve Data API
 * @param {Array<string>} symbols - Array of stock symbols
 * @param {string} apiKey - Twelve Data API key
 * @returns {Promise<Array<Object>>} - Array of stock data
 */
export async function fetchMultipleStocks(symbols, apiKey) {
  try {
    // Check if API key is set
    if (!apiKey || apiKey === 'your_api_key_here') {
      console.error(
        'API key is not set. Please add your Twelve Data API key to .env.local'
      )
      return symbols.map((symbol, index) => ({
        rank: index + 1,
        symbol: symbol,
        name: symbol,
        price: 0,
        change: 0,
        volume: 0,
        error: 'API key is not set',
      }))
    }

    const promises = symbols.map((symbol) => fetchStockData(symbol, apiKey))
    const results = await Promise.all(promises)

    return results.map((data, index) => ({
      rank: index + 1,
      symbol: symbols[index],
      name: data.name || symbols[index],
      price: parseFloat(data.close) || 0,
      change: parseFloat(data.percent_change) || 0,
      volume: parseInt(data.volume) || 0,
    }))
  } catch (error) {
    console.error('Error fetching multiple stocks:', error)
    // Return placeholder data with error message
    return symbols.map((symbol, index) => ({
      rank: index + 1,
      symbol: symbol,
      name: symbol,
      price: 0,
      change: 0,
      volume: 0,
      error: error.message,
    }))
  }
}
