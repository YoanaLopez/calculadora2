let salarioActual: number = Number(prompt("Ingrese salario actual:"));
let salarioFinal: number;
let aumento: number;

if (salarioActual > 0 && salarioActual <= 15000) {
  aumento = salarioActual * 0.2;
  salarioFinal = salarioActual + aumento;
  console.log("Su salario con aumento del 20% es:", salarioFinal);
} else if (salarioActual >= 15001 && salarioActual <= 20000) {
  aumento = salarioActual * 0.1;
  salarioFinal = salarioActual + aumento;
  console.log("Su salario con aumento del 10% es:", salarioFinal);
} else if (salarioActual >= 20001 && salarioActual <= 25000) {
  aumento = salarioActual * 0.05;
  salarioFinal = salarioActual + aumento;
  console.log("Su salario con aumento del 5% es:", salarioFinal);
} else if (salarioActual >= 25001) {
  console.log("No posee aumento");
}

//DESARROLLE UN ALGORITMO DADO EL SALARIO ACTUAL DE UN EMPLEADO
//DETERMINE EL AUMENTO DE SUELDO A APLICAR Y SE LO MUESTRE
//TENIENDO EN CUENTA ESTOS VALORES
//0-15000 20%
//15001-20000 10%
//20001-25000 5%
//MAS DE 25000 NO HAY AUMENTO
