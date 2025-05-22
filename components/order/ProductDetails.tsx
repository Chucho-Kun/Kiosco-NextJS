import { OrderItem } from "@/src/types"

type ProductDetailsProps = {
    item: OrderItem
}

export default function ProductDetails( {item} :ProductDetailsProps ) {

console.log(item)

  return (
    <div>
        ProductDetails
    </div>
  )
}
