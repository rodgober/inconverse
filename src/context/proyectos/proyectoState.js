import React, { useReducer } from 'react';
import {v4 as uuid} from "uuid"; 

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGA_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO } from '../../types';

const ProyectoState = props => {

    const proyectos = [
        { id:1, nombre: 'Tienda virtual'},
        { id:2, nombre: 'Intranet'},
        { id:3, nombre: 'Diseño de sitio web'}
    ]

    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null
    }
    //dispatch para crear las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)
    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    //Obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }
    //Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();
        dispatch({
            type: AGREGA_PROYECTO,
            payload: proyecto
        })
    }

    //Validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el proyecto donde el usuario dio clic
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //Elimina un proyecto
    const eliminarProyecto = proyectoId =>{
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    } 
    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;