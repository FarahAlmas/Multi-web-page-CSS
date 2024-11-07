'use client'
import React from "react";
import Link from "next/link";
import { motion,AnimatePresence } from "framer-motion"
import { TiThMenu } from "react-icons/ti";
import  styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);
  const showFunc = () => {
    setOpen(!open)
  }
  return(
    <>
      <nav  className={styles.navbar}>
    <h1>FASHION.</h1>
    <AnimatePresence>
   {open == true ?(
    <motion.div className={`${styles.linksDiv} ${styles.adjust}`}
    key={"menu"} 
    initial={{height:"0px", opacity:0}}
    animate={{height:"350px", opacity:1}}
    exit={{height:"0px", opacity:0}}
    transition={{duration:3}}>
   <ul>
      <li><Link href="#!" style={{fontWeight:"800",textDecoration:"underline"}}>Home</Link></li>
      <li><Link  href="#!">Shop</Link></li>
      <li><Link  href="#!">Feature</Link></li>
      <li><Link  href="#!">Contact</Link></li>
    </ul>
    <button>LOGIN</button>
   </motion.div>
   
   ) : (
    <div className={`${styles.linksDiv}`}>
   <ul>
      <li><Link href="#!" style={{fontWeight:"800",textDecoration:"underline"}}>Home</Link></li>
      <li><Link  href="#!">Shop</Link></li>
      <li><Link  href="#!">Feature</Link></li>
      <li><Link  href="#!">Contact</Link></li>
    </ul>
    <button>LOGIN</button>
   </div>
  )}

  </AnimatePresence>
    <TiThMenu  size={35} className={styles.menu} onClick={showFunc}/>
    </nav>
    </>
    
  )
}