import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const alert = (message: string): void => {
  console.log(message);
};

const apUsado1: number = 22770000;
const apUsado2: number = 52470000;
const apNuevo1: number = 16800000;
const apNuevo2: number = 77184000;
const comUsado: number = 1.10;
const comNuevo: number = 1.20;

let repetir: boolean = true;

const iniciarApp = async () => {
  let nombreDeUsuario: string = await prompt("Bienvenido a InmoMain, tu Inmobiliaria de confianza, por favor ingresa nombre de usuario: ");

  while (repetir) {
    let menúPrincipal: string = await prompt(`Bienvenido ${nombreDeUsuario}, ¿Cómo podemos ayudarte? 1. Solicitar catálogo 2. Cotizar apartamento: `);

    if (menúPrincipal === "1") {
      let tipoInmueble: string = await prompt("1. Usados 2. Nuevos: ");

      if (tipoInmueble === "1") {
        alert("Apartamento ubicado en PEI, 2 habitaciones 2 baños, sala-comedor. Apartamento ubicado en ARM 3 habitaciones, 2 baños, balcón, sala-comedor.");
        let masInfo: string = await prompt("¿Desea más información? 1. Si 2. No: ");
        if (masInfo === "1") {
          alert("Apartamento PEI, 25 m² a una cuadra del CC la arboleda. Apartamento ARM, 47 m² parque fundadores");
        } else {
          alert("Gracias por usar nuestros servicios");
        }
        repetir = false;
      } else if (tipoInmueble === "2") {
        alert("Apartaestudio ubicado en Bogotá, 1 habitación, baño, cocina. Apartamento ubicado en Salento 4 habitaciones, tres baños, balcón, sala-comedor.");
        let masInfo: string = await prompt("¿Desea más información? 1. Si 2. No: ");
        if (masInfo === "1") {
          alert("Apartaestudio Bogotá 47 m² cerca a la estación de buses. Apartamento Salento 76 m² cerca al parque");
        } else {
          alert("Gracias por usar nuestros servicios");
        }
        repetir = true;
      } else {
        alert("Dato no válido");
      }
    }

    if (menúPrincipal === "2") {
      let costoApartamento: string = await prompt("1. Cotizar usado 2. Cotizar nuevo: ");
      // Resto del código de cotización de apartamentos
      // ...
    }
  }

  rl.close();
};

iniciarApp();
