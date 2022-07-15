import React from "react";
import styles from '../../styles/components/recetas/Imagen.module.scss'
export default function Imagen(){
    return (
        <>
        <div className={styles.imagen}style={{backgroundImage:'url(receta.jpeg)'}}> </div>
       
        
        </>
    )
}