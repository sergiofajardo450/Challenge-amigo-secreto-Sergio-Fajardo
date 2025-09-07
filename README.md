<h1 align="center"> Juego del Amigo Secreto </h1>
<p align="left">
<img src="https://img.shields.io/badge/STATUS-COMPLETADO-green">
</p>

<p>Este es un proyecto sencillo y divertido en JavaScript que te permite:</p>
<ul>
  <li>Agregar amigos a una lista</li>
  <li>Eliminar amigos si te equivocas (con un botoncito ❌)</li>
  <li>Sortear un <strong>amigo secreto</strong> al azar 🎉</li>
</ul>

<hr/>

<h2>🚀 ¿Cómo funciona?</h2>
<p>Todo se basa en un <strong>array</strong> de JavaScript (una lista donde guardamos los nombres).  
Cada acción (agregar, mostrar, eliminar, sortear) se hace con funciones que actualizan la página.</p>

<hr/>

<h2>📝 Explicación paso a paso</h2>

<h3>1. Guardar nombres</h3>
<p>Cuando escribes un nombre y das clic en <em>"Añadir"</em>:</p>
<ul>
  <li>El nombre se guarda en el array <code>amigos</code></li>
  <li>Si está vacío, se muestra un aviso 🚨</li>
  <li>Se limpia el input para que escribas el siguiente nombre</li>
</ul>

<h3>2. Mostrar la lista</h3>
<p>Con la función <code>mostrarAmigos()</code>:</p>
<ul>
  <li>Se limpia la lista antes de dibujarla de nuevo</li>
  <li>Se crean elementos <code>&lt;li&gt;</code> para cada amigo</li>
  <li>A cada uno se le agrega un botón ❌ para eliminarlo si quieres</li>
</ul>

<h3>3. Eliminar amigos</h3>
<p>Si presionas el botón ❌:</p>
<ul>
  <li>Se llama a la función <code>eliminarAmigo()</code></li>
  <li>El amigo se quita del array usando <code>splice()</code></li>
  <li>Se actualiza la lista en pantalla</li>
</ul>

<h3>4. Sortear el amigo secreto</h3>
<p>Al presionar <em>"Sortear amigo"</em>:</p>
<ul>
  <li>Se revisa que la lista no esté vacía</li>
  <li>Se elige un nombre aleatorio con <code>Math.random()</code></li>
  <li>El resultado se muestra en pantalla con un mensajito 🎉</li>
</ul>

<hr/>

<h2>✨ Tecnologías usadas</h2>
<ul>
  <li>HTML → para la estructura</li>
  <li>CSS → para los estilos</li>
  <li>JavaScript → para la lógica del juego</li>
</ul>

<hr/>

<h2>💡 Tip extra</h2>
<p>Si quieres practicar, puedes agregar mejoras como:</p>
<ul>
  <li>Evitar que se repitan nombres</li>
  <li>Mostrar un contador de cuántos amigos llevas agregados</li>
  <li>Guardar la lista en <code>localStorage</code> para que no se pierda al recargar</li>
</ul>

