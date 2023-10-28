import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const precioP: number = 4000;
const precioG: number = 6000;

const question = (query: string): Promise<string> => {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
};

const iniciarCompra = async () => {
  console.log("Bienvenido a StikerMake, un lugar donde haremos de tu logo la mejor presentación.");

  const tamaño: string = await question("Selecciona el tamaño del sticker.\n1. Pequeño\n2. Grande\n");
  const cantidad: string = await question("Vendemos desde\n1. 10 und\n2. 20 und\n3. 30 und\n");

  if ((tamaño === "1" || tamaño === "2") && (cantidad === "1" || cantidad === "2" || cantidad === "3")) {
    const cantidadStickers = parseInt(cantidad, 10) * 10;
    const precio = (tamaño === "1" ? precioP : precioG) * parseInt(cantidad, 10);
    console.log(`Gracias por su compra, recibo por compra de un paquete de stickers ${tamaño === "1" ? 'pequeños' : 'grandes'} x ${cantidadStickers} und $${precio}`);
  } else {
    console.log("Selección inválida. Por favor, elige una opción válida.");
  }

  rl.close();
};

iniciarCompra();
