function dibujarLinea() {
  let linea: string = "-";
  for (let indice = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numero1: number = Number(prompt("Ingrese primer numero"));
let numero2: number = Number(prompt("Ingrese segundo numero"));
let opciones: number = Number(
  prompt("Ingrese numero 1 para sumar, Ingrese numero 2 para restar")
);
let resultado: number;

if (opciones === 1) {
  resultado = numero1 + numero2;
  dibujarLinea();
  console.log(resultado);
  dibujarLinea();
} else if (opciones === 2) {
  resultado = numero1 - numero2;
  dibujarLinea();
  console.log(resultado);
  dibujarLinea();
} else {
  console.log("Numero ingresado incorrecto");
}
