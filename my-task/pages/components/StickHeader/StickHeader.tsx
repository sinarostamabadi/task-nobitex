import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'

type Props = {}

export default function StickHeader({}: Props) {

  let state=useSelector(state => state);

  console.log(state);


  return (
    <>
    <div className="stick-header">
                <div className="stick-header-wrapper">
                    <div className="stick-header-title">
                      انتخاب بر اساس بازار
                    </div>
                    <div className="stick-header-tooman">
                        تومانIRT
                    </div>
                    <div className="stick-header-usdt stick-selected">
                        تتر USDT
                    </div>
                </div>
            </div>
            <style jsx>{`
            .stick-header {
              width: 100%;
              background-color: none;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
            }
            .stick-header-wrapper {
              background-color: white;
              display: flex;
              flex-direction: row-reverse;
              justify-content: center;
              align-items: center;
              padding: 16px 16px 0px 16px;
              border-radius: 10px 10px 0px 0px;
            }
            .stick-header-title {
              font-family: "Yekan";
              margin-left: 1.5rem;
              font-size: 1rem;
              color: #14151a;
              font-weight: 400;
            }
            .stick-header-tooman , .stick-header-usdt {
              direction: rtl;
              padding: 4px 16px;
              font-family: "Yekan";
              font-size: 1rem;
              color: white;
              background-color: #85888f;
              cursor:pointer;
            }
            .stick-header-tooman {
              border-radius: 0px 3px 3px 0px;
          }
          .stick-header-usdt {
              border-radius: 3px 0px 0px 3px;
          }
          .stick-selected {
              background-color: #e3e4e5;
              color: #a3a5a8;
          }
            `}</style>
    </>
  )
}