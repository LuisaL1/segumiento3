import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query: string): Promise<string> => {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
};

const verificarTriangulo = async () => {
  let a: number = parseInt(await question("Ingrese el ángulo a: "), 10);
  let b: number = parseInt(await question("Ingrese el ángulo b: "), 10);
  let c: number = parseInt(await question("Ingrese el ángulo c: "), 10);

  if (a === 60 && b === 60 && c === 60) {
    console.log("Es un triángulo equilátero");
  } else {
    console.log("No es un triángulo equilátero");
  }

  rl.close();
};

verificarTriangulo();
