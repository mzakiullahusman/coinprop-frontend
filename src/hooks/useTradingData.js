import { useEffect } from 'react';
import { getAccount, getTrades, getAccounts } from '@services/tradingService';
import { useTradingContext } from '../context/TradingContext';

export function useTradingData() {
  const { state, dispatch } = useTradingContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch accounts first
        const accountResponse = await getAccounts();
        dispatch({ type: 'SET_ACCOUNTS', payload: accountResponse.accounts });
        
        if (accountResponse.accounts.length > 0) {
          const defaultAccount = accountResponse.accounts[0];
          dispatch({ type: 'SET_SELECTED_ACCOUNT', payload: defaultAccount.id });
          dispatch({ type: 'SET_PORTFOLIO_BALANCE', payload: defaultAccount.balance });
          
          // Fetch account details and trades
          const [accountData, tradesData] = await Promise.all([
            getAccount(defaultAccount.id),
            getTrades(defaultAccount.id)
          ]);
          
          dispatch({ type: 'SET_ACCOUNT', payload: accountData.account });
          dispatch({ type: 'SET_TRADES', payload: tradesData });
        }
      } catch (error) {
        console.error('Error fetching trading data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return state;
}