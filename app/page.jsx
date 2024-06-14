"use client"
import Image from "next/image";
import axios from "axios";
import {useState, useEffect} from 'react'
import Hero from "@/components/Hero";
import About from "@/components/About";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
    </main>
  );
}
