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

export const getScores = async () => {
  const data = await fetch(API);
  const scores = (await data.json()).result;
  const scoresTable = document.querySelector('.scores-table');
  scoresTable.innerHTML = '';
  let colorBack = 'grey';
  scores.forEach((score) => {
    const li = document.createElement('li');
    colorBack = colorBack === 'light' ? 'grey' : 'light';
    li.className = `${colorBack}`;
    li.innerHTML = `${score.user}: ${score.score}`;
    scoresTable.appendChild(li);
  });
  return scores;
};
