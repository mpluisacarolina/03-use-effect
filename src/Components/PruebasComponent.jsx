import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {

  const [usuario, setUsuario] = useState("Luisa Carolina");
  const [fecha, setFecha] = useState ("19/09/1986");

  const modUsuario = e => {
    setUsuario (e.target.value);
  };

  const cambiarFecha = e => {
    setFecha(Date.now());
  }

  //Solo se ejecuta al cargar el componente
  useEffect(() => {
    console.log("Has cargado el componente PruebasComponent");
  }, []);

    //Se ejecuta cuando cambio el usuario
  useEffect(() => {
    console.log("Has modificado el usuario");
  }, [usuario]);

  return (
    <div>
        <h1> El Efecto - Hook useEffect </h1>
        
        <strong className = 'label' > {usuario} </strong>
        <strong> { fecha } </strong>
        <p>
          <input type="text"
            onChange = { modUsuario }
            placeholder="Cambia el nombre"
          />
          <button onClick = { cambiarFecha }> Cambiar Fecha </button>

        </p>

    </div>
  )
}
