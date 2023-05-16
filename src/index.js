// import _ from 'lodash';
import './style.css';

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
    <input type="text" placeholder="Your name">
    <input type="text" placeholder="Your score">
    <button>Submit</button>
  </div>
</div>
`;
body.appendChild(container);