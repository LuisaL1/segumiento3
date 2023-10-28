import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let puntajeTotal: number = 0;

const preguntas = [
  {
    pregunta: "¿Cuál es la capital de Colombia?",
    respuestaCorrecta: "Bogotá"
  },
  {
    pregunta: "¿Cuántas horas tiene un día?",
    respuestaCorrecta: "24"
  },
  {
    pregunta: "¿El planeta Tierra es más grande que el planeta Marte? (responder Verdadero o Falso)",
    respuestaCorrecta: "Verdadero"
  },
  {
    pregunta: "¿De qué color es el cielo?",
    respuestaCorrecta: "Azul"
  },
  {
    pregunta: "¿Cuál es la raíz cúbica de 125?",
    respuestaCorrecta: "5"
  }
];

const question = (query: string): Promise<string> => {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
};

const realizarExamen = async () => {
  for (let i = 0; i < preguntas.length; i++) {
    const respuestaUsuario = await question(preguntas[i].pregunta + " ");

    if (respuestaUsuario === preguntas[i].respuestaCorrecta) {
      puntajeTotal += 10;
    }
  }

  const respuestasCorrectas = puntajeTotal / 10;
  console.log("Resultados del examen:");
  console.log(`Respuestas correctas: ${respuestasCorrectas}`);
  console.log(`Puntaje total obtenido: ${puntajeTotal}`);

  rl.close();
};

realizarExamen();
