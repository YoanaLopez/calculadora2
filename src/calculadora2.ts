function dibujarLinea() {
  let linea: string = "-";
  for (let indice = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}
let numero1: number = Number(prompt("Ingrese Primer Numero"));
let numero2: number = Number(prompt("Ingrese Segundo Numero"));
let resultado: number;
let opcion: number = Number(
  prompt(
    "Ingrese Número 1 para suma, 2 para resta, 3 multipicación, 4 division"
  )
);

switch (opcion) {
  case 1:
    resultado = numero1 + numero2;
    dibujarLinea();
    console.log("El resultado de la suma es:", resultado);
    dibujarLinea();
    break;

  case 2:
    resultado = numero1 - numero2;
    dibujarLinea();
    console.log("El resultado de la resta es:", resultado);
    dibujarLinea();
    break;
  case 3:
    resultado = numero1 * numero2;
    dibujarLinea();
    console.log("El resultado de la multiplicación es", resultado);
    dibujarLinea();
    break;

  case 4:
    resultado = numero1 / numero2;
    dibujarLinea();
    console.log("El resultado de la división es :", resultado);
    dibujarLinea();
    break;
}

//Realizar una calculadora con 4 operaciones
//suma, resta, multiplicación, división.
//con la funcion dibujarLineas
