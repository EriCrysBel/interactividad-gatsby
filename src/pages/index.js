import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import LigthSwicth from "../components/ligthswicth/ligthswitch"
import AlertButton from "../components/alertbutton/alertbutton"
import Button from "../components/button/Button"
import Contador from "../components/contador/contador"
import LigthDark from "../components/ligthdark/ligthdark"
import FormCapName from "../components/formcapname/formcapname"


const IndexPage = () => {
  function saludar(amigo){
    alert (`Hola ${amigo}`)
  }
  function saludar2 (){
    alert('Eres un ternurín')
}
  return(
  <>
  <Layout>
    <button className='btn' onClick={()=>alert('Has hecho click')}>Haz click</button>
    <button onClick={()=>saludar('Millie')}>Haz click otra vez</button>
    <button onClick={function(){saludar('Pauly D')}}>Saludar a Pauly D</button>
    <button onClick={()=>{
      saludar('Vinnie')
      saludar('Todo el mundo')
    }}>Saludar a Vinnie</button>
    <LigthSwicth>
    </LigthSwicth>

    <AlertButton message = 'Holi perre verge'>
      Saluda
    </AlertButton>

    <Button action= 'saludar'>
      Hazme reir
    </Button>
    <br></br>
    <Contador></Contador>
    <br></br>
    <LigthDark>
      <p>Hola Perris, soy el amor de tu vida</p>
    </LigthDark>
    <FormCapName></FormCapName>
    </Layout>
  </>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage