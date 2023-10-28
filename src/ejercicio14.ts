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

const multiplicarNumero = async (): Promise<void> => {
  const numeroStr: string = await question("Ingrese el número a multiplicar: ");
  const numero: number = parseInt(numeroStr, 10);

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
  }

  rl.close();
};

multiplicarNumero();
