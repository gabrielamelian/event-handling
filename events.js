// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start);

function start () {
  one = document.getElementById('one');
  two = document.getElementById('two');
  three = document.getElementById('three');
  four = document.getElementById('four');
  var elements = [one, two, three, four];
  changeColour (elements);
}

function changeColour (elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseleave', makeWhite);
    if (elements[i] == one) {
      one.addEventListener('mouseenter', makeBlue);
    } else if (elements[i] == two) {
      two.addEventListener('mouseenter', makeGreen);
    } else if (elements[i] == three) {
      three.addEventListener('mouseenter', makeOrange);
    } else if (elements[i] == four) {
      four.addEventListener('click', makeBlue);
    }
  }
}

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue';
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white';
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green';
}

function makeOrange (evt) {
  evt.target.style.backgroundColor = 'orange';
}