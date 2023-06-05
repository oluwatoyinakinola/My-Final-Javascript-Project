// Defining  the questions and options
const questions = [
    {
      question: "Question 1: What is the capital of Nigeria?",
      options: ["Lagos", "Port-Harcourt", "Abuja"],
      correctAnswer: 2
    },

    {
      question: "Question 2: Which European team won the UEFA Champions League 3 times in a row in the last decade?",
      options: ["Liverpool", "Real Madrid", "Manchester City"],
      correctAnswer: 1
    },

    {
      question: " Question3: Which Tennis player won Roland Garros more than a dozen times in his career",
      options: [" Novak Jokovic", "Roger Federa", "Rafael Nadal"], 
      correctAnswer:2
    },

    {
      question: " Question4: Which european team has won the highest number of UEFA Champions league in history",
      options: ["Real Madrid", "Barcelona", "AC Milan"], 
      correctAnswer:0
    },

    {
      question: " Question5: Which country has the largest population in the world",
      options: ["United States", "China", "India"], 
      correctAnswer:2
    },

    {
      question: " Question6: Which country is the highest producer of cotton in the world?",
      options: ["Bangladesh","India","Pakistan"],
      correctAnswer:1
    },

    {
      question: " Question7: Which of these countries is a french speaking country?",
      options: ["Ghana","Nigeria","France"],
      correctAnswer:2
    },

    {
      question: " Question8: Which country is Mercedes Benz manufactured from?",
      options: ["Germany","Portugal","Spain"],
      correctAnswer:0
    },

    {
      question: " Question9: What is the capital of Spain",
      options: ["Madrid","Barcelona","Valencia"],
      correctAnswer:0
    },

    {
      question: " Question10::where is the Vatican located?",
      options: ["Venice","Lisbon","Rome"],
      correctAnswer:2
    },

    {
      question: " Question11: which of these countries is in west africa?",
      options: ["Zambia","Lesotho","Senegal"],
      correctAnswer:2
    },

    {
      question: " Question12: which of these countries is not  an african country",
      options: ["Zambia","Jamaica","Senegal"],
      correctAnswer:1
    },

    {
      question: " Question13: which of these countries is in Oceania ",
      options: ["Australia","Brazil","Netherlands"],
      correctAnswer:0

    },

    {
      question: " Question14: which of these is not a color",
      options: ["indigo","potato","blue",],
      correctAnswer:1
    },

    {
      question: " Question15: Olympic games are held every",
      options: ["3 years", "18 months", "4 years"],
      correctAnswer: 2
    },

    {
      question: " Question16: which of these is not a sport",
      options: ["eatings", "basketball","volleyball"],
      correctAnswer: 0
    }, 

    {
      question: " Question17: which of these is not an example of an extended family",
      options: ["uncle","neighbor","nephew"],
      correctAnswer: 1 
    },

    {
      question: " Question18: which of these is a musical instruement",
      options: ["piano","balloon","eraser"],
      correctAnswer: 0

    },

    {
      question: " Question19: how many colors are in a rainbow",
      options: ["5", "7","13 "],
      correctAnswer: 0
    },

    {
      question: " Question20: which of these is not a rainbow color",
      options: ["orange","green","yellow"],
      correctAnswer: 2
    }
    // Initialization oF all the variables currentQuestion,score,
    // questionElements and optionsContainer
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  const retryButton = document.getElementById("retry-btn");
  
  //This Function helps to load the current question and options into the
  //HTML page 

  function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
  
    optionsContainer.innerHTML = "";
  
    for (let i = 0; i < question.options.length; i++) {
      const option = document.createElement("button");
      option.textContent = question.options[i];
      option.addEventListener("click", checkAnswer);
      optionsContainer.appendChild(option);
    }
  }
  
  //This function helps to check the selected answer if the answer(selectedOption) 
  //is correct and display the next question

  function checkAnswer(event) {
    const selectedOption = event.target;
    const question = questions[currentQuestion];
  
    if (selectedOption.textContent === question.options[question.correctAnswer]) {
      score++;
    }
  
    disableOptions();
    nextButton.style.display = "block";
  }
  
  // This function helps to disable the answer options after selection

  function disableOptions() {
    const options = optionsContainer.getElementsByTagName("button");
  
    for (let i = 0; i < options.length; i++) {
      options[i].removeEventListener("click", checkAnswer);
      options[i].disabled = true;
    }
  }
  
  // This function helps to load the next question so far currentQuestion is less
  // than the lenght of the array or show the final score

  function nextQuestion() {
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }


  // The function helps to show the final score and load quiz completed
  // and hide the options and next buttons unless the score is less than
  // 70% and the retryButton appears 

  function showScore() {
    questionElement.textContent = "Quiz completed!";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
    scoreContainer.textContent = `Your score: ${score} out of ${questions.length}`;
  
    
  }
  
  // eventListener for the next button

  nextButton.addEventListener("click", nextQuestion);
  
  // eventListener for the retry button

  retryButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    optionsContainer.style.display = "block";
    retryButton.style.display = "none";
    loadQuestion();
  });
  
  // Initialization of the quiz questions 
  loadQuestion();
  