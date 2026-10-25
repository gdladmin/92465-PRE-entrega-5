class Producto {
  constructor(id, nombre, stock, precio) {
    this.id = id;
    this.nombre = nombre.toLowerCase(); 
    this.stock = parseInt(stock);       
    this.cantidad = 0; // SOLICITADAS POR EL CLIENTE                 
    this.precioUnidad = parseFloat(precio); 
    this.precioCompra = 0 // se inicializa 
    this.vendido = false;               
  }

  vender(cantVendida) {
    this.cantidad = parseInt(cantVendida);
    this.precioCompra = this.cantidad * this.precioUnidad;
    this.vendido = true;
  }
}

// CARGA EL STOCK 
const stockEmpanadas = [];

stockEmpanadas.push(new Producto(0, "carne a cuchillo", 200, 1200));
stockEmpanadas.push(new Producto(1, "Carne suave", 140, 1100));
stockEmpanadas.push(new Producto(2, "pollo suave", 60, 1100));
stockEmpanadas.push(new Producto(3, "jamón y queso", 40, 1100));
stockEmpanadas.push(new Producto(4, "caprese", 0, 1150)); 
stockEmpanadas.push(new Producto(5, "humita", 100, 1300));

console.log("=== EMPANADAS DISPONIBLES EN EL LOCAL ===");
console.table(stockEmpanadas);
3
//  ATENCION DE PEDIDOS DEL CLIENTE  
for (const producto of stockEmpanadas) {

  if (producto.stock === 0) {
    alert("Lo sentimos, el gusto " + producto.nombre.toUpperCase() +  " sin stock.");
    continue;
  }

  let respuesta = prompt(
    "Cuantas unidades de " + producto.nombre.toUpperCase()+ " desea llevar ? ");


  let cantidadPedida = parseInt(respuesta);

  if (!isNaN(cantidadPedida) && cantidadPedida > 0) {
    // Controlamos si la cantidad pedida supera el stock disponible
    if (cantidadPedida > producto.stock) {
      alert("Solo tenemos " + producto.stock + " unidades disponibles de " + producto.nombre.toUpperCase() + "Se ajustara su pedido a ese stock.");
      cantidadPedida = producto.stock; 
    }
    producto.vender(cantidadPedida);
  }
}

 function calcularTotalVendido(pedido) {
  let totalGeneral = 0;
  for (const producto of pedido) {
    if (producto.vendido === true) {
      totalGeneral += producto.precioCompra;
    }
  }
  return totalGeneral;
}

console.log("=== TICKET DE COMPRA ===");
console.table(stockEmpanadas);

let totalRecaudado = calcularTotalVendido(stockEmpanadas);

console.log("TOTAL A PAGAR: $" + totalRecaudado);

alert("GRACIAS POR SU COMPRA "+ "TOTAL A PAGAR " + totalRecaudado);

