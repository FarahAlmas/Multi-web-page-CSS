import { FaFacebook, FaTwitter,FaInstagramSquare  } from "react-icons/fa";
import styles from "@/components/footer/Footer.module.css"
import {inter,ibmPlexSerif} from "@/utils/font";

export default function Footer(){
  return(
    <div>
      <section className={`${styles.footer} ${inter.className}`}>
        <div className={styles.fashion}>
          <h1>FASHION.</h1>
          <p className={ibmPlexSerif.className}>SOCIAL MEDIA</p>
          <div className={styles.iconsDiv}>
          <FaFacebook size={40} color="blue"/>
          <FaTwitter size={40} color="blue"/>
          <FaInstagramSquare size={40} color='#E1306C'/>
          </div>
          </div>
          <div className={styles.shopDiv}>
            <h1>SHOP</h1>
            <ul>
              <li>Product</li>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Release</li>
              </ul>
          </div>
          <div  className={styles.companyDiv}>
            <h1>COMPANY</h1>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>News</li>
              <li>Support</li>
              </ul>
          </div>
          <div className={styles.submitDiv}>
            <h1>STAY UP TO DATE</h1>
            <div className={styles.inputDiv}>
              <input type="text" placeholder="Enter your email" className={styles.input}/>
              <button>SUBMIT</button>
            </div>
          </div>
      </section>
    </div>
  )
}