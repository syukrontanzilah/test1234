'use client'
import React from 'react';
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
  RiReactjsFill,
  RiReactjsLine,
  RiNotionFill,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiGithubFill,
  RiBootstrapFill,
  RiNextjsFill
} from 'react-icons/ri';
import { SiVisualstudio, SiClickup, SiMui,SiStyledcomponents, SiFigma, SiAxios } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaSass } from "react-icons/fa6";



const icons = [
    {name: 'yutube', icon: <DiVisualstudio />},

    // {name: 'yutube', icon: <RiJavascriptFill/>},
    // {name: 'yutube', icon: <BiLogoTypescript />},

    {name: 'yutube', icon: <RiReactjsFill/>},
    {name: 'yutube', icon: <RiReactjsLine/>},
    {name: 'yutube', icon: <RiNextjsFill />},
    {name: 'yutube', icon: <RiBootstrapFill/>},
    {name: 'yutube', icon: <SiMui />},
    {name: 'yutube', icon: <RiTailwindCssFill/>},
    {name: 'yutube', icon: <FaSass />},
    {name: 'yutube', icon: <SiStyledcomponents />},
    {name: 'yutube', icon: <RiNotionFill/>},
    {name: 'yutube', icon: <SiClickup />},
    {name: 'yutube', icon: <SiFigma />},
    {name: 'yutube', icon: <SiAxios />},
    {name: 'yutube', icon: <RiGithubFill/>},




]

const Tools = ({containerStyles, iconStyles}) => {
    return (
      <div className={`${containerStyles}`}>
        {icons.map((data,index)=>{
          return(
            <div key={index} className={`${iconStyles}`}>
              {data.icon}
            </div>
          )
        })}
        </div>
    )
  }

export default Tools