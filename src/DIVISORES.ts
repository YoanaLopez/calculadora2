//Cantidad de divisores que tiene un numero
function Divisores(numero: number): number {
  let cantidad: number = 0;
  for (let indice: number = 0; indice <= numero; indice++) {
    if (esMultiplo(numero, indice)) {
      cantidad++;
    }
  }
  return cantidad;
}

//Funcion es multiplo, trabajada en clase
function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

let numero: number = Number(prompt("Ingrese un número"));
console.log(
  "El número que usted ingresó es",
  numero,
  " y tiene",
  Divisores(numero),
  "divisores."
);

//*Implemente un método cantidad de divisores que reciba un número
//entero y devuelva la cantidad de divisores.
//Por ejemplo para el numero 16, sus divisores son 1,2,4,8,16 por lo
//que la respuesta es 5
