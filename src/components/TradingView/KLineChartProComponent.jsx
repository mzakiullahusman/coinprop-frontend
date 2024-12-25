import { KLineChartPro } from '@klinecharts/pro';

class CustomDatafeed {
  async getHistoryKLineData(symbol, period, from, to) {
    const intervalMap = {
      minute: '1m',
      '5-minute': '5m',
      '15-minute': '15m',
      hour: '1h',
      day: '1d',
    };

    const interval = intervalMap[period.timespan] || '1h';

    const response = await fetch(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&startTime=${from}&endTime=${to}`
    );

    const data = await response.json();

    return data.map((item) => ({
      timestamp: item[0],
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
      volume: parseFloat(item[5]),
    }));
  }

  subscribe(symbol, period, callback) {
    const intervalMap = {
      minute: '1m',
      '5-minute': '5m',
      '15-minute': '15m',
      hour: '1h',
      day: '1d',
    };

    const interval = intervalMap[period.timespan] || '1h';

    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`
    );

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const kline = message.k;

      callback({
        timestamp: kline.t,
        open: parseFloat(kline.o),
        high: parseFloat(kline.h),
        low: parseFloat(kline.l),
        close: parseFloat(kline.c),
        volume: parseFloat(kline.v),
      });
    };

    this.ws = ws;
  }

  unsubscribe() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export default function setupApp (selectedSymbol) {
  
  const options = {
    container: 'container',
    locale: 'en-US',
    watermark: `<div></div>`,
    theme: "dark",
    symbol: selectedSymbol,
    period: { multiplier: 15, timespan: 'minute', text: '15m' },
    subIndicators: ['VOL', 'MACD'],
    timezone: "UTC",
    responsive: true,
    datafeed: new CustomDatafeed(),
  }
  new KLineChartPro(options)
}
