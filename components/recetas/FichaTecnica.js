import React from "react";
import { useState } from "react"

import styles from '../../styles/components/recetas/FichaTecnica.module.scss'

export default function FichaTecnica(){
    const [count, setCount] = useState(0)

    const data = {
        nutrientes: {
            calorias: {
                cantidad:2000,
                porcentaje: "20%"
            },
            proteinas: {
                cantidad: 2800,
                porcentaje: "25%"
            },
            carbohidratos: {
                cantidad:3000,
                porcentaje: "10%"
            }
        }
    }
    const ciudades = [
        "Mónaco",
        "Berlin",
        "Nueva York",
        "Medellin mor",
    ]

    

    const a = "ESto es una string"
    const b = [1,2,4,3,5,43,5]
    const c = {
        titulo: "esta es un objeto",
        descripcion: "Sirve para organizar muuuuuuchos datos"
    }
    const hoy = new Date();

   


    const handleClick = () => {
        setCount(count+1)
    }

    return (
        <>
        
        <div className={styles.ficha}>
            <div onClick={handleClick} className={styles.titulo}> Ficha tecnica {count}</div>
            <div className={styles.container}>
                <div className={styles.datos}>
                    <div className={styles.calorias}>Calorías {data.nutrientes.calorias.cantidad}</div>
                    <div className={styles.proteinas}>Proteínas {data.nutrientes.proteinas.cantidad}</div>
                    <div className={styles.carbohidratos}>Carbohidratos {data.nutrientes.carbohidratos.cantidad}</div>
                </div>
                <div className={styles.porcentajes}>
                    <div className={styles.veinte}>20%</div>
                    <div className={styles.veinticinco}>25%</div>
                    <div className={styles.diez}>10%</div>
                </div>
                <div className={styles.ciudades}>
                <ul>
                    {ciudades.map( (ciudad, i) => {
                        return <li key={i}>{ciudad}</li>
                    } )}
                   
                </ul>
                 </div>
            </div>
        </div>
        </>
    )
}