
//faq
const questionsBox = document.querySelector('.faq-questions__content');
const questions = questionsBox.querySelectorAll('.faq-questions');
questionsBox.addEventListener('click', function (e) {
  const target = e.target;
  if (!target.classList.contains('faq-questions__toggle')) { return; }
  const question = target.closest('.faq-question');
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
