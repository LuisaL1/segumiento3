import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const costoServicio: number = 500;
let montoTotal: number = 0;

const realizarPago = (): void => {
  const question = (query: string): Promise<string> => {
    return new Promise(resolve => {
      rl.question(query, answer => {
        resolve(answer);
      });
    });
  };

  const mostrarMensaje = (mensaje: string): void => {
    console.log(mensaje);
  };

  const pagar = async (): Promise<void> => {
    while (true) {
      const tipoPago: string = await question("Ingrese el tipo de pago (moneda o billete): ");

      if (tipoPago === "moneda") {
        const valorMonedaStr: string = await question("Ingrese el valor de la moneda (500 o 1000): ");
        const valorMoneda: number = parseInt(valorMonedaStr, 10);

        if (valorMoneda === 500 || valorMoneda === 1000) {
          montoTotal += valorMoneda;
        } else {
          mostrarMensaje("Valor de moneda no válido");
        }
      } else if (tipoPago === "billete") {
        const valorBilleteStr: string = await question("Ingrese el valor del billete (2000 o 5000): ");
        const valorBillete: number = parseInt(valorBilleteStr, 10);

        if (valorBillete === 2000 || valorBillete === 5000) {
          montoTotal += valorBillete;
        } else {
          mostrarMensaje("Valor de billete no válido");
        }
      } else {
        mostrarMensaje("Tipo de pago no válido");
      }

      if (montoTotal >= costoServicio) {
        if (montoTotal > costoServicio) {
          const cambio: number = montoTotal - costoServicio;
          mostrarMensaje(`¡Gracias por su pago! Su cambio es de ${cambio} pesos.`);
        } else {
          mostrarMensaje("¡Gracias por su pago! No se necesita devolver cambio.");
        }
        break;
      } else {
        const faltaDinero: number = costoServicio - montoTotal;
        mostrarMensaje(`Falta dinero para completar el pago. Faltan ${faltaDinero} pesos.`);
      }
    }

    rl.close();
    mostrarMensaje("¡Vuelve pronto!");
  };

  pagar();
};

realizarPago();
