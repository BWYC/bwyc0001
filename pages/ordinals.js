import React from 'react'
import Head from 'next/head'

const Ordinals = (props) => {
  return (
    <>
      <div className="ordinals-container">
        <Head>
          <title>Ordinals - bwyc</title>
          <meta property="og:title" content="Ordinals - bwyc" />
        </Head>
      </div>
      <style jsx>
        {`
          .ordinals-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
        `}
      </style>
    </>
  )
}

export default Ordinals
