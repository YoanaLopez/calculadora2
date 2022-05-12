let numero : number = Number(prompt("Ingrese un número:"));
let esPar: boolean = true;
if( numero % 2 === 0){
  esPar= true;
}else{
  esPar=false;
}
switch esPar{
  case true:
    if (numero ==0){
    console.log("El numero ingresado es 0")
    }
    console.log("El numero ingresado es par");
    break;
    case false:
      console.log("El numero ingresado es impar");
      break;

