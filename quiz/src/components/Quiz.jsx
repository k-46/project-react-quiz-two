import React, { Component } from "react";
import "./Quiz.css";
import questions from "../Data/quizQuestion.json";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
    };
  }

  handleQuestion(action) {
    if (action == "prev") {
      if (this.state.currentQuestion != 0) {
        this.setState({ currentQuestion: this.state.currentQuestion - 1 });
      } else {
        this.setState({ currentQuestion: this.state.currentQuestion });
      }
    } else if (action == "next") {
      if (this.state.currentQuestion == questions.length - 1) {
        this.setState({ currentQuestion: this.state.currentQuestion });
      } else {
        this.setState({ currentQuestion: this.state.currentQuestion + 1 });
      }
    } else if (action == "quit") {
      this.setState({ currentQuestion: 0 });
    }
  }

  render() {
    return (
      <div className="quiz">
        <div className="questionBlock">
          <h2>Question</h2>
          <p id="questionNo">
            <span>{this.state.currentQuestion + 1}</span> of 15
          </p>
          <h2 id="question">
            {questions[this.state.currentQuestion].question}
          </h2>
        </div>

        <div className="optionsBlock">
          <div className="options">
            <button className="option">
              {questions[this.state.currentQuestion].optionA}
            </button>
            <button className="option">
              {questions[this.state.currentQuestion].optionB}
            </button>
            <button className="option">
              {questions[this.state.currentQuestion].optionC}
            </button>
            <button className="option">
              {questions[this.state.currentQuestion].optionD}
            </button>
          </div>
          <div className="settingButtons">
            <button
              id="previousButton"
              onClick={() => this.handleQuestion("prev")}
            >
              Previous
            </button>
            <button id="nextButton" onClick={() => this.handleQuestion("next")}>
              Next
            </button>
            <button
              id="quitButton"
              onClick={() =>
                confirm("Are you Sure?") ? this.handleQuestion("quit") : ""
              }
            >
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
