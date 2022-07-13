import React from "react";
import styles from '../styles/components/Centro.module.scss'
const Centro = () => {
    return (
        <>
        <div className={styles.container}> 
            <div className={styles.centroTitle}>Intro</div>
            <div className={styles.centroGrid}>
                <div className={styles.cuadro}>
                    <div className={styles.bolita}></div>
                    <div className={styles.letas}>
                        <div className={styles.subtitulo}>Las más deliciosas recetas</div>
                        <div className={styles.parrafo}>Tenemos un amplio menu suculento con los platos mas deliciosos</div>
                    </div>
                </div> 
                <div className={styles.cuadro}>
                    <div className={styles.bolita}></div>
                    <div className={styles.letas}>
                        <div className={styles.subtitulo}>Las más deliciosas recetas</div>
                        <div className={styles.parrafo}>Tenemos un amplio menu suculento con los platos mas deliciosos</div>
                    </div>
                </div> 
                <div className={styles.cuadro}>
                    <div className={styles.bolita}></div>
                    <div className={styles.letas}>
                        <div className={styles.subtitulo}>Las más deliciosas recetas</div>
                        <div className={styles.parrafo}>Tenemos un amplio menu suculento con los platos mas deliciosos</div>
                </div>
                </div> 
                <div className={styles.cuadro}>
                    <div className={styles.bolita}></div>
                    <div className={styles.letas}>
                        <div className={styles.subtitulo}>Las más deliciosas recetas</div>
                        <div className={styles.parrafo}>Tenemos un amplio menu suculento con los platos mas deliciosos</div>
                    </div>
                </div> 
   
            </div>
        </div>

        <div className={styles.platos}>

            <div className={styles.plato} style={{backgroundImage:'url(plato1.jpg)'}} >
            <div className={styles.data}>
                <div className={styles.receta}>Plato receta 1</div>
                <div className={styles.tiempo}>Tiempo estimado: 30 min</div>
                <div className={styles.dificultad}>Dificultad</div>
                <div className={styles.comensales}>Número de comensales: 3</div>
            </div> 
        </div>
        <div className={styles.plato} style={{backgroundImage:'url(plato2.jpg)'}}  >
            <div className={styles.data}>
            <div className={styles.receta}>Plato receta 2</div>
                <div className={styles.tiempo}>Tiempo estimado: 20 min</div>
                <div className={styles.dificultad}>Dificultad</div>
                <div className={styles.comensales}>Número de comensales: 4</div>
            </div> 
        </div>
        <div className={styles.plato} style={{backgroundImage:'url(plato3.jpg)'}}>
                <div className={styles.data}>
                    <div className={styles.receta}>Plato receta 3</div>
                    <div className={styles.tiempo}>Tiempo estimado: 40 min</div>
                    <div className={styles.dificultad}>Dificultad</div>
                    <div className={styles.comensales}>Número de comensales: 3</div>
                </div> 
            </div>
            <div className={styles.plato} style={{backgroundImage:'url(plato4.jpg)'}}>
                <div className={styles.data}>
                    <div className={styles.receta}>Plato receta 4</div>
                    <div className={styles.tiempo}>Tiempo estimado: 50 min</div>
                    <div className={styles.dificultad}>Dificultad alta</div>
                    <div className={styles.comensales}>Número de comensales: 2</div>
                </div> 
            </div>
        <div className={styles.plato} style={{backgroundImage:'url(plato5.jpg)'}}>
                <div className={styles.data}>
                    <div className={styles.receta}>Plato receta 5</div>
                    <div className={styles.tiempo}>Tiempo estimado: 60 min</div>
                    <div className={styles.dificultad}>Dificultad</div>
                    <div className={styles.comensales}>Número de comensales: 4</div>
                </div> 
        </div>
            <div className={styles.plato} style={{backgroundImage:'url(plato6.jpg)'}}>
                <div className={styles.data}>
                    <div className={styles.receta}>Plato receta 6</div>
                    <div className={styles.tiempo}>Tiempo estimado: 45 min</div>
                    <div className={styles.dificultad}>Dificultad fácil</div>
                    <div className={styles.comensales}>Número de comensales: 3</div>
                </div> 
            </div>
            
        </div>
        </>
    )
}
export default Centro 