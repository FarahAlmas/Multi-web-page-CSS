import BestSelling from "@/components/best-selling/BestSelling";
import ProductDetails from "@/components/product-details/ProductDetails";

export default function DynamicProduct({params}:{params:{id:number}}){

  return (
    <div>
      <ProductDetails cardid={params.id}/>
      <BestSelling/>
    </div>
  )

}