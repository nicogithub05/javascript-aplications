
console.log('it works')


const myParagraph = document.createElement('p');
myParagraph.textContent.content = 'i´m a p';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = "https:://picsum.photos/500"
myImage.alt = "Nice photo";

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'cool things'

myDiv.insertAdjacentElement('beforbegin', heading)

const list = document.createElement('ul');
const li = docuemnt.createElement('li');

li.text.content('three');
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list); 
const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5);

const li1 = li5.cloneNode(true); 
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1)

const li4 = doument.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent('two');
li1.insertAdjacentElement('afterend', li2);






