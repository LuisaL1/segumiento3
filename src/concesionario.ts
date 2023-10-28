import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bienvenido a concesionaria MATEL");

rl.question("Por favor seleccione su vehículo de preferencia \n1. Chevrolet \n2. Mazda \n3. Renault\n", (menúPrincipal: string) => {
    if (menúPrincipal === "1") {
        rl.question("Seleccione la marca \n1. Captiva \n2. Tracker\n", (marcaCh: string) => {
            if (marcaCh === "1") {
                console.log("Disponible Chevrolet Captiva 2023 usada \nPrecio \n$123'000.000 \nCaracterísticas \nColor negro mate \nFicha técnica \nAdmisión: Turboalimentado \nCombustible: Gasolina \nDirección: Asistido eléctricamente \nPotencia: 148@5,500 \nFrenos delanteros / posteriores: Discos / Discos \nTracción: Delantera ");
                rl.close();
            } else if (marcaCh === "2") {
                console.log("No disponible Chevrolet Tracker 2023 nueva \nPrecio \n$112'000.000 \Características \nColor gris \nFicha técnica \nAdmisión: Inyección multipunto \nCombustible: Nafta \nDirección:Eléctrica Progresiva \nPotencia (CV): 132 \nFrenos delanteros / posteriores: Disco Ventilado / Tambor \nTracción: Delantera");
                rl.close();
            }
        });
    } else if (menúPrincipal === "2") {
        rl.question("Seleccione la marca \n1. Mazda CX-9 \n2. Mazda CX-30\n", (marcaM: string) => {
            if (marcaM === "1") {
                console.log("Disponible Mazda CX-9 2023 nueva \nPrecio \n$225'000.000 \nCaracterísticas \nColor rojo \nFicha técnica \nAdmisión: Turbo de presión dinámica \nCombustible: Gasolina extra \nDirección: Asistida eléctricamente \nPotencia: 228 / 5.000 \nFrenos delanteros / posteriores: Barra estabilizadora / Barra estabilizadora \nTracción: Sistema inteligente AWD con función Off Road");
                rl.close();
            } else if (marcaM === "2") {
                console.log("Disponible Mazda CX-30 2023 usada \nPrecio \n$117'000.000 \nCaracterísticas \nColor blanco mate \nFicha técnica: Turbocompresor \nCombustible: Gasolina \nDirección: Asistida eléctricamente \nPotencia: 280,27 / 5.000 - 6.000 \nFrenos delanteros / posteriores: Disco / Disco \nTracción: Tracción delantera (FWD)");
                rl.close();
            }
        });
    } else {
        rl.question("Seleccione la marca \n1. Renault Kwid \n2. Renault Triber\n", (marcaR: string) => {
            if (marcaR === "1") {
                console.log("No disponible Renault Kwid 2023 nueva \nPrecio \n$50'000.000 \nCaracterísticas \nColor azul oscuro \nFicha técnica \nAdmisión: Inyección electrónica multipunto secuencial \nCombustible: Gasolina \nDirección: Asistida eléctricamente  \nPotencia: 63 @ 5,500 \nFrenos delanteros / posteriores: Disco / Tambor \nTracción: Disponible en tracción delantera (FWD)");
                rl.close();
            } else {
                console.log("Disponible Renault Triber 2023 nueva \nPrecio \n$78'000.000 \nCaracterísticas \nColor negro \nFicha técnica \Admisión: Motor de combustión interna \nCombustible: Gasolina \nDirección: Asistida eléctricamente\nPotencia: 72 CV \nFrenos delanteros / posteriores: Disco / Tambor \nTracción: Disponible en tracción delantera (FWD)");
                rl.close();
            }
        });
    }
});
