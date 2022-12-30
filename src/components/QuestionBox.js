import React, {useState} from 'react';
import questions from '../questions';

function QuestionBox() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const[textcolor,setColor]= useState("Blue")
  const handleChnageTextColor = (e) => {
    setColor('#CCCCCC');
  }

  // Helper Functions

  /* A possible answer was clicked */
  function optionClicked(isCorrect) {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  }

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  var text = document.getElementsByClassName("question-text")

  return (
    <div className="App">
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className='area'>
        <div className="final-results">
          {/* 1. Header  */}
        <h1 id='title'>Quick Quiz</h1>

          {/* 2. Current Score  */}
        {/* <h2 id='currScore'>Score: {score}</h2> */}
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
          <h4>Made with ♥ by Priyanshi Rana</h4>
        </div>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className='area'>
          {/* 1. Header  */}
          <h1 id='title'>QUICK QUIZ</h1>

          {/* 2. Current Score  */}
          <div id='currScore'>
            <h2>Score: {score}</h2>
          </div>
          
        <div className="question-card">
          
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <small style={{ color:textcolor}} className="switch-container_text"><h3 className="question-text">{questions[currentQuestion].text}</h3></small>
          

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <button className='high' id='remove'>Remove Hightlight</button>
          <button className='high' id='add' onClick={(handleChnageTextColor)=>{document.getElementsByClassName('question-text').style.color = "red"}}>Highlight</button>
        </div>
        </div>
      )}
    </div>
  );
}

export default QuestionBox;