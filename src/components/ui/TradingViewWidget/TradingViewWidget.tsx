"use client";

import React, { useEffect, useRef, memo } from "react";

export function TradingViewWidget() {
  const container = useRef<any>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
              "symbols": [
            [
              "PEPPERSTONE:EURUSD|ALL"
            ],
            [
              "PEPPERSTONE:XAUUSD|1D"
            ],
            [
              "PEPPERSTONE:NAS100|1D"
            ],
            [
              "BINANCE:BTCUSD|1D"
            ],
            [
              "PEPPERSTONE:USDJPY|1D"
            ],
            [
              "PEPPERSTONE:GBPUSD|1D"
            ],
            [
              "PEPPERSTONE:AUDUSD|1D"
            ],
            [
              "PEPPERSTONE:XAGUSD|1D"
            ],
            [
              "PEPPERSTONE:SPOTCRUDE|1D"
            ],
            [
              "PEPPERSTONE:NATGAS|1D"
            ],
            [
              "PEPPERSTONE:US500|1D"
            ],
            [
              "PEPPERSTONE:US30|1D"
            ],
            [
              "PEPPERSTONE:US2000|1D"
            ],
            [
              "PEPPERSTONE:CRYPTO30|1D"
            ],
            [
              "BINANCE:ETHUSD|1D"
            ],
            [
              "BINANCE:LTCUSD|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": 500,
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
