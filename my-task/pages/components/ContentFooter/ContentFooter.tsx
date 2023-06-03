import React from 'react'

type Props = {}

export default function ContentFooter({}: Props) {
  return (
    <>
        <div className="content-footer">
                    <div className="footer-text">
                        نمایش همه بازار
                    </div>
                    <i className="fa-solid fa-chevron-left"></i>
        </div>
        <style jsx>{`
        .content-footer {
            width: 100%;
            background-color: white;
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            padding: 15px;
            cursor: pointer;
          }
          .footer-text {
            color: #5e35b1;
            font-family: "Yekan";
            font-size: 1rem;
          }
          i {
            margin-right: 10px;
            font-size: 0.9rem;
            color: rgb(161, 161, 161);
          }
        `}</style>
    </>
  )
}