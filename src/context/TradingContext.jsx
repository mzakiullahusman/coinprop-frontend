import React, { createContext, useContext, useReducer, useEffect } from 'react';

const TradingContext = createContext();

const initialState = {
  selectedSymbol: 'SOLUSDT',
  account: null,
  trades: [],
  realTimeData: {
    availableMargin: 0,
    usedMargin: 0,
    totalBalance: 0,
    unrealizedPnL: 0,
  },
  portfolioBalance: 'Loading...',
  accounts: [],
  selectedAccount: '',
  price: null,
  priceChange: null,
};

function tradingReducer(state, action) {
  switch (action.type) {
    case 'SET_SYMBOL':
      return { ...state, selectedSymbol: action.payload };
    case 'SET_ACCOUNT':
      return { ...state, account: action.payload };
    case 'SET_TRADES':
      return { ...state, trades: action.payload };
    case 'SET_REAL_TIME_DATA':
      return { ...state, realTimeData: action.payload };
    case 'SET_PORTFOLIO_BALANCE':
      return { ...state, portfolioBalance: action.payload };
    case 'SET_ACCOUNTS':
      return { ...state, accounts: action.payload };
    case 'SET_SELECTED_ACCOUNT':
      return { ...state, selectedAccount: action.payload };
    case 'SET_PRICE_DATA':
      return { 
        ...state, 
        price: action.payload.price, 
        priceChange: action.payload.priceChange 
      };
    default:
      return state;
  }
}

export function TradingProvider({ children }) {
  const [state, dispatch] = useReducer(tradingReducer, initialState);

  return (
    <TradingContext.Provider value={{ state, dispatch }}>
      {children}
    </TradingContext.Provider>
  );
}

export function useTradingContext() {
  const context = useContext(TradingContext);
  if (!context) {
    throw new Error('useTradingContext must be used within a TradingProvider');
  }
  return context;
}
