"use client"

import { Product } from "@prisma/client"
import { useStore } from "@/src/store"

type AddProductsButtonProps = {
    product: Product
}

export default function AddProductsButton({product} : AddProductsButtonProps) {

    const addToOrder = useStore((state)=> state.addToOrder )

  return (
    <button
        type='button'
        onClick={ () => addToOrder( product ) }
        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-black cursor-pointer">
        Agregar
    </button>
  )
}
