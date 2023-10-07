const texts = ['You can fly', 'You can become invisible', 'You can see through walls'];
const additions = ['shoot someone.', 'steal a car.', 'serve five years in jail.'];


function clearAll() {
  const textSpace = document.querySelector('.text');
  const addSpace = document.querySelector('.add');
  if (textSpace.childNodes.length === 0 && addSpace.childNodes.length === 0) {
    alert ('There is nothing to clear!')
  } else {
    textSpace.textContent = "";
    addSpace.textContent = "";
  }
}
function show() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  const firstText = texts[randomIndex];
  const textElement = document.createElement('p');
  const theText = document.querySelector('.text');
  if (theText.childNodes.length !== 0) {
    alert ('The text is already shown!') }
  else {
    textElement.textContent = firstText;
    const location = document.querySelector('.text')
    location.appendChild(textElement);
  }
}
function add() {
  const randomIndex2 = Math.floor(Math.random() * additions.length);
  const addedText = additions[randomIndex2];
  const addedElement = document.createElement('p');
  const textComp = document.querySelector('.text');
  const addComp = document.querySelector('.add');
  if (textComp.childNodes.length === 0) {
    alert ('No text is shown on ths screen!')
  } else if (addComp.childNodes.length !==0) {
    alert ('Added text is already shown on the screen!')
  } else {
  addedElement.textContent = 'but you have to ' + addedText;
  const location = document.querySelector('.add')
  location.appendChild(addedElement);
  }
};
