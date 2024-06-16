import React from 'react'
import Image from 'next/image'

const DevImg = ({containerStyles, imgSrc, height, width }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image 
      src={imgSrc} 
      fill 
      priority
      alt='img-dev'
      // height={height}
      // width={width}
      />
    </div>
  )
}

export default DevImg

export const DevImgAbout = ({containerStyles, imgSrc, height, width }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image 
      src={imgSrc} 
      // fill 
      priority
      alt='img-dev'
      height={height}
      width={width}
      />
    </div>
  )
}


