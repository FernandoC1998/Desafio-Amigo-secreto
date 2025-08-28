let amigos = [];


function agregarAmigo(){
    let input = document.getElementById('amigo');
    let nombreNuevo = input.value.trim();
     if (nombreNuevo === "") {
         alert("Por favor, inserte un nombre.");
         return;
        }
        amigos.push(nombreNuevo);
        actualizarLista();
        input.value = "";    
}

function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}


function sortearAmigo(){
    const resultado = document.getElementById('resultado');

  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
    return;
  }


  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];


  resultado.textContent = `El amigo secreto es: ${amigoSorteado} `;

}

agregarAmigo();
