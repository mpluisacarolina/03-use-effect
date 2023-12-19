import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");

    //Genérico / Básico
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "mpluisacarolina@gmail.com",
                "first_name": "Luisa",
                "last_name": "Marín"
            },
            {
                "id": 2,
                "email": "vdavidhg@gmail.com",
                "first_name": "Victor",
                "last_name": "Herrera"
            },
            {
                "id": 3,
                "email": "tdherreram@gmail.com",
                "first_name": "Thomás",
                "last_name": "Herrera"
            },
            {
                "id": 4,
                "email": "tdhmarin@gmail.com",
                "first_name": "Thiago",
                "last_name": "Herrera"
            },
        ])
    }

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(resultado_final => {
                setUsuarios(resultado_final.data);
                console.log(usuarios)
            },
                error => {
                    console.log(error);
                }
            )
    }

    const getUsuariosAjaxAW = () => {
        setTimeout(async () => {
            try {
                const peticion = await fetch("https://reqres.in/api/users?page=1");
                const { data } = await peticion.json();
                setUsuarios(data);
                setCargando(false);
            } catch (error) {
                console.log(error.message);
                setErrores(error.message);
            }
        }, 2000);
    }

    useEffect(() => {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAjaxAW();
    }, []);

    if (errores !== ""){
        //Cuando pasa algún errror
        return (
            <div className='errores'>
                {errores}
            </div>
        )
    }

    else if (cargando == true) {
        //Cuando está todo cargando
        return (
            <div className='cargando'>
                cargando datos...

            </div>
        )
    }
    else if(cargando== false && errores === "") {
        // Cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios vía Ajax</h2>
                <ol className='usuarios' >
                    {
                        usuarios.map(usuario => {
                            console.log(usuario);
                            return (<li key={usuario.id}>
                                <img src={usuario.avatar} width="20" />
                                &nbsp;
                                {usuario.first_name} {usuario.last_name}
                            </li>);
                        })
                    }
                </ol>
            </div>
        )
    }
}

