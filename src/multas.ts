const límiteDías: number = 3;
const multapordíaL: number = 500;
const multapordíaR: number = 600;
const multaPérdida: number = 10000;

const indicar: string = "1"; 

if (indicar === "1") {
    const tipo: string = "1"; 

    if (tipo === "1") {
        const díasRetrasados: number = 5;
        const cantidadLibros: string = "2";

        if (cantidadLibros === "1") {
            if (díasRetrasados > límiteDías) {
                console.log(`Superaste el máximo de días retrasados, multa por cada día de retraso $500, su multa es de $${díasRetrasados * multapordíaL}`);
            }
        } else if (cantidadLibros === "2") {
            const multaPorLibro: number = multapordíaL * 2;
            console.log(`Superaste el máximo de días retrasados, multa por cada día de retraso $500, su multa es de $${díasRetrasados * multaPorLibro}`);
        } else {
            const multaPorLibro2: number = multapordíaL * 3;
            console.log(`Superaste el máximo de días retrasados, multa por cada día de retraso $500, su multa es de $${díasRetrasados * multaPorLibro2}`);
        }
    } else {
        const díasRetrasados: number = 6; 
        const cantidadRevistas: string = "2"; 
        if (cantidadRevistas === "1") {
            console.log(`Superaste el máximo de días retrasados, multa por cada día de retraso $600, su multa es de $${díasRetrasados * multapordíaR}`);
        } else if (cantidadRevistas === "2") {
            const multaPorRevista: number = multapordíaR * 2;
            console.log(`Superaste el máximo de días retrasados, multa por cada día de retraso $600, su multa es de $${díasRetrasados * multaPorRevista}`);
        } else {
            const multaPorRevista2: number = multapordíaR * 3;
            console.log(`Superaste el máximo de días retrasados, multa por cada día de retraso $600, su multa es de $${díasRetrasados * multaPorRevista2}`);
        }
    }
} else {
    const tipo: string = "2"; 

    if (tipo === "1") {
        const cantidadL: string = "2"; 

        if (cantidadL === "1") {
            console.log("Su multa por el ejemplar perdido es de $1000");
        } else if (cantidadL === "2") {
            const perdidaLibro: number = multaPérdida * 2;
            console.log(`Su multa por cada ejemplar perdido es de $${perdidaLibro}`);
        } else {
            const perdidaLibro2: number = multaPérdida * 3;
            console.log(`Su multa por el ejemplar perdido es de $${perdidaLibro2}`);
        }
    } else {
        const cantidadR: string = "2"; 

        if (cantidadR === "1") {
            console.log("Su multa por el ejemplar perdido es de $1000");
        } else if (cantidadR === "2") {
            const perdidaRevista: number = multaPérdida * 2;
            console.log(`Su multa por cada ejemplar perdido es de $${perdidaRevista}`);
        } else {
            const perdidaRevista2: number = multaPérdida * 3;
            console.log(`Su multa por cada ejemplar perdido es de $${perdidaRevista2}`);
        }
    }
}

