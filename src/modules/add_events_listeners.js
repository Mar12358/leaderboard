import { addScore, getScores } from './api.js';

const addEventListeners = () => {
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

  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', (e) => {
    e.preventDefault();
    getScores();
  });
};
export default addEventListeners;