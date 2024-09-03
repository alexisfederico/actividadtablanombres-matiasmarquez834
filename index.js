
// window - ventana del navegador
window.onload = ()=>{
    console.log("hola");
   let divElement =  document.querySelector("#elemento");// seleccionar un elemento del documento usando selector css
   let personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 25 },
    { nombre: "María", apellido: "González", edad: 30 },
    { nombre: "Carlos", apellido: "López", edad: 35 },
    { nombre: "Ana", apellido: "Martínez", edad: 28 },
    { nombre: "Luis", apellido: "Rodríguez", edad: 40 },
    { nombre: "Marta", apellido: "Sánchez", edad: 22 },
    { nombre: "Pedro", apellido: "Fernández", edad: 33 },
    { nombre: "Laura", apellido: "García", edad: 27 },
    { nombre: "Jorge", apellido: "Ramírez", edad: 29 },
    { nombre: "Elena", apellido: "Hernández", edad: 31 }
  ];

  console.log(personas[0].edad)

    for(let index =0; index <=9; index= index+1){
        console.log(personas[index].edad);
        divElement.innerHTML+=`<div>
                                <p>${personas[index].nombre}</p>
                                 <p>${personas[index].edad}</p>
                                 </div>
                                `;
    }
}



//docuemnt - documento html


//element - elemento html 


