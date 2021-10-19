import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {
        //Obtener el STATE de proyectos
        const proyectosContext = useContext(proyectoContext);
        const { proyectoActual } = proyectosContext;

        //obtener el STATE de las tareas
        const tareasContext = useContext(tareaContext);
        const { obtenerTareas } = tareasContext;

        //Funcion para definir el proyecto actual
        const seleccionarProyecto = id => {
            proyectoActual(id); //asigan un proyecto seleccionado 
            obtenerTareas(id);  //Filtra las tareas del proyecto
        }
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto.id) }
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;