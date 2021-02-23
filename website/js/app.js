const url = '/questions';
const el = document.getElementById('question');
const body = document.getElementById('body');
let counter = 0;

window
  .fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    const questions = res.shuffle ? shuffle(res.questions) : res.questions;
    el.innerHTML = '"' + questions[counter] + '"';
    body.onclick = function () {
      counter++;
      counter = counter < questions.length ? counter : 0;
      el.innerHTML = '"' + questions[counter] + '"';
    };
  });

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
