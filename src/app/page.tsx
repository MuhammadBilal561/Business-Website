"use client"
import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Image from "next/image";
import Response from "@/components/Response";
import Newslatter from "@/components/Newslatter";
import Fotter from "@/components/Fotter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero/>
      <Brands/>
      <Services/>
      <Pricing/>
      <Response/>
      <Newslatter/>
      <Fotter/>
    </main>
  );
}
