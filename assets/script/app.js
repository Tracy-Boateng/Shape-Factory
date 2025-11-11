'use strict';

const shapeSelect = document.getElementById('shapeSelect');
const colorSelect = document.getElementById('colorSelect');
const grid = document.getElementById('grid');
const createBtn = document.getElementById('createBtn');
const resetBtn = document.getElementById('resetBtn');

const shapes = [];
const MAX_SHAPES = 20;

function createShape() {
  
  if (shapes.length >= MAX_SHAPES) {
    alert("Game box is full! You can't add more shapes.");
    return;
  }

  const shapeName = shapeSelect.value;
  const color = colorSelect.value;

  const newShape = new Shape(shapeName, color);
  shapes.push(newShape);

  const div = document.createElement('div');
  div.classList.add('shape', shapeName);
  div.style.backgroundColor = color;

  div.addEventListener('click', () => {
    alert(newShape.getInfo());
  });

  grid.appendChild(div);
}

function resetGame() {
  grid.innerHTML = "";
  shapes.length = 0;
  alert("Game has been reset! You can start again.");
}

createBtn.addEventListener('click', createShape);
resetBtn.addEventListener('click', resetGame);
