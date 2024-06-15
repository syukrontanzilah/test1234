"use client"
import Image from "next/image";
import axios from "axios";
import {useState, useEffect} from 'react'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Review from "@/components/Review";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Review/>
    </main>
  );
}
