"use client"
import Image from "next/image";
import axios from "axios";
import {useState, useEffect} from 'react'
import Hero from "@/components/Hero";


export default function Home() {
   const [first, setfirst] = useState("")

   useEffect(() => {
   }, [])
   

  return (
    <main>
      <Hero/>
    </main>
  );
}
