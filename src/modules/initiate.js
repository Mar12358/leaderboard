import { getScores } from './api.js';

const initiate = () => {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
  <div class="left-section">
    <div class="recent-title">
      <span>Recent scores</span>
      <button id="refresh">Refresh</button>
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
  `;
  body.appendChild(container);
  getScores();
};
export default initiate;