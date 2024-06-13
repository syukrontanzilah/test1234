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
      ini halaman depan
      <br/>
      <Image
        alt="person"
        src="https://cdn1-production-images-kly.akamaized.net/x7iMv-AbVp3elet3scpHjXjAw6U=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2703595/original/033282200_1547455492-revalina-20190114-003-agus.jpg"
        width={250}
        height={250}
      />
    </div>
  );
}
