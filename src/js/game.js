'use strict';

function Game() {
  const dom = {};
  const shapes = ['rock', 'paper', 'scissors'];
  const points = {
    player: 0,
    ai: 0
  }

  function init() {
    cacheDOM();
    bindEvents();
  }

  function cacheDOM() {
    dom.player = document.getElementById('player');
    dom.ai = document.getElementById('ai');
    dom.rock = document.getElementById('rock');
    dom.paper = document.getElementById('paper');
    dom.scissors = document.getElementById('scissors');
  }

  function bindEvents() {
    dom.rock.addEventListener('click', handleClick);
    dom.paper.addEventListener('click', handleClick);
    dom.scissors.addEventListener('click', handleClick);
  }

  function handleClick(event) {
    let ai = pickShape();
    let player = event.currentTarget.id;
    let winner = whoWins(player, ai);
    if (!winner) { console.log('Tie'); }
    if (winner === 1) {
      points.player += 1;
    }
    else if (winner === 2) {
      points.ai += 1;
    }
    render();
    console.log('AI: ', ai)
    console.log(whoWins(player, ai))
  }

  function render() {
    // show points
    dom.player.textContent = points.player;
    dom.ai.textContent = points.ai;
    // show AI's decision
    // show winner
  }

  function whoWins(shape1, shape2) {
    if (shape1 === shape2) {
      return undefined;
    }

    return /rockscissors|scissorspaper|paperrock/.test(shape1 + shape2) ? 1 : 2;

  }

  function pickShape() {
    return shapes[Math.floor(Math.random() * shapes.length)];
  }

  function start() {}

  function gameover() {}

  function wait(time) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    });
  }

  return {
    init: init
  }
}

document.addEventListener("DOMContentLoaded", function(e) {
  const game = Game();
  game.init();
});
