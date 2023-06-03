import React from 'react'

type Coins = {
    logo:string,
    EngName:string,
    PerName:string,
    lastPrice:string,
    changePrice:string,
    chart:string
};

export default function TableRow({data} : any) {

  return (
    <>
        <tr>
                        <td className="coin-data-section">
                            <div className="coin-logo">
                                <img src={data.logo} alt="" />
                            </div>
                            <div className="coin-name">
                                {data.EngName}
                            </div>
                            <div className="persian-coin-name">
                                {data.PerName}
                            </div>
                        </td>
                        <td>
                            <div className="coin-price">
                                {data.price}
                            </div> 
                        </td>
                        <td>
                            <div dir="ltr" className="coin-price-change">
                                {data.changePrice}
                            </div>
                        </td>
                        <td>
                            <div className="chart-weekly">
                                <img src={data.chart} alt="" />
                            </div>
                        </td>
                        <td>
                            <div className="buy-sell">
                                <button className="buy-sell-button">
                                    خرید و فروش
                                </button>
                            </div>
                        </td>
        </tr>
        <style jsx>{`
        td {
            text-align: right;
            vertical-align: middle;
            padding: 12px 12px;
          }
          .coin-data-section {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 15px;
            padding: 12px 64px !important;
          }
          .coin-logo img {
            width: 36px;
            height: 36px;
          }
          .coin-name {
            font-family: "Roboto", sans-serif;
            color: #14151a;
            font-weight: 500;
            font-size: 1.1875rem;
          }
          .persian-coin-name {
            font-family: "Yekan";
            font-size: 0.9375rem;
            color: #a3a5a8;
          }
          .coin-price {
            color: #14151a;
          }
          .chart-weekly {
            filter: invert(42%) sepia(56%) saturate(6477%) hue-rotate(244deg) brightness(88%) contrast(84%);
          }
          .chart-weekly img {
            width: 115px;
            height: 35px;
          }
          .coin-price-change {
            color:${+data.changePrice.split("%")[0] > 0 ? "green" : "red"};
          }
          button {
            background-color: white;
            border: 1px solid #00aea4;
            padding: 0.375rem 1.8rem;
            border-radius: 5px;
            font-family: "Yekan";
            color: #00aea4;
            font-size: 0.9375rem;
            cursor: pointer;
          }
          button:hover {
            background-color: #00aea4;
            color: white;
          }
          td {
            border-bottom: 1px solid #dee2e6;
          }
        `}</style>
    </>
  )
}