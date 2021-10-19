import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el STATE del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario,  mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;
 
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //Extraer el nombre del proyecto
    const { nombre } = proyecto;

    //cuando el usuario cambia el nombre del proyecto
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        //Validar el proyecto
        if(nombre == ''){
            mostrarError();
            return;
        }
        //agregar al state
        agregarProyecto(proyecto);
        //Reiniciar el form
        guardarProyecto({
            nombre:''
        })
        
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ () => mostrarFormulario() }
            >Nuevo proyecto </button>
            { formulario ? 
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre proyecto"
                        name="nombre" 
                        value={nombre}
                        onChange={onChangeProyecto}
                    />

                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar proyecto" 
                    />
                    </form>
                )
                : null
            }
            { errorformulario  ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null}
        </Fragment>
     );
}
 
export default NuevoProyecto;