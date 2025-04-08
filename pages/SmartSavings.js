import React, { useEffect, useState } from 'react'

function SmartSavings() {
  const [transactions, setTransactions] = useState([])
  const [wallet, setWallet] = useState(0)
  const [suggestedSave, setSuggestedSave] = useState(0)

  // Calculate savings logic - modified to start suggesting savings immediately
  const calculateSavings = (txns) => {
    let income = 0
    let expenses = 0

    txns.forEach((txn) => {
      if (txn.type === 'income') income += txn.amount
      else if (txn.type === 'expense') expenses += txn.amount
    })

    // Removed the buffer to start suggesting savings immediately
    const available = income - expenses
    const toSave = available > 0 ? Math.floor(available * 0.2) : 0 // Reduced percentage to start small

    setSuggestedSave(toSave)
  }

  // Start tracking from beginning
  useEffect(() => {
    // Start with an income transaction to enable immediate savings
    const initialTxn = {
      id: Date.now(),
      type: 'income', // Always start with income
      amount: Math.floor(Math.random() * 2000) + 1000,
      date: new Date().toLocaleTimeString(),
    }

    setTransactions([initialTxn])
    calculateSavings([initialTxn])
  }, [])

  // Simulate new transactions every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const type = Math.random() > 0.5 ? 'income' : 'expense'
      const amount = Math.floor(Math.random() * 5000) + 1000

      const newTxn = {
        id: Date.now(),
        type,
        amount,
        date: new Date().toLocaleTimeString(),
      }

      setTransactions((prev) => {
        const updated = [...prev, newTxn]
        calculateSavings(updated)
        return updated
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Handle Save to Wallet
  const handleSave = () => {
    setWallet(wallet + suggestedSave)
    setTransactions([])
    setSuggestedSave(0)
  }

  return (
    <div className="p-4 border rounded-xl bg-white shadow-md max-w-md mx-auto mt-6 text-center">
      <h2 className="text-xl font-bold mb-4"style={{marginTop:'90px'}}>💡 Smart Savings</h2>

      <ul className="mb-4 max-h-40 overflow-y-auto text-left">
        {transactions
          .slice()
          .reverse()
          .map((txn) => (
            <li key={txn.id} className="text-sm mb-1">
              [{txn.date}] {txn.type} ₹{txn.amount}
            </li>
          ))}
      </ul>

      <p className="mb-3 text-lg">
        📈 You can save: <strong>₹{suggestedSave}</strong>
      </p>

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mb-3"
        disabled={suggestedSave === 0}
      >
        💰 Save to Wallet
      </button>

      <p className="mt-4 text-lg">
        🏦 Wallet Balance: <strong>₹{wallet}</strong>
      </p>
    </div>
  )
}

export default SmartSavings
