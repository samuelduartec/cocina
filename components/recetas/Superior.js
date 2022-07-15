import React from "react";
import styles from "../../styles/components/recetas/Superior.module.scss"
import Imagen from "./Imagen"
import FichaTecnica from "./FichaTecnica";
import Ingredientes from "./Ingredientes";


const Superior = () => {
    return (
        <>  
            <div className={styles.header}> Receta 1</div>
            <div className={styles.gridSuperior}>
                <div className={styles.izquierda} >
                    <Imagen />
                    <FichaTecnica />
                    <Ingredientes />
                    

                </div>
                <div className={styles.derecha}>
                    <h1>titulo</h1>
                    <h2>Nombre del plato</h2>
                    <h3>Origen</h3>
                    <h4>Descripción</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis iaculis purus. Ut non tempus dolor. Curabitur nec hendrerit metus, vel scelerisque justo. Maecenas non vestibulum ex. Donec sagittis venenatis tortor id varius. Nulla vel facilisis metus, sed pulvinar nisi. Donec lacinia, erat a maximus laoreet, augue magna hendrerit justo, ut dignissim nibh erat vestibulum quam. Donec aliquet turpis a tellus volutpat, non efficitur urna facilisis. Mauris nec justo enim. In finibus convallis nibh in feugiat. Fusce sit amet leo in mi mollis tristique sed non neque. Mauris non nibh vel eros facilisis molestie. Mauris auctor cursus leo, a venenatis mauris iaculis eu. Nunc semper lacus orci, at condimentum arcu fermentum at.

Sed sollicitudin porta massa id molestie. Curabitur at libero leo. Nunc interdum feugiat maximus. Maecenas odio nulla, imperdiet sit amet congue non, feugiat sed lectus. Proin risus leo, rhoncus a ligula semper, elementum aliquam turpis. Quisque faucibus justo vel mauris dictum accumsan. Nam magna erat, ultricies porttitor sollicitudin ac, pellentesque et orci. Mauris vitae rhoncus ipsum, sit amet tincidunt felis. Curabitur volutpat at urna ac scelerisque. Integer maximus lectus nec lacinia pharetra. In dolor turpis, malesuada scelerisque nunc vitae, dignissim rutrum dolor. Nam scelerisque lorem et massa vestibulum, gravida sollicitudin justo pulvinar. Integer pretium orci nisi, in eleifend erat vulputate eu. Suspendisse ut dolor pharetra augue malesuada congue nec vel ante.
ed sollicitudin porta massa id molestie. Curabitur at libero leo. Nunc interdum feugiat maximus. Maecenas odio nulla, imperdiet sit amet congue non, feugiat sed lectus. Proin risus leo, rhoncus a ligula semper, elementum aliquam turpis. Quisque faucibus justo vel mauris dictum accumsan. Nam magna erat, ultricies porttitor sollicitudin ac, pellentesque et orci. Mauris vitae rhoncus ipsum, sit amet tincidunt felis. Curabitur volutpat at urna ac scelerisque. Integer maximus lectus nec lacinia pharetra. In dolor turpis, malesuada scelerisque nunc vitae, dignissim rutrum dolor. Nam scelerisque lorem et massa vestibulum, gravida sollicitudin justo pulvinar. Integer pretium orci nisi, in eleifend erat vulputate eu. Suspendisse ut dolor pharetra augue malesuada congue nec vel ante.

ed sollicitudin porta massa id molestie. Curabitur at libero leo. Nunc interdum feugiat maximus. Maecenas odio nulla, imperdiet sit amet congue non, feugiat sed lectus. Proin risus leo, rhoncus a ligula semper, elementum aliquam turpis. Quisque faucibus justo vel mauris dictum accumsan. Nam magna erat, ultricies porttitor sollicitudin ac, pellentesque et orci. Mauris vitae rhoncus ipsum, sit amet tincidunt felis. Curabitur volutpat at urna ac scelerisque. Integer maximus lectus nec lacinia pharetra. In dolor turpis, malesuada scelerisque nunc vitae, dignissim rutrum dolor. Nam scelerisque lorem et massa vestibulum, gravida sollicitudin justo pulvinar. Integer pretium orci nisi, in eleifend erat vulputate eu. Suspendisse ut dolor pharetra augue malesuada congue nec vel ante.</p>

                </div>
            </div>
        </>
    )
}

export default Superior