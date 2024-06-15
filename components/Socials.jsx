'use client'
import React from 'react';
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill
} from 'react-icons/ri';
import Link
 from 'next/link';

const icons = [
  // {path:'/', name: <RiYoutubeFill/>},
  {path:'https://www.linkedin.com/in/syukron-tanzil-709750151', name: <RiLinkedinFill/>},
  {path:'https://github.com/syukrontanzilah', name: <RiGithubFill/>},
  // {path:'/', name: <RiFacebookFill/>},
  {path:'', name: <RiInstagramFill/>},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon,index)=>{
        return(
          <Link className='' href={icon.path} key={index}>
          <div className={`${iconStyles}`}>
            {icon.name}
          </div>
          </Link>
        )
      })}
      </div>
  )
}

export default Socials