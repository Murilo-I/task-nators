import React, { Component } from "react";
import "./style.css";

class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "No category";
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _handleCategoryChange(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.newCard(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className="notes-form" onSubmit={this._createCard.bind(this)}>
        <select
          className="notes-form-input"
          onChange={this._handleCategoryChange.bind(this)}
        >
          <option defaultChecked="true">No category</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
        <input
          className="notes-form-input"
          type="text"
          placeholder="Title"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={10}
          className="notes-form-input"
          placeholder="Write your note..."
          onChange={this._handleTextChange.bind(this)}
        />
        <div className="buttons">
          <button type="submit" className="notes-form-input notes-form-submit">
            Create
          </button>
          <button type="reset" className="notes-form-input notes-form-submit">
            Clean
          </button>
        </div>
      </form>
    );
  }
}

export default NotesForm;
