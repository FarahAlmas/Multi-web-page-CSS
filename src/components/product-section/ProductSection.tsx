import { FaStar } from "react-icons/fa";
import styles from "./ProductSection.module.css"
import Image from "next/image";
import { cardData } from "@/constant/card";
import Link from "next/link";

export default function ProductSection(){
  return(
<div>
  <section className={styles.product}>
    {cardData.map((item, index) =>{
      return(
        <Link href={`./shop/${item.id}`}>

        <div className={styles.card} key={index}>
          <div className={styles.topImgDiv} style={{ backgroundColor:item.
          backgroundColor}}>
          <Image src={item.src} alt={"picture"} width={300} height={600}
          className={styles.cardImg}></Image>
          </div>
          <div className={styles.bottomTextDiv}>
            <div className={styles.starDiv}>
              {[...Array(item.rating)].map((_,index) => {
                return <FaStar  color="orange" size={32} key={index}/>
              })}
            </div>
            <p style={{fontSize:"1.25rem"}}>{item.heading}</p>
            <p style={{fontWeight:600}}>{item.price}</p>
          </div>
           </div>
        
        </Link>
      )
    })}

   </section>
   </div>
  )}