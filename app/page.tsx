import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="text-center p-5">
      <div className="flex justify-center items-center">
        <Image 
          className="mx-center"
          width={500}
          height={500}
          src={`/logo.svg`}
          alt="Logo Cafeteria"
        />
      </div>
    
      <br />
      <br />
     
     <div>
      <Link
        className="bg-indigo-600 hover:bg-indigo-800 text-white mt-52 rounded-lg p-5 uppercase font-black cursor-pointer w-full" 
        href={`/order/cafe`}>
        
        IR AL MENU
        
      </Link>
      </div>
    </div>
    
    </>
   
  )
}
