let size = 10;
let orderElement = 1;

const init = () => {

    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btn.textContent = "Kliknij mnie stworze coś";
    btnReset.textContent = "Kliknij mnie zresetuje";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements)
    btnReset.addEventListener('click', cleanList)
}
//document.body.addEventListener('load', init);

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = "element " + (orderElement++);
        //li.textContent =`Element nr ${orderElement}`;
        document.querySelector("ul").appendChild(li);
        li.style.fontSize = (size++) + "px";
        size++;
    }
}
const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}
init();
