const body = document.querySelector('body');
const board = document.createElement('ul');
board.classList.add('board');
body.appendChild(board);
let i = 0;
while (i < 16) {
    const item = document.createElement('il');
    item.classList.add('item');
    board.appendChild(item);
    i++;
}

function moveGoblin() {
    const arrayItems = document.querySelectorAll('.item');
    for(let i = 0; i < arrayItems.length; i++) {
        arrayItems[i].classList.remove('goblin');
    }
    const randomIndex = Math.floor(Math.random() * arrayItems.length);
    arrayItems[randomIndex].classList.add('goblin');

}

setInterval(moveGoblin,500);