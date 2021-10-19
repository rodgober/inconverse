import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {v4 as uuid} from "uuid"; 

import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA, 
    ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA, LIMPIAR_TAREA } from '../../types/index'

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Tarea Uno1', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Tarea Dos2', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Tarea Tres3', estado: false, proyectoId: 3},
            { id: 4, nombre: 'Tarea Cuatro4', estado: true, proyectoId: 4},
            { id: 5, nombre: 'Tarea Uno5', estado: true, proyectoId: 4},
            { id: 6, nombre: 'Tarea Dos6', estado: false, proyectoId: 3},
            { id: 7, nombre: 'Tarea Tres7', estado: false, proyectoId: 2},
            { id: 8, nombre: 'Tarea Cuatro8', estado: true, proyectoId: 1},
            { id: 9, nombre: 'Tarea Uno9', estado: true, proyectoId: 2},
            { id: 10, nombre: 'Tarea Dos10', estado: false, proyectoId: 3},
            { id: 11, nombre: 'Tarea Tres11', estado: false, proyectoId: 4},
            { id: 12, nombre: 'Tarea Cuatro12', estado: true, proyectoId: 1}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    //Crear las funciones
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO, 
            payload: proyectoId
        })
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuid();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }
    
    //Validar y muestra error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar tarea por ID
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //Cambia el estado de la tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Extrae una tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //Elimina la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>    
    )
}

export default TareaState;