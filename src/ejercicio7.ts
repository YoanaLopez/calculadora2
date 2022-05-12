let precioproducto: number = Number(
  prompt("Ingrese Precio Inicial del producto:")
);
let porcentajedescuento: number = 0.1;
let descuento: number = precioproducto * porcentajedescuento;
let preciofinal: number = precioproducto - descuento;
console.log("Usted debe pagar:", preciofinal);
