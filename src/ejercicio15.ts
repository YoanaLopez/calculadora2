let numero1: number = Number(prompt("Ingrese Primer Número"));
let numero2: number = Number(prompt("Ingrese Segundo Número"));
let suma = 0;
if (numero1 < numero2) {
  for (let i = numero1; i <= numero2; i++) {
    suma = suma + i;
  }
  console.log(suma);
} else {
  if (numero1 > numero2) {
    for (let i2 = numero2; i2 <= numero1; i2++) {
      suma = suma + i2;
    }
    console.log(suma);
  }
}

// Consigna: Escriba un programa que pida al usuario dos numeros y luego
//retorne la suma de todos los numeros que están entre ellos.
//ESTE PROGRAMA ESTÁ DISEÑADO TANTO PARA NUMEROS ENTEROS NEGATIVOS
//COMO NUMEROS ENTEROS POSITIVOS.
