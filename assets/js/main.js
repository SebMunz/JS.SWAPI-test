"use strict";

/*** 
Url base de la API
su uso es de .../<atributo>/:id
por ej: urlApi+people/1 nos trae a Luke
Otros atributos incluyen films, planets, species, starships, vehicles
***/
const urlApi = 'https://swapi.dev/api/';
const personaje = 'people/';

function traer(identificador) {
    fetch(urlApi+personaje+identificador)
        .then(response => response.json())
        .then(data =>{
            let imprimir = document.getElementById('test');
            imprimir.innerHTML += `
            <div class="card p-2" style="width: 15rem;">
            <img src="https://placehold.co/125x75" class="card-img-top" alt="placeholder">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">Peso: ${data.mass} kg</p>
                        <p class="card-text">Altura: ${data.height} cm</p>
                </div>
            </div>
            `
        })
        .catch(error => console.error('ERROR:', error))
}

function mostrarRango(inicio, fin) {
    let imprimir = document.getElementById('test')
    imprimir.innerHTML = ''; //limpiar el contenido que estaba antes de imprimir nuevamente
    for(let i = inicio; i <= fin; i++) {
        traer(i)
    }
}

document.getElementById('menu1').addEventListener('mouseenter', () => mostrarRango(1, 5));
document.getElementById('menu2').addEventListener('mouseenter', () => mostrarRango(6, 11));
document.getElementById('menu3').addEventListener('mouseenter', () => mostrarRango(12, 16));
