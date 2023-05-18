// import _ from 'lodash';
import './style.css';
import { addScore, getScores } from './modules/api.js';

const body = document.querySelector('body');
const container = document.createElement('div');
container.className = 'container';
container.innerHTML = `
<div class="container">
  <div class="left-section">
    <div class="recent-title">
      <span>Recent scores</span>
      <button>Refresh</button>
    </div>
    <ul class="scores-table">
    </ul>
  </div>
  <div class="right-section">
    <form id="form">
      <label>Add your score:</label>
      <input type="text" id="name" placeholder="Your name">
      <input type="text" id="score" placeholder="Your score">
      <button id="submit">Submit</button>
    </form>
  </div>
</div>
`;
body.appendChild(container);

const name = document.getElementById('name');
const score = document.getElementById('score');
const submitBtn = document.getElementById('submit');
const form = document.getElementById('form');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (name.value !== '' && score.value !== '') {
    addScore({ user: name.value, score: score.value });
    form.reset();
  }
});

getScores();
