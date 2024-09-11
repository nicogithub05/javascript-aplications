const p = document.querySelector('p');
const imgs = document.querySelector('.item img');
const item2 = document.querySelector('.item2');
const item2image = item2.querySelector('img');
const heading = document.querySelector('h2');


console.log(heading.textContent);
console.log(heading.innerText);

heading.textContent = 'Nick is cool'
console.log(heading.textContent); // muestra todo el texto del elemento que se seleccione. incluyendo saltos de linea, scripts, etc.. 
console.log(heading.innerText); // inner text muestra el mismo contenido de texto que muestra el navegador al mostrar una pagina web. 

console.log(heading.innerHTML); // -> // nos permite acceder o modificar el contenido HTML. 
console.log(heading.outerHTML); // -> // incluye los elementos en si mismos no solo su contenido

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('afterbegin', '🍕')
pizzaList.insertAdjacentText('beforeend', '🍕');

// --- Clases 

const pic = document.querySelector('.nice');
pic.classList.add('open'); 
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup';
console.log(pic.alt);
console.log(pic.naturalWidth);
pic.width = 200; 

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
    alert(`welcome ${custom.dataset.name} ${custom.dataset.last}`)
})

