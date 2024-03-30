'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen flex-col m-6">
      {/**menu button*/}
      <div className='sticky top-6 w-full flex font-bold justify-between items-center'>
            <div className=''>
            <Image src="/icon.svg" alt="Shariah Viz Icon" width={50} height={50}/>
            </div>
            <div className=''>
            <Button className="flex text-white bg-blue-800 hover:bg-blue-600">Client Area</Button>
            </div>
        </div>
      
      {/**hero */}
      <div>
      <div className="flex flex-col h-screen items-center justify-center gap-3">
        <span className="text-5xl text-slate-900 font-bold">Welcome to</span>
        <Image src="/logo.svg" alt="Shariah Viz Logo" width={500} height={100} priority/>
        <span className="text-md text-slate-600">Analyze your annual financial reports in seconds</span>
      </div>
      </div>
    </main>
  );
}
