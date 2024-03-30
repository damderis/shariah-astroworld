import Image from "next/image";
const Report = () => {

    return (
        <div className="w-fit h-screen justify-between flex flex-col p-6 items-center">
            {/**Title Report */}
            <div>
            <Image src="/shariahtick.svg" alt="Shariah Viz Icon" width={200} height={50}/>
            </div>
            {/**Scrap website table */}
            <div></div>
            {/**Copyright */}
            <div className="text-md text-slate-600">
                Copyright by ShariahViz Sdn Bhd 2024
            </div>
        </div>
        )
}

export { Report }