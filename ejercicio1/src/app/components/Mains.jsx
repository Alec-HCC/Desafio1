"use client"
import React, { useState } from 'react';
import FormularioProyect from '../components/FormularioProyect';
import Proyects from '../components/Proyects';

const Mains = () => {
  const [proyectos, setProyectos] = useState([]);

  const handleRegistroProyecto = (nuevoProyecto) => {
    setProyectos([...proyectos, nuevoProyecto]);
  };

  const handleEliminarProyecto = (index) => {
    const nuevosProyectos = [...proyectos];
    nuevosProyectos.splice(index, 1);
    setProyectos(nuevosProyectos);
  };

  const sumarMontoCategoriaAP = () => {
    return proyectos
      .filter((proyecto) => proyecto.categoria === 'Ambientales')
      .reduce((total, proyecto) => total + parseFloat(proyecto.monto), 0);
  };

  const sumarMontoCategoriaNAP = () => {
    return proyectos
      .filter((proyecto) => proyecto.categoria === 'No ambientales')
      .reduce((total, proyecto) => total + parseFloat(proyecto.monto), 0);
  };

  const calcularTotalMonto = () => {
    return proyectos.reduce((total, proyecto) => total + parseFloat(proyecto.monto), 0);
  };

  return (
    <>
      <div class="container">
        <div class="contTop">
          <section class="contName">
            <h1 class="header">Presupuesto Proyectos</h1>
          </section>
          <section class="contPrice">
            <h1 class="price">Total: ${calcularTotalMonto().toFixed(2)}</h1>
          </section>
        </div>

        <div className="conta">
          <section class="ContLeft" id="left">
            <FormularioProyect onRegistro={handleRegistroProyecto} />
          </section>
          <section class="ContRight" id="right">
            <div>
              <h2>Proyectos Ambientales</h2>
              {proyectos
                .filter((proyecto) => proyecto.categoria === 'Ambientales')
                .map((proyecto, index) => (
                  <div key={index}>
                    <Proyects proyecto={proyecto} />
                    <p>Precio Unitario: ${parseFloat(proyecto.monto)}</p>
                    <button onClick={() => handleEliminarProyecto(index)}>Eliminar</button>
                  </div>
                ))}
              <p>Total Monto Proyectos Categoría Ambientales:{sumarMontoCategoriaAP().toFixed(2)}</p>
            </div>

            <div>
              <h2>Proyectos No ambientales</h2>
              {proyectos
                .filter((proyecto) => proyecto.categoria === 'No ambientales')
                .map((proyecto, index) => (
                  <div key={index}>
                    <Proyects proyecto={proyecto} />
                    <p>Precio Unitario: ${parseFloat(proyecto.monto)}</p>
                    <button onClick={() => handleEliminarProyecto(index)}>Eliminar</button>
                  </div>
                ))}
              <p>Total Monto Proyectos Categoría No ambientales: ${sumarMontoCategoriaNAP().toFixed(2)}</p>
            </div>
          </section>
        </div>

        <div>

        </div>
      </div>
    </>
  );
};

export default Mains;
