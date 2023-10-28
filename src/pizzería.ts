import * as readline from 'readline';

const porción: number = 7000;
const pizzaCompleta: number = 42000;
const Salsarella: number = 500;
const unidad: number = 5000;
const unidadS: number = 15000;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("¡Bienvenido a Italiana de Pizzas! Deleitate con nuestras más exquisitas recetas");

rl.question("¿Qué desea ordenar? \n1. Pizzas \n2. Sandwiches \n3. Ensaladas\n", (menúPrincipal) => {
    if (menúPrincipal === "1") {
        rl.question("¿Cuántas porciones desea? ($7000 cada porción) \n1. \n2. \n3. \n6. (Pizza completa)\n", (porciones) => {
            rl.question("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No\n", (adicionales) => {
                const porcionesNum = parseInt(porciones);
                const adicionalesNum = parseInt(adicionales);

                if (adicionalesNum === 1) {
                    if (porcionesNum === 1) {
                        console.log(`Gracias por su compra, recibo por compra de 1 porción + adicional $${porción + Salsarella}, ¡Vuelva pronto!`);
                    } else if (porcionesNum === 2) {
                        let porción2 = porción * 2;
                        console.log(`Gracias por su compra, recibo por compra de 2 porciones + adicional $${porción2 + Salsarella}, ¡Vuelva pronto!`);
                    } else if (porcionesNum === 3) {
                        let porción3 = porción * 3;
                        console.log(`Gracias por su compra, recibo por compra de 3 porciones + adicional $${porción3 + Salsarella}, ¡Vuelva pronto!`);
                    } else if (porcionesNum === 6) {
                        console.log(`Gracias por su compra, recibo por compra de una pizza completa + adicional $${pizzaCompleta + Salsarella}, ¡Vuelva pronto!`);
                    }
                } else {
                    if (porcionesNum === 1) {
                        console.log(`Gracias por su compra, recibo por compra de 1 porción $${porción}, ¡Vuelva pronto!`);
                    } else if (porcionesNum === 2) {
                        let porción2 = porción * 2;
                        console.log(`Gracias por su compra, recibo por compra de 2 porciones $${porción2}, ¡Vuelva pronto!`);
                    } else if (porcionesNum === 3) {
                        let porción3 = porción * 3;
                        console.log(`Gracias por su compra, recibo por compra de 3 porciones $${porción3}, ¡Vuelva pronto!`);
                    } else if (porcionesNum === 6) {
                        console.log(`Gracias por su compra, recibo por compra de una pizza completa $${pizzaCompleta}, ¡Vuelva pronto!`);
                    }
                }
                rl.close();
            });
        });
    } else if (menúPrincipal === "2") {
        rl.question("¿Cuántas unidades desea? 1. 2. 3.\n", (unidades) => {
            rl.question("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No\n", (adicionales) => {
                const unidadesNum = parseInt(unidades);
                const adicionalesNum = parseInt(adicionales);

                if (adicionalesNum === 1) {
                    if (unidadesNum === 1) {
                        console.log(`Gracias por su compra, recibo por compra de 1 Sandwich + adicional $${unidad + Salsarella}, ¡Vuelva pronto!`);
                    } else if (unidadesNum === 2) {
                        let unidades2 = unidad * 2;
                        console.log(`Gracias por su compra, recibo por compra de 2 Sandwiches + adicional $${unidades2 + Salsarella}, ¡Vuelva pronto!`);
                    } else if (unidadesNum === 3) {
                        let unidades3 = unidad * 3;
                        console.log(`Gracias por su compra, recibo por compra de 3 Sandwiches + adicional $${unidades3 + Salsarella}, ¡Vuelva pronto!`);
                    }
                } else {
                    if (unidadesNum === 1) {
                        console.log(`Gracias por su compra, recibo por compra de 1 Sandwich $${unidad}, ¡Vuelva pronto!`);
                    } else if (unidadesNum === 2) {
                        let unidades2 = unidad * 2;
                        console.log(`Gracias por su compra, recibo por compra de 2 Sandwiches $${unidades2}, ¡Vuelva pronto!`);
                    } else if (unidadesNum === 3) {
                        let unidades3 = unidad * 3;
                        console.log(`Gracias por su compra, recibo por compra de 3 Sandwiches $${unidades3}, ¡Vuelva pronto!`);
                    }
                }
                rl.close();
            });
        });
    } else {
        rl.question("¿Cuántas unidades desea? 1. 2. 3.\n", (unidades) => {
            rl.question("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No\n", (adicionales) => {
                const unidadesNum = parseInt(unidades);
                const adicionalesNum = parseInt(adicionales);

                if (adicionalesNum === 1) {
                    if (unidadesNum === 1) {
                        console.log(`Gracias por su compra, recibo por compra de 1 Ensalada + adicional $${unidadS + Salsarella}, ¡Vuelva pronto!`);
                    } else if (unidadesNum === 2) {
                        let unidades2 = unidadS * 2;
                        console.log(`Gracias por su compra, recibo por compra de 2 Ensaladas + adicional $${unidades2 + Salsarella}, ¡Vuelva pronto!`);
                    } else if (unidadesNum === 3) {
                        let unidades3 = unidadS * 3;
                        console.log(`Gracias por su compra, recibo por compra de 3 Ensaladas + adicional $${unidades3 + Salsarella}, ¡Vuelve pronto!`);
                    }
                } else {
                    if (unidadesNum === 1) {
                        console.log(`Gracias por su compra, recibo por compra de 1 Ensalada $${unidadS}, ¡Vuelva pronto!`);
                    } else if (unidadesNum === 2) {
                        let unidades2 = unidadS * 2;
                        console.log(`Gracias por su compra, recibo por compra de 2 Ensaladas $${unidades2}, ¡Vuelva pronto!`);
                    } else if (unidadesNum === 3) {
                        let unidades3 = unidadS * 3;
                        console.log(`Gracias por su compra, recibo por compra de 3 Ensaladas $${unidades3}, ¡Vuelve pronto!`);
                    }
                }
                rl.close();
            });
        });
    }
});
