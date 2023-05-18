// import _ from 'lodash';
import './style.css';
import addScore from './modules/api.js';

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
    <div class="scores">
      <p>Name: 100</p>
      <p>Name: 20</p>
      <p>Name: 50</p>
    </div>
  </div>
  <div class="right-section">
    <span>Add your score</span>
    <input type="text" id="name" placeholder="Your name">
    <input type="text" id="score" placeholder="Your score">
    <button id="submit">Submit</button>
  </div>
</div>
`;
body.appendChild(container);

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  addScore({ user: name.value, score: score.value });
});
