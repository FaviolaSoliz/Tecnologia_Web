const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = "https://faviolasoliz.github.io/MiRepositorio/Practicas/JSON/ciudad.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
// Conexion
request.responseType = 'json';
request.send();

// Obteniendo los datos json

request.onload = function() {
    const Ciudades_json = request.response;

    console.log(Ciudades_json);


    mostrarTitulo(Ciudades_json);
  
    mostrarCiudades(Ciudades_json);
  

  console.log(Ciudades_json.Titulo);
document.getElementById('titulo').innerHTML =Ciudades_json.Titulo;
document.getElementById('ciudad').innerHTML =Ciudades_json.pais;
}
    
  function mostrarTitulo(jsonObj)
  {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Titulo'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Pais: ' + jsonObj['pais'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);

  }
*/
/*
  function mostrarCiudades(jsonObj) {
    const ciudades1 = jsonObj['ciudades'];
  
    for (var i = 0; i < ciudades1.length; i++)
     {
      //const miArticulo = document.createElement('article');
      const myArticle = document.createElement('article');
      const myPara1 = document.createElement('p');
      
    
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
      //const MyArticle = document.createElement('h3');
      const myH2 = document.createElement('h2');
      
      // nimbre de la ciudad
      myH2.textContent = ciudades1[i].nombre;
      // Fundacion
      myPara1.textContent = 'Fundado el : ' + ciudades1[i].fundacion;
      //Para2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Lugares Turisticos:';
  
      // Luagares turistico de cada ciudad
      const lugares = ciudades1[i].lugares_turisticos;
      for (var j = 0; j < lugares.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = lugares[j];
        myList.appendChild(listItem);
      }

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      //myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      //section.appendChild(myArticle);

      document.getElementsById('ciudad').innerHTML =myArticule;
    }
  

  }
*/

