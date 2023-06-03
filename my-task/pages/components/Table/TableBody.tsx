import React from 'react'
import TableRow from './TableRow';
import { CoinType } from '../../types/types';
import coins from "../../data/data"


type Props = {}

export default function TableBody({}: Props) {
    console.log(coins);

    let cemCoin=coins.map((coin) => {
        return <TableRow data={coin} />
    })

  return (
    <tbody>
        {cemCoin}
                </tbody>
  )
}