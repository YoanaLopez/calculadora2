let posiciónLlegada: number = Number(prompt("Ingrese Posicion de llegada:"));
if (posiciónLlegada === 1) {
  console.log("CORRESPONDE MEDALLA DE ORO");
} else {
  if (posiciónLlegada === 2) {
    console.log("CORRESPONDE MEDALLA DE PLATA");
  } else {
    if (posiciónLlegada === 3) {
      console.log("CORRESPONDE MEDALLA DE BRONCE");
    } else {
      console.log("Hacer entrega de certificado de participación");
    }
  }
}
