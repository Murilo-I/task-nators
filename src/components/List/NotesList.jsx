import React, { Component } from "react";
import NotesCard from "../Card";
import "./style.css";

class NotesList extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
    this._newNote = this._newNote.bind(this);
  }

  componentDidMount() {
    this.props.notes.subscribe(this._newNote);
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this._newNote);
  }

  _newNote(notes) {
    this.setState({ ...this.state, notes });
  }

  render() {
    return (
      <ul className="notes-list">
        {this.state.notes.map((card, index) => {
          return (
            <li className="notes-list-item" key={index}>
              <NotesCard
                index={index}
                title={card.title}
                text={card.text}
                category={card.category}
                deleteCard={this.props.delete}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
