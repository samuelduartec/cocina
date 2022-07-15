import React from "react";
import styles from "../styles/components/Superior.module.scss"
import Link from 'next/link'
const Superior = () => {
    return (
        <>
        <div className={styles.header}>
            <div className={styles.izquierda}>Cocina de Hakiri</div>
            <div className={styles.derecha}>
                <div className={styles.navItem}>Recetas</div>  
                <div className={styles.navItem}>Nosotros</div>  
                <div className={styles.navItem}>Contacto</div>  
            </div> 
        </div>
        
        <div className={styles.portada} style={{backgroundImage:'url(cocina.jpg)'}}>
            <div className={styles.title}>Bienvenido a la cocina de Hakiri</div>  
            <div className={styles.button} >
                <Link href={"/receta"}>
                    <a>Ver recetas</a>
                </Link>
            </div>
        </div>
        
    
        </>
    )
}
export default Superior 