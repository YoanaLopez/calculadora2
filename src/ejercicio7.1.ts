let precioproducto: number = Number(
  prompt("Ingrese Precio Inicial del producto:")
);
let porcentajedescuento: number = Number(
  prompt("Ingrese porcentaje descuento:")
);
//let porcentajedescuento: number = 0.1;
let descuento: number = (precioproducto * porcentajedescuento) / 100;
let preciofinal: number = precioproducto - descuento;
console.log("Usted debe pagar:", preciofinal);
