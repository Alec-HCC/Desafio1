import React, { useState } from 'react';

const FormularioProyect = ({ onRegistro }) => {
    const [categoria, setCategoria] = useState('');
    const [tipoProyecto, setTipoProyecto] = useState('');
    const [monto, setMonto] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleRegistro = () => {
        const nuevoProyecto = { categoria, tipoProyecto, monto, fecha, descripcion };
        onRegistro(nuevoProyecto);

        // Limpia los campos despues de registrar el proyecto
        setCategoria('');
        setTipoProyecto('');
        setMonto('');
        setFecha('');
        setDescripcion('');
    };

    return (
        <div>
            <h1>Proyecto</h1>
            <label>Tipo de Proyecto:</label>
            <select value={tipoProyecto} onChange={(e) => setTipoProyecto(e.target.value)}>
                <option value="" disabled>Seleccione una opción</option>
                <option value="Ambientales">Ambientales</option>
                <option value="No ambientales">No ambientales</option>
            </select>

            <br />

            <label>Categoría:</label>
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="Alimentación">Alimentacion</option>
                <option value="Vivienda">Vienda</option>
                <option value="Desarrollo de Software">Desarrollo de Software</option>
                <option value="Campaña de Marketing">Campaña Marketing</option>
            </select>
            <br />

            <label>Monto:</label>
            <input
                type="text"
                pattern="[0-9]*"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
            />
            <br />

            <label>Fecha:</label>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} /> <br />

            <label>Descripción:</label>
            <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} /> <br />

            <button onClick={handleRegistro}>Registrar</button>
        </div>
    );
};

export default FormularioProyect;
