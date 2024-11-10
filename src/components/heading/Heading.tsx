import styles from "./Heading.module.css"
export default function Heading(){
  return (
    <div className={styles.heading}>
      <h1>OUR PRODUCT</h1>
      <div className={styles.underline}></div>
      <p>Here you can check our new product with fair price on Fashion.</p>
    </div>

  )
}