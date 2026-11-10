// 1. Array con sus datos originales completos
const duraciones = [95, 120, 45, 62, 150, 88, 135, 300];
console.log(duraciones);
console.log("primerElemento", duraciones[0]);

// 2. Inicialización de los contadores antes de usarlos
let cortas = 0;
let normales = 0;
let largas = 0;

// 3. Primer bucle (Muestra todas las películas en la consola)
for (let i = 0; i < duraciones.length; i++) {
  console.log(`Duracion de las peliculas: ${i + 1}: ${duraciones[i]}`);
}

const duracionPeliculas = 90; // minutos

// 4. Clasificación de la película individual de prueba (90 minutos)
if (duracionPeliculas < 90) { 
  console.log("Película corta");
} else if (duracionPeliculas >= 90 && duracionPeliculas <= 120) {
  normales++; 
  console.log("Película estándar");
} else {
  console.log("Película larga");
}

// 5. Segundo bucle (Clasifica y cuenta todo el array desde el índice 0)
for (let i = 0; i < duraciones.length; i++) {
  if (duraciones[i] < 90) {
    cortas++;
    console.log(`Película corta: ${duraciones[i]} Es una película corta`);
  } else if (duraciones[i] >= 90 && duraciones[i] <= 120) {
    normales++;
    console.log(`Película normal: ${duraciones[i]} Es una película normal`);
  } else {
    largas++;
    console.log(`Película larga: ${duraciones[i]} Es una película larga`);
  }
}
