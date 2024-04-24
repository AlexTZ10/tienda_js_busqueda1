
//FORMA 1 SIN DEPENDENCIA EN LA FUNCION


/*
function captureText() {
    // Obtener el valor del input de búsqueda
    var valor = document.getElementById("search").value;
    
    // Imprimir el valor en la consola
    console.log("Texto capturado:", valor);
}


// Define una variable searchSelector para seleccionar el input de tipo texto utilizando el método querySelector.
// SELECCIONA EL ELEMENTO CON id = search
var searchSelector = document.querySelector("#search");    // querySelector , selecciona de cualquier atributo segun como lo definas (#:id , .:class  ) 

// Agrega un escuchador de eventos al searchSelector utilizando el método addEventListener.
// Este escuchador de eventos debe estar atento al evento keyup y ejecutar la función captureText cada vez que se presione una tecla.
searchSelector.addEventListener("keyup", captureText);  // otros tipos de eventos: onclick, onmouseover, onmouseout, onchange, onsubmit, etc


*/



//FORMA 1 CON DEPENDENCIA EN LA FUNCION

/* 
function captureText(event) {
    // Obtener el valor del input de búsqueda del objeto evento
    var valor = event.target.value;
    
    // Imprimir algunas propiedades importantes del evento en la consola
    console.log("Tipo de evento:", event.type);
    console.log("Tecla presionada:", event.key);
    console.log("Texto capturado:", valor);
}

// Define una variable searchSelector para seleccionar el input de tipo texto utilizando el método querySelector.
// SELECCIONA EL ELEMENTO CON id = search
var searchSelector = document.querySelector("#search");    // querySelector , selecciona de cualquier atributo segun como lo definas (#:id , .:class  )

// Agrega un escuchador de eventos al searchSelector utilizando el método addEventListener.
// Este escuchador de eventos debe estar atento al evento keyup y ejecutar la función captureText cada vez que se presione una tecla.
searchSelector.addEventListener("keyup", event => captureText(event));  // otros tipos de eventos: onclick, onmouseover, onmouseout, onchange, onsubmit, etc
*/



//FORMA 3
// FILTRAR SEGUN BUSQUEDA , Muestra solo los productos segun el texto

// Modificada función captureText para filtrar productos y actualizar la vista
function captureText(event) {
    // Obtener el valor del input de búsqueda del objeto evento
    var valor = event.target.value.toLowerCase(); // Convertir el texto a minúsculas para una búsqueda insensible a mayúsculas
    
    // Imprimir algunas propiedades importantes del evento en la consola
    console.log("Tipo de evento:", event.type);
    console.log("Tecla presionada:", event.key);
    console.log("Texto capturado:", valor);
    
    // Seleccionar todos los elementos de productos
    var products = document.querySelectorAll('.product-card');

    // Iterar sobre cada elemento de producto
    products.forEach(product => {
        // Obtener el título del producto y convertirlo a minúsculas para una comparación insensible a mayúsculas
        var title = product.querySelector('.product-title').textContent.toLowerCase();
        
        // Comprobar si el título del producto contiene el texto capturado
        if (title.includes(valor)) {
            // Si el título del producto incluye el texto capturado, mostrar el producto
            product.style.display = 'block';
        } else {
            // Si el título del producto no incluye el texto capturado, ocultar el producto
            product.style.display = 'none';
        }
    });
}

// Define una variable searchSelector para seleccionar el input de tipo texto utilizando el método querySelector.
// SELECCIONA EL ELEMENTO CON id = search
var searchSelector = document.querySelector("#search");

// Agrega un escuchador de eventos al searchSelector utilizando el método addEventListener.
// Este escuchador de eventos debe estar atento al evento keyup y ejecutar la función captureText cada vez que se presione una tecla.
searchSelector.addEventListener("keyup", event => captureText(event));  
