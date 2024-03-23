import React, { Component } from "react";
import "./style.css";

class NotesCard extends Component {

  delete() {
    const index = this.props.index;
    this.props.deleteCard(index);
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
        </header>
        <p className="notes-card-text">{this.props.text}</p>
      </section>
    );
  }
}

export default NotesCard;
