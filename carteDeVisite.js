const title = document.querySelector('h1');
const txt = "Bonjour, je m'appelle Julien Le Goff, je suis né à Brest dans le Finistère le 19 mars 1982."

function typewriter(word, index){
    if(index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        }, 100);
    } else {
        setTimeout(() => {
            const container = document.querySelector('.container');
            container.insertAdjacentHTML('beforeend', img);
        }, 500);
    }
}

setTimeout(() => {
    typewriter(txt, 0)
}, 500);