import React from "react";
import styles from "../../styles/components/recetas/Superior.module.scss"
import Imagen from "./Imagen"
import FichaTecnica from "./FichaTecnica";
import Ingredientes from "./Ingredientes";

const Superior = () => {
    return (
        <>
            <div className={styles.gridSuperior}>
                <div className={styles.izquierda}>
                    <Imagen />
                    <FichaTecnica />
                    <Ingredientes />

                </div>
                <div className={styles.derecha}>
                    <h1>titulo</h1>
                    <p>lorem....</p>

                </div>
            </div>
        </>
    )
}

export default Superior