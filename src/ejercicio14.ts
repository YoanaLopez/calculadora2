let clave: string;
let intentos: number = 0;
let continuar: string = "y";

while (intentos < 2 && continuar === "y") {
  clave = prompt("Ingrese Clave:");
  if (clave === "eureka") {
    console.log("Clave Correcta");
    continuar = "n";
  } else {
    console.log("Clave Incorrecta");
    clave = prompt("Ingrese Clave:");
  }
  intentos++;
}
if (continuar === "y") {
  console.log("Acabaste los intentos");
}
