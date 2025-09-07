// Array donde se guardarán los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarAmigos();
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i] + " "; 

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.style.cursor = "pointer";

        // Evento al hacer clic en ❌
        btnEliminar.onclick = function () {
            eliminarAmigo(i);
        };

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    }
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(indice) {
    amigos.splice(indice, 1); 
    mostrarAmigos(); 
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear 😢";
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indice];

    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}


