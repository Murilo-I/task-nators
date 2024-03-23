import React, { Component } from "react";
import "./style.css";

class NotesCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskDone: false
    };
  }

  delete() {
    const index = this.props.index;
    this.props.deleteCard(index);
  }

  ballotCheck() {
    const checked = this.state.taskDone;
    this.setState({ taskDone: !checked });
  }

  render() {
    return (
      <section className="notes-card">
        <header className="notes-card-header">
          <h3 className="notes-card-title">{this.props.title}</h3>
          <h4 className="notes-card-category">{this.props.category}</h4>
          <i
            class="fas fa-trash-alt"
            style={{ cursor: "pointer" }}
            onClick={this.delete.bind(this)}
          ></i>
          <i
            className={this.state.taskDone ? "fas fa-check-double" : "fas fa-check"}
            style={{ cursor: "pointer" }}
            onClick={this.ballotCheck.bind(this)}
          ></i>
        </header>
        <p className="notes-card-text">{this.props.text}</p>
      </section>
    );
  }
}

export default NotesCard;
