const id = 'WL5Irjh09ObGUz7KyelO';
const API = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;

const addScore = async (player) => {
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

export default addScore;