const btn = document.querySelector('#btn-01');

function AddFotterNote() {
  const parent = document.querySelector('.main-container')
  const footElem = document.createElement('div');
  const contNode = document.createTextNode('Hey! you just clicked me :). But don\'t worry I\'ll leave in 3 sec');

  footElem.setAttribute('class', "foot-note");
  footElem.appendChild(contNode);

  parent.appendChild(footElem);

  btn.removeEventListener('click', AddFotterNote)

  setTimeout(() => {
    parent.removeChild(footElem);
    btn.addEventListener('click', AddFotterNote)
  }, 3000)
}

btn.addEventListener('click', AddFotterNote)
