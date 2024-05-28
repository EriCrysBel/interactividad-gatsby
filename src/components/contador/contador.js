// import * as React from "react"
import React,{useState} from "react"

const Contador = ()=>{
    const [contador,setContador] = useState(0)
    function acumular(){
        // alert('Estás acumulando')
        setContador(contador + 1)
    }
    return (
        <>
        <button onClick={()=>acumular()}>Acumula</button>
        <div>{contador}</div>
        </>
    )
}
export default Contador