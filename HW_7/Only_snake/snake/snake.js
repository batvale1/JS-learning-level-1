var FIELD_WIDTH = 20; // высота и ширина в ячейках
var FIELD_HEIGHT = 20;
var SNAKE_SPEED = 300;

var $snakeField;
var $snakeStart = document.getElementById('snake-start');
var $snakeScore = document.getElementById('score');
var snakeX;
var snakeY;
var snakeInterval;
var snakeDirection = 'up';
var score = 0;

var snake = [];

$snakeStart.addEventListener('click', handleGameStart);

// IIFE - Immediate Invoked Functional Expressions
(function() {
  buildGameField();

  window.addEventListener('keydown', handleDirectionChange);
})();

function handleGameStart() {
  respawn();

  snakeInterval = setInterval(move, SNAKE_SPEED);

  createFood();

  $snakeScore.textContent = 'Очки: ' + ++score;
}

function handleDirectionChange(event) {
  switch(event.code) {
    case 'ArrowLeft':
      if(snakeDirection !== 'right') {
        snakeDirection = 'left';
      }
      break;
    case 'ArrowRight':
      if(snakeDirection !== 'left') {
        snakeDirection = 'right';
      }
      break;
    case 'ArrowUp':
      if(snakeDirection !== 'down') {
        snakeDirection = 'up';
      }
      break;
    case 'ArrowDown':
      if(snakeDirection !== 'up') {
        snakeDirection = 'down';
      }
      break;
  }
}

function move() {
  switch(snakeDirection) {
    case 'up':
      snakeY--;
      break;
    case 'down':
      snakeY++;
      break;
    case 'left':
      snakeX--;
      break;
    case 'right':
      snakeX++;
      break;
  }

  if(!inBounds()) {
    switch (snakeX) {
        case FIELD_WIDTH : snakeX = 0; break;
        case -1 : snakeX = FIELD_WIDTH - 1; break;
    };
    switch (snakeY) {
      case FIELD_HEIGHT : snakeY = 0; break;
      case -1 : snakeY = FIELD_HEIGHT - 1; break;
    };
  }

  var $newUnit = $snakeField.children[snakeY].children[snakeX];

  if(!isSnake($newUnit)) {
    $newUnit.classList.add('snake-unit');
    snake.push($newUnit);

    if(!eatFood($newUnit)) {
      var $unitRemove = snake.shift();
      $unitRemove.classList.remove('snake-unit');
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  clearInterval(snakeInterval);
  alert('You loose!');

  window.location.reload();
}

function inBounds() {
  return snakeX >= 0 && snakeY >= 0 && snakeX < FIELD_WIDTH && snakeY < FIELD_HEIGHT;
} 

function isSnake($unit) {
  return $unit.classList.contains('snake-unit');
}

function eatFood($unit) {
  if($unit.classList.contains('food-unit')) {
    $unit.classList.remove('food-unit');
    $snakeScore.textContent = 'Очки: ' + ++score;

    createFood();

    return true;
  }

  return false;
}

function createFood() {
  while(true) {
    var foodX = Math.floor(Math.random() * FIELD_WIDTH);
    var foodY = Math.floor(Math.random() * FIELD_HEIGHT);

    var $foodCell = $snakeField.children[foodY].children[foodX];

    if(!$foodCell.classList.contains('snake-unit')) {
      $foodCell.classList.add('food-unit');

      break;
    }
  }
}

function respawn() {
  snakeX = Math.floor(FIELD_WIDTH / 2);
  snakeY = Math.floor(FIELD_HEIGHT / 2);

  var $snakeHead = $snakeField.children[snakeY].children[snakeX];
  $snakeHead.classList.add('snake-unit');

  var $snakeTail = $snakeField.children[snakeY + 1].children[snakeX];
  $snakeTail.classList.add('snake-unit');

  snake.push($snakeTail);
  snake.push($snakeHead);
}

function buildGameField() {
  $snakeField = document.createElement('table');
  $snakeField.classList.add('game-table');
  var $fieldWrapper = document.getElementById('snake-field');

  for(var i = 0; i < FIELD_HEIGHT; i++) {
    var $row = document.createElement('tr');
    for(var j = 0; j < FIELD_WIDTH; j++) {
      var $cell = document.createElement('td');
      $cell.classList.add('game-cell');

      $row.appendChild($cell);
    }

    $snakeField.appendChild($row);
  }

  $fieldWrapper.appendChild($snakeField);
}