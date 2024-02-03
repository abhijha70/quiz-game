const quiz = [
  {
    question : '1. What is the capital of India ?',
    options : {
      option1 : 'Kolkata',
      option2 : 'New delhi',
      option3 : 'Lucknow',
      option4 : 'Noida'
    },
    correct : 'New delhi'
  },
  {
    question : ' 2. What is the Full Form of W.W.W ?',
    options : {
      option1 : 'World Web Webinar',
      option2 : 'Wirtual Webinar Webcom',
      option3 : 'World Wide Web',
      option4 : 'Wonderful Web Webinar'
    },
    correct : 'World Wide Web'
  },
  {
    question : ' 3. How many arms does octopus has ?',
    options : {
      option1 : '5',
      option2 : '6',
      option3 : '8',
      option4 : '12'
    },
    correct : '8'
  },
  {
    question : ' 4. On which day India get Independent ?',
    options : {
      option1 : '26 January',
      option2 : '2 October',
      option3 : '14 February',
      option4 : '15 August'
    },
    correct : ' 15 August'
  }
]
const queAnsParam = document.querySelector('.js-question-answer-div');
let currentQuestionIndex = 0;

 function displayQuestion () {
  const currentQuestion = quiz[currentQuestionIndex]
  
  queAnsParam.innerHTML = `
  <div>
  <span><h3 class="js-question" data-value="Question">${currentQuestion.question}</h3></span>
  <h3><input type="radio" name="question${currentQuestionIndex}" value="option1"/> ${currentQuestion.options.option1}</h3>
  <h3><input type="radio" name="question${currentQuestionIndex}" value="option2"/> ${currentQuestion.options.option2}</h3>
  <h3><input type="radio" name="question${currentQuestionIndex}" value="option3"/> ${currentQuestion.options.option3}</h3>
  <h3><input type="radio" name="question${currentQuestionIndex}" value="option4"/> ${currentQuestion.options.option4}</h3>
</div>
  `;

}
displayQuestion();
const submitBtn = document.querySelector('.js-submit-btn');
const displayAnswer = document.querySelector('.js-correct-answer');
const previosQuestion = document.querySelector('.js-previos-button')

 submitBtn.addEventListener('click' ,function dispalyCorrectAnswer() {
  const currentQuestion = quiz[currentQuestionIndex]
  displayAnswer.innerHTML = `Correct Answer : ${currentQuestion.correct}`
} )

document.querySelector('.js-next-button').addEventListener('click', () =>  {

   currentQuestionIndex = (currentQuestionIndex + 1) % quiz.length
  displayQuestion()
})

previosQuestion.addEventListener('click' ,  () => {
  
   currentQuestionIndex = (currentQuestionIndex -1 + quiz.length) % quiz.length;
  displayQuestion()
})