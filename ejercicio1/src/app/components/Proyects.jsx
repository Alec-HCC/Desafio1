import React from 'react';

const Proyects = ({ proyecto }) => {
  return (
    <div>
      <h2>Proyecto</h2>
      <p>Tipo de Proyecto: {proyecto.tipoProyecto}</p>
      <p>Categoría: {proyecto.categoria}</p>
      <p>Monto: {proyecto.monto}</p>
      <p>Fecha: {proyecto.fecha}</p>
      <p>Descripción: {proyecto.descripcion}</p>
    </div>
  );
};

export default Proyects;
