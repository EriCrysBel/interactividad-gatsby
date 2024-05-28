import * as React from "react"
import * as styles from "../ligthswicth/ligthswicth.module.css"

// function LigthSwicth(){

// }
// const LigthSwicth = function(){

// }
const LigthSwicth = () =>{
    function alternarLuces(){
        const bodyStyle = document.body.style
        // if(bodyStyle.backgroundColor === 'black'){
        //     bodyStyle.backgroundColor = 'white'
        // }else{
        //     bodyStyle.backgroundColor = 'black'
        // }
        // alert('allright')
        bodyStyle.backgroundColor==='black'? bodyStyle.backgroundColor= 'white': bodyStyle.backgroundColor = 'black'
    }

    return(
        <button className={styles.btn} onClick={alternarLuces}>Alterna las luces</button>
    )
}
export default LigthSwicth