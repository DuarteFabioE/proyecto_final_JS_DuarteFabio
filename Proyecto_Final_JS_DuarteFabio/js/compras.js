
crearMenu()

function crearMenu()
{
     let opciones = ["Mis Entradas", "Cancelar Compra"]
     opciones.forEach((opcion)=>{
     const boton = document.createElement("button");
     boton.innerHTML=opcion;

      if (opcion === "Mis Entradas") {
        boton.addEventListener("click", () => {
            listarCompras(compras);
        });
    } 

    if (opcion === "Cancelar Compra") {
      boton.addEventListener("click", () => {
        eliminarCompra();
        listarCompras(compras);
      });
  } 
    document.body.appendChild(boton);
});
}

function listarCompras(listaCompras) {
  let miLista = document.querySelector("#listaCompras");
  if (!miLista) {
      miLista = document.createElement("table");
      miLista.setAttribute("id", "listaCompras");
  }
  miLista.innerHTML = "";

  const encabezado = document.createElement("tr");

  const tdId = document.createElement("th");
  tdId.innerHTML = "Id";
  encabezado.appendChild(tdId);

  const tdNombre = document.createElement("th");
  tdNombre.innerHTML = "Nombre";
  encabezado.appendChild(tdNombre);

  const tdApellido = document.createElement("th");
  tdApellido.innerHTML = "Apellido:";
  encabezado.appendChild(tdApellido);

  const tdEmail = document.createElement("th");
  tdEmail.innerHTML = "Email";
  encabezado.appendChild(tdEmail);

  const tdTelefono = document.createElement("th");
  tdTelefono.innerHTML = "Telefono";
  encabezado.appendChild(tdTelefono);

  const tdFecha = document.createElement("th");
  tdFecha.innerHTML = "Fecha";
  encabezado.appendChild(tdFecha);

  const tdCantidad = document.createElement("th");
  tdCantidad.innerHTML = "Cantidad";
  encabezado.appendChild(tdCantidad);

  miLista.appendChild(encabezado);

  listaCompras.forEach((compra) => {
      const nodotr = document.createElement("tr");
      let nodotd = document.createElement("td");
      nodotd.innerHTML = `${compra.id}`;
      nodotr.appendChild(nodotd);

      nodotd = document.createElement("td");
      nodotd.innerHTML = `${compra.nombre}`;
      nodotr.appendChild(nodotd);

      nodotd = document.createElement("td");
      nodotd.innerHTML = `${compra.apellido}`;
      nodotr.appendChild(nodotd);

      nodotd = document.createElement("td");
      nodotd.innerHTML = `${compra.email}`;
      nodotr.appendChild(nodotd);

      nodotd = document.createElement("td");
      nodotd.innerHTML = `${compra.telefono}`;
      nodotr.appendChild(nodotd);

      nodotd = document.createElement("td");
      nodotd.innerHTML = `${compra.fecha}`;
      nodotr.appendChild(nodotd);

      nodotd = document.createElement("td");
      nodotd.innerHTML = `${compra.cantidad}`;
      nodotr.appendChild(nodotd);

      miLista.appendChild(nodotr);
  });

  document.body.appendChild(miLista);
}

function  eliminarCompra() {
  let id = Number(prompt("Ingrese el id de la compra que desea cancelar"));

  let encontrado = compras.find((compra) => compra.id === id);

  if (!encontrado) {
      localStorage.setItem("compras", JSON.stringify(compras));
      Swal.fire({
          title: "Compra no registrada",
          icon: "success",
          confirmButtonText: "OK",
      });
  } else {
      let index = compras.indexOf(encontrado);

      compras.splice(index, 1);

      localStorage.setItem("compras", JSON.stringify(compras));
      Swal.fire({
          title: "Compra eliminada con exito",
          icon: "success",
          confirmButtonText: "OK",
      });
  }
}

const btn = document.getElementById('botom');
btn.addEventListener('click', () => {
  agregarCompra()
  function agregarCompra()
{      
    let id=1;
    if(compras.length>0)
    {
       id=compras[compras.length-1].id+1;
    }
    
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;;
    let telefono = document.getElementById('telefono').value;
    let fecha = document.getElementById('fecha').value;
    let cantidad = document.getElementById('cantidad').value;
    let compra = new Compras(id, nombre, apellido, email, telefono, fecha, cantidad);

    compras.push(compra);
    console.log("ALMACENADO");
    localStorage.setItem("compras", JSON.stringify(compras));

    Swal.fire(  {
            title:'Compra efectuada con exito',
            icon: 'success',
            confirmButtonText: 'OK',  
        }
       )
}
  listarCompras(compras);
})

