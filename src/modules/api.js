const id = 'WL5Irjh09ObGUz7KyelO';
const API = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;

export const addScore = async (player) => {
  const newScore = {
    user: player.user,
    score: player.score,
  };

  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newScore),
  });
};

const addToDom = (score) => {
  const table = document.querySelector('.scores-table');
  const li = document.createElement('li');
  li.innerHTML = `${score.user}: ${score.score}`;
  table.appendChild(li);
};

export const getScores = async () => {
  const data = await fetch(API);
  const scores = (await data.json()).result;
  scores.forEach((score) => {
    addToDom(score);
  });
  return scores;
};
