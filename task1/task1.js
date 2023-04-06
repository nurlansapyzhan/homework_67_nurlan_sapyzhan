let container = document.getElementById('container')
let button = document.getElementById('add-item-btn')
function removeStyles() {

}
button.addEventListener('click', function () {
    let newElement = document.createElement('div');
    newElement.id = 'new_element';
    newElement.className = 'new_element';
    let newText = document.createElement('span');
    newText.id = 'new_text';
    newText.className = 'new_text';
    newText.innerText = 'Close it immediately';
    let newButton = document.createElement('button');
    newButton.id = 'new_button';
    newButton.className = 'new_button';
    newButton.innerText = 'Close';
    container.appendChild(newElement);
    newElement.appendChild(newText);
    newElement.appendChild(newButton);
    setTimeout(() => {
        newElement.remove();
    }, 5000)
    newButton.addEventListener('click', () => {
        newElement.remove();
    })
})