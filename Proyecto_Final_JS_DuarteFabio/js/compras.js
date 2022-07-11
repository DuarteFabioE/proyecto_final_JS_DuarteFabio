crearMenu();

function crearMenu()
{
     let opciones = ["Mis Entradas", "Cancelar Compra"]
     opciones.forEach((opcion)=>{
     const boton = document.createElement("button");
     boton.innerHTML=opcion;

     if(opcion === "Mis Entradas")
     {
         boton.addEventListener("click", ()=>{  
             listarUsuarios(compras);
         })
     }

      else if(opcion === "Cancelar Compra")
     {
         boton.addEventListener("click", ()=>{
          
             eliminarUsuario();
             listarUsuarios(compras);  
        })
     }
   
     document.body.appendChild(boton);
     });   
}

function listarUsuarios(listaUsuarios)
{
   let miLista = document.querySelector("#listaUsuarios");
   if(!miLista)
   {
     miLista = document.createElement("table");
     miLista.setAttribute("id", "listaUsuarios");
   }
   miLista.innerHTML="";

   const encabezado = document.createElement("tr");
   
   const tdId = document.createElement("th");
   tdId.innerHTML="id";
   encabezado.appendChild(tdId);

   const tdNombre = document.createElement("th");
   tdNombre.innerHTML="nombre";
   encabezado.appendChild(tdNombre);

   const tdApellido = document.createElement("th");
   tdApellido.innerHTML="apellido";
   encabezado.appendChild(tdApellido);

   const tdEmail = document.createElement("th");
   tdEmail.innerHTML="email";
   encabezado.appendChild(tdEmail);

    const tdTel = document.createElement("th");
   tdTel.innerHTML="tel";
   encabezado.appendChild(tdTel);

    const tdFecha = document.createElement("th");
   tdFecha.innerHTML="fecha";
   encabezado.appendChild(tdFecha);

   const tdCantidad = document.createElement("th");
   tdCantidad.innerHTML="cantidad";
   encabezado.appendChild(tdCantidad);

   miLista.appendChild(encabezado)
   
   listaCompras.forEach((compra)=>{
       const nodotr = document.createElement("tr");
       let nodotd = document.createElement("td");
       nodotd.innerHTML=`${compra.id}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${compra.nombre}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${compra.apellido}`;
       nodotr.appendChild(nodotd);

         nodotd = document.createElement("td");
       nodotd.innerHTML=`${compra.email}`;
       nodotr.appendChild(nodotd);

         nodotd = document.createElement("td");
       nodotd.innerHTML=`${compra.tel}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${compra.fecha}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${compra.cantidad}`;
       nodotr.appendChild(nodotd);

       miLista.appendChild(nodotr);
   });

   document.body.appendChild(miLista);
}