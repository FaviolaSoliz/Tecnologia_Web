//alert('hola');

let cajas=document.getElementsByTagName('div');
//cajas[0].textContent='Primera Caja';

//let cajas=document.getElementsByClassName('caja');
//cajas[2].textContent='Bienvenido';

let caja1 =document.getElementById('cja1');
caja1.textContent = 'Primera Caja';

//caja1.innerHTML='<h2> Hola </h2>';

// CREAR NODOS

// 1. Crear elemento
let caja= document.createElement('div');

// 2. Crear un nodo de texto
let texto =document.createTextNode('Caja Creada');

// 3. Añadir tecto al elemento
caja.appendChild(texto);

// 4. Agregar Atributos al elemento
//caja.setAttribute('class','caja');

// 5 Agregar al documento

let cont=document.getElementById('contenedor');
cont.appendChild(caja);

// MODIFICAR

caja.id='ultima';
caja.className=' caja naranja';

let padre =caja.parentNode;
// posiscion//
//padre.insertBefore(caja,cajas[2]);

// remplazar

padre.replaceChild(caja,cajas[2]);

// Eleminar

padre.removeChild(cajas[0]);









// 






