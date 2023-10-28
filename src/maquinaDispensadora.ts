import * as readline from 'readline';

const galletaOreo: number = 1;
const cocaCola: number = 2;
const cantOreo: number = 2;
const cantCocacola: number = 3;
const precioGalleta: number = 2800;
const precioBebida: number = 3000;
const billeteUno: number = 2000;
const billeteDos: number = 5000;
const billeteTres: number = 10000;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hola, soy SweetBot, ¡tu máquina dispensadora favorita!");
console.log("Te indicaré una sola instrucción para una mejor experiencia");
console.log("El dinero que se puede ingresar: $2.000, $5.000, $10.000, ¡disfruta!");

rl.question("¿Qué desea hoy?: 1. Galletas Oreo $2800 2. CocaCola $3000", (queDesea: string) => {
    if (queDesea === "1") {
        let repetir: boolean = true;
        while (repetir) {
            rl.question("Por favor, digite el número del valor a ingresar: 1.$2000, 2.$5000, 3.$10000", (pagoRealizado: string) => {
                if (pagoRealizado === "1") {
                    console.log("Ups!, por favor ingresa otro valor");
                } else if (pagoRealizado === "2") {
                    rl.question("Unidades disponibles: 1, 2, 3, 4", (cantidadDeseada: string) => {
                        if (cantidadDeseada === "4") {
                            console.log("Ups, cantidad no disponible :(");
                            rl.close();
                        } else if (cantidadDeseada !== null && Number(cantidadDeseada) > cantOreo) {
                            console.log("Ups!, cantidad no disponible :(");
                            rl.close();
                        } else {
                            let resultadoFinal: number = Number(cantidadDeseada) * precioGalleta;
                            if (resultadoFinal > billeteDos) {
                                console.log("Ups, el billete no es suficiente :(");
                                rl.close();
                            } else {
                                console.log(`Ñam!, Dispensando con éxito, su cambio es: ${billeteDos - resultadoFinal}`);
                                rl.close();
                                repetir = false;
                            }
                        }
                    });
                } else {
                    rl.question("Unidades disponibles: 1, 2, 3, 4", (cantidadDeseada: string) => {
                        if (cantidadDeseada === "4") {
                            console.log("Ups, cantidad no disponible :(");
                            rl.close();
                        } else if (cantidadDeseada !== null) {
                            let resultadoFinal: number = Number(cantidadDeseada) * precioGalleta;
                            if (resultadoFinal > billeteTres) {
                                console.log("Ups, el billete no es suficiente :(");
                                rl.close();
                            } else {
                                console.log(`Ñam!, Dispensando con éxito, su cambio es: ${billeteTres - resultadoFinal}`);
                                rl.close();
                                repetir = false;
                            }
                        }
                    });
                }
            });
        }
    } else if (queDesea === "2") {
        let repetir: boolean = true;
        while (repetir) {
            rl.question("Por favor, digite el número del valor a ingresar: 1.$2000, 2.$5000, 3.$10000", (pagoRealizado: string) => {
                if (pagoRealizado === "1") {
                    console.log("Ups!, por favor ingresa otro valor");
                } else if (pagoRealizado === "2") {
                    rl.question("Unidades disponibles: 1, 2, 3, 4", (cantidadDeseada: string) => {
                        if (cantidadDeseada === "4") {
                            console.log("Ups, cantidad no disponible :(");
                            rl.close();
                        } else if (cantidadDeseada !== null && Number(cantidadDeseada) > cantCocacola) {
                            console.log("Ups!, cantidad no disponible :(");
                            rl.close();
                        } else {
                            let resultadoFinal: number = Number(cantidadDeseada) * precioBebida;
                            if (resultadoFinal > billeteDos) {
                                console.log("Ups, el billete no es suficiente :(");
                                rl.close();
                            } else {
                                console.log(`Ñam!, Dispensando con éxito, su cambio es: ${billeteDos - resultadoFinal}`);
                                rl.close();
                                repetir = false;
                            }
                        }
                    });
                } else {
                    rl.question("Unidades disponibles: 1, 2, 3, 4", (cantidadDeseada: string) => {
                        if (cantidadDeseada === "4") {
                            console.log("Ups, cantidad no disponible :(");
                            rl.close();
                        } else if (cantidadDeseada !== null) {
                            let resultadoFinal: number = Number(cantidadDeseada) * precioBebida;
                            if (resultadoFinal > billeteTres) {
                                console.log("Ups, el billete no es suficiente :(");
                                rl.close();
                            } else {
                                console.log(`Ñam!, Dispensando con éxito, su cambio es: ${billeteTres - resultadoFinal}`);
                                rl.close();
                                repetir = false;
                            }
                        }
                    });
                }
            });
        }
    }
});
