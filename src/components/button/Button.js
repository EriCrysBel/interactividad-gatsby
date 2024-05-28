import * as React from "react"

const Button = ({action, children})=>{
    // function saludar (){
    //     alert('Eres un ternurín')
    // }
    return(
        <button onClick={action}>
            {children}
        </button>
    )
}

export default  Button