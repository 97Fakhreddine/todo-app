import React from "react";
import { Component } from "react";
import "../Components/Css-components/taskList.css";
// import { ThemeContext, themes } from "./theme-context";
// import ThemedButton from "./themed-button";

class TaskList extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      //   theme: themes.light,
    };

    this.onDeleteClick = () => {
      console.log(" delete button..");
    };

    // this.toggleTheme = () => {
    //     this.setState(state => ({
    //       theme:
    //         state.theme === themes.dark
    //           ? themes.light
    //           : themes.dark,
    //     }));

    this.onSubmitClick = (e) => {
      this.setState({ task: e.target.value });
      console.log({ task: e.target.value });
    };

    this.handleChange = (e) => {
      this.setState({ task: e.target.value });
      console.log(e.target.value);
    };
  }

  render() {
    return (
      <div>
        <div className="task-list-headers">
          <h3>Task List</h3>
          <div className="ui input">
            <input
              type="text"
              value={this.state.value}
              placeholder="your task is ... "
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <button
            type="text"
            className="ui primary button basic"
            onClick={this.onSubmitClick.bind(this)}
          >
            Submit
          </button>

          {/*   <ThemedButton onClick={this.changeTheme.bind(this)}>
          Change Theme
    </ThemedButton>*/}

          <div className="line"></div>
        </div>
        {/*---------------------------the first part of the component is done----------------*/}
        .
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="meta">Tasks</div>
              <div className="ui two buttons">
                <div className="ui basic green button">Modify</div>
                <div
                  className="ui basic red button"
                  onClick={() => this.onDeleteClick()}
                >
                  Delete
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
