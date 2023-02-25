import React from 'react'
import hex from "./../../images/Hex.svg"
import "./../Overview/overview.css"

const Overview = () => {
  return (
    <>
    <div className='map' >
    <img src={hex} alt="map" className='map-container' />
   
    </div>
    
    </>
  )
}

export default Overview
