let precioProducto: number = Number(prompt("Precio de producto"));
let cantidad: number = Number(prompt("Cantidad:"));
let totalcompra: number = precioProducto * cantidad;
let porcentajedescuento: number = 0.1;
let descuento: number = precioProducto * porcentajedescuento;
let preciofinal: number = precioProducto - descuento;
if (totalcompra >= 1000) {
  console.log("Usted debe pagar:", preciofinal);
} else {
  console.log("Usted debe pagar:", totalcompra);
}
