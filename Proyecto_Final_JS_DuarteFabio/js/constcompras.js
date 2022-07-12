const compra1 = new Compra(1,  "Alexis", "Santellan", "alexis@gamial.com", "11 6806-1234","2022/12/10","2");
const compra2 = new Compra(1,  "Nataly", "Moyano", "nataly@gamial.com", "11 6806-1225","2022/12/10","4");

let compras = [];
 
 if(localStorage.getItem("compras"))
 {
     compras = JSON.parse(localStorage.getItem("compras"));
 }
 else
 {
    compras = [compra1,compra2];
 }

console.log("INICIAL:", compras);
