const compra1 = new Compra(1,  "Martinez", "Juan", "11 35354545", "2022/10/03","5");

let compras = [];
 
 if(localStorage.getItem("compras"))
 {
     compras = JSON.parse(localStorage.getItem("compras"));
 }
 else
 {
    compras = [compra1];
 }

console.log("INICIAL:", compras);

inicializarAplicacion();