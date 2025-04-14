/**
 * Application constants and configuration
 */

// Twelve Data API key - Replace with your actual API key
export const TWELVE_DATA_API_KEY =
  process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY || ''

// Default stock symbols for the risk-free basket
export const RISK_FREE_STOCKS = [
  'NESTLEIND.NS', // Nestle India
  'PGHH.NS', // P & G Hygiene
  'COLPAL.NS', // Colgate-Palmolive
  'LLOYDMETAL.NS', // Lloyds Metals
  'LICHSGFIN.NS', // Life Insurance
]

// Default stock symbols for the low-risk basket
export const LOW_RISK_STOCKS = [
  'HDFCBANK.NS', // HDFC Bank
  'TCS.NS', // Tata Consultancy Services
  'INFY.NS', // Infosys
  'HINDUNILVR.NS', // Hindustan Unilever
  'RELIANCE.NS', // Reliance Industries
]

// Default stock symbols for the high-risk basket
export const HIGH_RISK_STOCKS = [
  'ZOMATO.NS', // Zomato
  'PAYTM.NS', // Paytm
  'NYKAA.NS', // Nykaa
  'POLICYBZR.NS', // PolicyBazaar
  'PB_FINTECH.NS', // PB Fintech
]
