
//car
const questionsBox = document.querySelector('.car-question__content');
const questions = questionsBox.querySelectorAll('.car-questions');
questionsBox.addEventListener('click', function (e) {
  console.log('click');
  const target = e.target;
  if (!target.classList.contains('car-questions__toggle')) { return; }
  const question = target.closest('.car-question');
  if (!question) { return; }
  if (question.classList.contains('open')) {
    question.classList.remove('open');
    console.log('.open');
    return;
  }
  questions.forEach((questionItem) => {
    questionItem.classList.remove('open');
  });
  question.classList.add('open');
});