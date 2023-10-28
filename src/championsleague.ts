import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const equipos: { nombre: string; puntos: number }[] = [];

function calcularPuntuacion(resultado: string): number {
  if (resultado === "victoria") {
    return 3;
  } else if (resultado === "empate") {
    return 1;
  } else {
    return 0;
  }
}

const question = (query: string): Promise<string> => {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
};

const registrarEquipos = async () => {
  for (let i = 0; i < 3; i++) {
    const nombreEquipo = await question(`Ingrese el nombre del equipo ${i + 1}: `);
    const resultados: string[] = [];

    for (let j = 0; j < 3; j++) {
      const resultado = await question(`Ingrese el resultado (victoria, empate o derrota) para la fecha ${j + 1} del equipo ${nombreEquipo}: `);
      resultados.push(resultado);
    }

    equipos.push({
      nombre: nombreEquipo,
      puntos: resultados.reduce((total, resultado) => total + calcularPuntuacion(resultado), 0)
    });
  }

  equipos.sort((a, b) => b.puntos - a.puntos);

  let ranking = "Ranking de equipos:\n";
  for (let i = 0; i < equipos.length; i++) {
    ranking += `${i + 1}. ${equipos[i].nombre}: ${equipos[i].puntos} puntos\n`;
  }

  console.log(ranking);

  rl.close();
};

registrarEquipos();
