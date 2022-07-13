import React from "react";
import styles from '../styles/components/Inferior.module.scss'
const Inferior = () => {
    return (
        <>
        <div className={styles.titulo}>Síguenos en redes sociales</div>
        
        <div className={styles.redes}> 
           <div className={styles.facebook} style={{backgroundImage:'url(facebook.jpg)'}}></div>
           <div className={styles.instagram} style={{backgroundImage:'url(instagram.jpg)'}}></div>
           <div className={styles.whatsapp} style={{backgroundImage: 'url(whatsapp.JPG)'}}></div>
            
        </div>

        <div className={styles.video}><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   </div>
       
        </>
    )
}
export default Inferior 