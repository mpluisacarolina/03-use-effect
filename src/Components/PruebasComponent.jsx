import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

  const [usuario, setUsuario] = useState("Luisa Carolina");
  const [fecha, setFecha] = useState ("19/09/1986");
  const [contador, setContador] = useState (0);
  const [contador2, setContador2] = useState (0);

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
    setContador(contador+1)
    console.log("Has modificado el usuario: " + contador);
  }, [usuario]);

  // Se ejecuta cuando hay cambio de fecha
  useEffect(() => {
    setContador2(contador2+1)
    console.log("Has modificado la fecha: " + contador2 + " veces");
  }, [fecha]);

  return (
    <div>
        <h1> El Efecto - Hook useEffect </h1>
        
        <strong className = { contador >= 10 ? 'label label-green' : 'label'} > {usuario} </strong>
        <strong className = { contador2 >= 10 ? 'label label-green' : 'label'} > { fecha } </strong>
        <p>
          <input type="text"
            onChange = { modUsuario }
            placeholder="Cambia el nombre"
          />
          <button onClick = { cambiarFecha }> Cambiar Fecha </button>

        </p>
        { usuario == "LUISA" && <AvisoComponent /> }
    </div>
  )
}
