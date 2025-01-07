import { useEffect } from 'react';

export function useWebSocket(url, onMessage, dependencies = []) {
  useEffect(() => {
    const ws = new WebSocket(url);
    
    ws.onopen = () => {
      console.log('WebSocket Connected');
    };

    ws.onmessage = onMessage;

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, dependencies);
}
