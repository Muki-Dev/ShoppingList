const userInput = document.getElementById('userInput');
const enterButton = document.getElementById('button');
const inputField = document.querySelector('input');
const listElement = document.querySelector('ul');

function checkInputLength(){
    return userInput.value.length;
}

function createItemElement(){
    let itemElement = `<li>${userInput.value}</li>`
        listElement.innerHTML += itemElement;
        userInput.value = '';
}

function addTaskAfterClick(){
    if(checkInputLength() > 0){
        createItemElement();
    }
}

function addTaskAfterKeyPress(event){
    if(checkInputLength() > 0 && event.which === 13){
        createItemElement();
    }
}

enterButton.addEventListener('click',addTaskAfterClick);

inputField.addEventListener('keypress',addTaskAfterKeyPress);