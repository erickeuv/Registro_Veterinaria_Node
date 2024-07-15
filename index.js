const { registrar, leerCitas, borrarCita } = require('./operaciones');

const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (operacion.toLowerCase() === 'registrar') {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion.toLowerCase() === 'leer') {
  leerCitas();
} else if (operacion.toLowerCase() === 'borrar') {
  borrarCita(nombre);
} else {
  console.log(
    `Operación no válida. Operaciones disponibles: "registrar", "leer" y "borrar".`
  );
}