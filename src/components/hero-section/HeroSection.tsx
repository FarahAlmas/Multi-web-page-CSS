import style from "./HeroSection.module.css";
import {italiana , instrumentSans} from "@/utils/font";
import Image from "next/image";

export default function HeroSection(){
    return(
        <div>
          <section className={style.hero}>
            <div className={style.heroLeft}>
              <h1 className={italiana.className}>Discover And
              <br/>Find Your
              <br/>
              Own Fashion</h1>
              <p className={instrumentSans.className}>Explore our curated collection of stylish clothing
              and accessories trailed to your unique taste</p>
              <button>Explore Now</button>
            </div>

            <div className={style.heroRight}>
              <div className={style.heroRightImg}>
                <Image src={"/images/mainImg.png"} alt="hero" width={410} height={576}
 />
              </div>
            </div>
            

          </section>
        </div>
)}