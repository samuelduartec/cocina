import React from "react";
import styles from '../../styles/components/recetas/Ingredientes.module.scss'

export default function Ingredientes(){
    const ingredientes = [
        {
            nombre: "Arroz Blanco",
            cantidad: "2 tazas",
            precio: "$2.000"
        },
        {
            nombre: "Arroz de coco",
            cantidad: "3 tazas",
            precio: "$3.000"
        },
        {
            nombre: "LEche",
            cantidad: "4 tazas",
            precio: "$4.000"
        },
        {
            nombre: "Aceite",
            cantidad: "2 tazas",
            precio: "$2.000"
        },
        {
            nombre: "Agua",
            cantidad: "2 tazas",
            precio: "$2.000"
        },
        {
            nombre: "Sal",
            cantidad: "2 tazas",
            precio: "$2.000"
        },
    ]



    return (
        <>
        <div className={styles.texto}>

            {ingredientes.map( (ingrediente, i) => {
                return(
                    <div key={i} className={styles.ingrediente}>
                        <div className={styles.nombre}>Nombre: {ingrediente.nombre}</div>
                        <div className={styles.cantidad}>cantidad: {ingrediente.cantidad}</div>
                        <div className={styles.precio}>precio: {ingrediente.precio}</div>
                    </div>
                )
            } )}
          
        </div>
        </>
    )
}