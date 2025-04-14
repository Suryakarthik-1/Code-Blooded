import React from 'react'
import useStockData from '../../hooks/useStockData'
import { RISK_FREE_STOCKS } from '../../config/constants'

export default function StockListSection() {
  // Fetch stock data with 5-minute refresh interval
  const { stockData, loading, error } = useStockData(RISK_FREE_STOCKS, 300000)

  return (
    <div className="section fugu-section-padding3">
      <div className="container">
        <div className="fugu-section-title">
          <h2>Risk-Free Stock Basket</h2>
          <p>
            These stocks are carefully selected for a risk-free investment
            strategy
          </p>
        </div>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading stock data...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            <strong>Error:</strong> {error}
            <p className="mt-2 mb-0">
              Please check your API key or try again later.
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Rank</th>
                  <th>Company Name</th>
                  <th>Symbol</th>
                  <th>Price</th>
                  <th>Change %</th>
                  <th>Volume</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((stock) => (
                  <tr key={stock.rank}>
                    <td>{stock.rank}</td>
                    <td>{stock.name}</td>
                    <td>{stock.symbol}</td>
                    <td>{stock.price.toLocaleString()}</td>
                    <td
                      className={
                        stock.change >= 0 ? 'text-success' : 'text-danger'
                      }
                    >
                      {stock.change >= 0 ? '+' : ''}
                      {stock.change.toFixed(2)}%
                    </td>
                    <td>{stock.volume.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
