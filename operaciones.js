const fs = require('fs');

const citasJson = () => JSON.parse(fs.readFileSync('citas.json', 'utf8'));

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citas = citasJson();
  citas.push({ nombre, edad, animal, color, enfermedad });
  fs.writeFileSync('citas.json', JSON.stringify(citas));
  console.log(`Cita registrada para: ${nombre}`);
};

const leerCitas = () => {
  const citas = citasJson();
  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    citas.forEach(({ nombre, edad, animal, color, enfermedad }, index) => {
      console.log(`\n ${index + 1}. Cita Registrada
    ------------------------------
    Nombre del animal: ${nombre}
    Edad: ${edad}
    Tipo de animal: ${animal}
    Color del animal: ${color}
    Enfermedad: ${enfermedad}`);
    });
  }
};

const borrarCita = (nombre) => {
  let citas = citasJson();
  const citasFiltradas = citas.filter((cita) => cita.nombre !== nombre);
  fs.writeFileSync('citas.json', JSON.stringify(citasFiltradas));
  console.log(`Cita para ${nombre} eliminada correctamente.`);
};

module.exports = { registrar, leerCitas, borrarCita };