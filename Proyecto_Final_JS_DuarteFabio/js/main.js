
 const personajes = [];

 cargarPersonajes();
 crearTarjetas();

 function cargarPersonajes(){

    data.forEach((dato)=>{
        const personaje = new Personaje(
            dato.id,
            dato.nombre,
            dato.imagen,
            {
               fecha:dato.fecha,
               teatro:dato.teatro,
               direccion:dato.direccion,
           });
        personajes.push(personaje);
        
    })
 

 }

 function crearTarjetas()
 {
   
    const contendor = document.createElement("div");
    contendor.classList.add("mainContainer");

    personajes.forEach((personaje)=>{
        
        const card = document.createElement("div");
        card.classList.add("card");
        mostrarFrente(card, personaje);
        
       contendor.appendChild(card);
    })
    
   
    document.body.appendChild(contendor);


 }

 function mostrarFrente(nodo, personaje)
 {
       nodo.innerHTML=`<div>
          <img src='${personaje.imagen}' />
           </div>
           <div>
               ${personaje.nombre}
           </div>
           `;
       
       nodo.addEventListener("mousedown", ()=>{
               mostrarReverso(nodo, personaje);
           })
 }

 function mostrarReverso(nodo, personaje)
 {
     nodo.innerHTML=`<h2>${personaje.nombre}</h2>
                     <div>${personaje.otherInfo.fecha}</div>
                     <div>${personaje.otherInfo.teatro}</div>
                     <div>${personaje.otherInfo.direccion}</div>`;
     
     nodo.addEventListener("mouseup", ()=>{
                       mostrarFrente(nodo, personaje);
                   });
   
 }




