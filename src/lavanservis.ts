import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lavadoS: number = 4000;
const lavadoN: number = 3000;
const planchado: number = 2000;
const domicilioP: number = 4000;

const question = (query: string): Promise<string> => {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
};

const iniciarServicio = async () => {
  console.log("Bienvenido a lavanservis, ¡un sitio donde mantendremos tu ropa bien CLEAN!");

  const menuPrincipal: string = await question("¿Qué servicio requiere el día de hoy?\n1. Lavado\n2. Planchado\n");

  if (menuPrincipal === "1") {
    const tipo: string = await question("Selecciona tipo de lavado\n1. En seco\n2. Normal\n");
    const cantidadStr: string = await question("Cantidad de prendas:\n1. Prenda\n2. Prendas\n3. Prendas\n");
    const cantidad: number = parseInt(cantidadStr, 10);

    if ((tipo === "1" || tipo === "2") && (cantidad >= 1 && cantidad <= 3)) {
      const precioLavado = tipo === "1" ? (tipo === "1" ? lavadoS : lavadoN) * cantidad : 0;
      const servicio = tipo === "1" ? "lavado en seco" : "lavado normal";
      const costoTotal = precioLavado;
      console.log(`Gracias por usar nuestros servicios, recibo por prestación de servicio de ${servicio} $${precioLavado}, con servicio a domicilio gratuito. ¡Que lo disfrutes!`);
    } else {
      console.log("Selección inválida. Por favor, elige una opción válida.");
    }
  } else if (menuPrincipal === "2") {
    const cantidadStr: string = await question("Cantidad de prendas:\n1. Prenda\n2. Prendas\n3. Prendas\n");
    const cantidad: number = parseInt(cantidadStr, 10);

    if (cantidad >= 1 && cantidad <= 3) {
      const precioPlanchado = planchado * cantidad;
      const costoTotal = precioPlanchado + domicilioP;
      console.log(`Gracias por usar nuestros servicios, recibo por prestación de servicio de planchado $${precioPlanchado}, con un costo adicional del domicilio $${domicilioP}, TOTAL: $${costoTotal}`);
    } else {
      console.log("Selección inválida. Por favor, elige una opción válida.");
    }
  } else {
    console.log("Selección inválida. Por favor, elige una opción válida.");
  }

  rl.close();
};

iniciarServicio();
