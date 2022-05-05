let count = 0;
let p = document.querySelector('p');

function incrementCount() {
    count++;
    console.log('count');
}

setInterval(incrementCount, 2000);

function stopCounter() {
    clearInterval(setInterval)
}
