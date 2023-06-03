import React from 'react'

type Props = {}

export default function TableHead({}: Props) {
  return (
    <>
    <thead>
                    <tr>
                        <th className="header-coin-name">
                            نام
                        </th>
                        <th className="header-coin-price">
                            آخرین قیمت
                        </th>
                        <th className="header-change-price">
                            تغییر 24h
                        </th>
                        <th className="header-chart">
                            نمودار هفتگی
                        </th>
                        <th className="last-head-section-empty">

                        </th>
                    </tr>
                </thead>
                <style jsx>{`
                th {
                    border-bottom: 1px solid #dee2e6;
                    border-collapse: collapse;
                  }
                  th {
                    padding: 12px 12px;
                    text-align: right;
                    font-family: "Yekan";
                    vertical-align: middle;
                    color: #a3a5a8;
                    font-size: 0.9rem;
                    font-weight: 400;
                  }
                  .header-coin-name {
                    padding: 12px 64px !important;
                    width: 30%;
                  }
                  .header-coin-price {
                    width: 15%;
                  }
                  .header-change-price {
                    width: 20%;
                  }
                  .header-chart {
                    width: 20%;
                  }
                  th {
                    border-bottom: 1px solid #dee2e6;
                  }
                `}</style>
    </>
  )
}