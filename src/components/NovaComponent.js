import React from 'react'
import styles from './NovaComponent.module.css';
import HoneyComb from "../Images/projImage.png";

function NovaComponent() {
  return (
    <div className={styles.container}>
    <div className={styles.leftSection}>
    <img
        src={HoneyComb}
        alt=""
        // width='12px'
        className={styles.imageStyles}
                      />
    </div>
    <div className={styles.righSection}>
        <h1 className={styles.heading}>Business news delivered weekly.</h1>
        <p className={styles.para}>Stay up to date with the latest articles and business updates. You'll even get special recommendations weekly</p>
        <input className={styles.search} placeholder='Your Email'></input>
        <button className={styles.btn}>Subscribe</button>
    </div>

    </div>
  )
}

export default NovaComponent