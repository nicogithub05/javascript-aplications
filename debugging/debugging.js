const people = [
    {name: 'wes', cool: true, country: 'canada'},
    {name: 'scot', cool: true, country: 'dog Country'}, 
    {name: 'snickers', cool: false, country: 'dog Country'}
]

people.forEach(person, index) {
    console.groupCollapsed(`${person.name}`);
    console.log(person.country);
    console.log(person.cool);
    console.log('Done');
    console.groupEnd(`${person.name}`)
}

console.table(people)

function doALotOfStuff() {
    console.group('Doing some struff');
    console.log('Hey im one');
    console.warn('Watch out');
    console.error('Hey');
    console.groupEnd('Doing some stuff');
}
function doctorize(name) {
    return `Dr. ${name}`;
}

function greet(name) {
    doesntExist()
    return `Hello ${name}`
};

function go() {
    const name = name = doctorize(greet('wes'));
    console.log(name)
}

function bootstrap() {
    console.log('Starting the app');
    go();
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain',
      },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
  }