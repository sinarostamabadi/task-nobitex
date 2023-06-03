import React from 'react'

type Props = {}

export default function ImageBackground({}: Props) {
  return (
    <>
        <div className="image-background">
            <img src="https://nobitex.ir/_nuxt/img/jumbotron.3ceb851.svg" alt="" />
        </div>
        <style jsx>{`
        div {
            width: 100%;
          }
          img {
            width: 100%;
            height: 100%;
          }
        `}</style>
    </>
  )
}