let continuar = 1;
let total: number = 0;
let positivos: number = 0;
let porcentajePositivos: number = 0;
let num: number;

while (continuar !== 0) {
  num = Number(prompt("Ingrese un Numero:"));
  continuar = Number(prompt("Desea Continuar?"));
  if (num > 0) {
    positivos++;
  }
  total++;
}

if (total > 0) {
  porcentajePositivos = (positivos * 100) / total;
  console.log(positivos, "positivos", porcentajePositivos, "%del total");
}

//Leer valores del usuario hasta que se introduzca un 0.
//El usuario puede indtroducir valores numéricos tanto positivos como negativos.
//Contar la cantidad de valores introducidos que sean mayores a 0 y el porcentaje
//de positivos respecto del total.
