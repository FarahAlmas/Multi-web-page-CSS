import styles from "./ProductDetails.module.css"
import Image from "next/image"
import { aBeeZee } from "@/utils/font";
import { cardData } from "@/constant/card";


export default function ProductDetails(props:{cardid:number}){
  let data = cardData.find((item)=>{return item.id == props.cardid})
  return(
    <div>
      <section className={styles.productDetail}>
        <div className={styles.leftImgDiv} style={{backgroundColor: data?.backgroundColor}}>
          <Image src={data?.src || "/images/shop.png"} alt={"pic"} width={400} height={600} className={styles.img}></Image>
        </div>

        <div className={styles.rightTextDiv}>
          <h1 className={aBeeZee.className}>{data?.heading}</h1>
          <p>{data?.price}</p>
          <div className={styles.cartDiv}>
          <input type="number" value={1}/>
          <button>ADD TO CART</button>
          </div>
          <p style={{fontSize:"30px"}}>Product Details</p>
          <p style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit cumque provident sit, culpa aperiam doloremque voluptatum facilis officia? Eius veniam eos placeat distinctio earum ratione reiciendis amet beatae minima perferendis rerum saepe libero quae, modi quisquam omnis dolores excepturi quibusdam adipisci voluptatem dolore ullam accusantium consectetur voluptates. Esse cupiditate ullam deserunt dolorum doloribus natus blanditiis ipsam earum enim qui hic odit perspiciatis neque numquam atque nostrum ratione itaque, aperiam rem iusto sed porro nisi? Iste assumenda laboriosam, eveniet, asperiores cupiditate provident porro quasi placeat totam doloribus voluptatum suscipit animi eius recusandae veniam reprehenderit facere velit fuga consequuntur vero quas.</p>
          
        </div>
      </section>
    </div>
  )   
}