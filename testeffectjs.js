const title = document.querySelector('h1');
const txt = "Né à Brest le 19 mars 1982, je fais ici mes premiers pas dans le développement Web en réalisant mon premier CV en ligne..."

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

