import React, {useState} from 'react'

const FormCapName = () => {
  const [nombre, setNombre] = useState("")
  const handleChangeNombre = (event) => {
    setNombre(event.target.value)
  }
  return (
    <>
      <div>
        <label>
          Nombre
          <input type="text" name="name" placeholder="Enter your name" value={nombre} onChange={handleChangeNombre} />
        </label>
      </div>
      <p></p>
    </>
  )
}

export default FormCapName