"use client"
import Image from "next/image";
import axios from "axios";
import {useState, useEffect} from 'react'


export default function Home() {
   const [first, setfirst] = useState("")

   useEffect(() => {
   }, [])
   

  return (
    <div>
      test aja ya
      <br/>
      <input placeholder="Input disini ya"/>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-calendar" viewBox="0 0 16 16">
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
      </svg>
      <Image
        alt="person"
        src="https://cdn1-production-images-kly.akamaized.net/x7iMv-AbVp3elet3scpHjXjAw6U=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2703595/original/033282200_1547455492-revalina-20190114-003-agus.jpg"
        width={250}
        height={250}
/>
      <Image
        alt="person2"
        src="/revalina.jpg"
        width={300}
        height={300}
/>
    </div>
  );
}
