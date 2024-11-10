"use client";

import styles from "./BestSelling.module.css";
import { abhayaLibre } from "@/utils/font";
import { FaStar } from "react-icons/fa";
import {cardData} from "@/constant/card";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function BestSelling() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay:2000,stopOnInteraction:false,stopOnMouseEnter:true})])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div>
      <section className={styles.bestSelling}>
        <h1 className={abhayaLibre.className}>
          Buy Now for <br />
          New Collection
        </h1>
        <p className={abhayaLibre.className}>
          lorem ipsum dolor sit amet consectetur
        </p>
        <div className={`${styles.cardSection} ${styles.embla}`} ref={emblaRef}>
          <div className={styles.embla__container}>
            {cardData.map((data)=>{return (

            <div className={styles.embla__slide}  key={data.id}>
              <div className={styles.imgDiv} style={{backgroundColor : data.backgroundColor}}>
                <Image
                  src={data.src}
                  alt={"pic"}
                  width={357}
                  height={560}
                  className={styles.cardImg}
                ></Image>
              </div>
              <div className={styles.cardText}>
                <h1>Regular fit long sleeve suit</h1>
               <pre>{data.price}  |  {data.rating}.0 <FaStar className={styles.star} color="yellow" size={"20px"}/></pre>
              </div>
            </div>
           )})}
        </div>
        </div>
        <Link href={"./shop"}><button>See more</button></Link>
      </section>
    </div>
  );
}
