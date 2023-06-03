import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import ContentFooter from '../ContentFooter/ContentFooter'

type Props = {}

export default function Table({}: Props) {
  return (
    <>
    <div className="table-wrapper">
        <table dir="rtl">

                <TableHead />                

                <TableBody />

        </table>
        <ContentFooter />
    </div>
        <style jsx>{`
        table {
            width: 100%;
            height: auto;
            background-color: white;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            border-collapse: collapse;
            border-radius: 10px 0px 10px 10px;
          }
          .table-wrapper {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            border-radius: 10px 0px 10px 10px;
            overflow: hidden;
          }
        `}</style>
    </>
  )
}