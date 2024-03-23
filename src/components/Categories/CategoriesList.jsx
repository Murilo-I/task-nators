import React, { Component } from "react";
import "./style.css";

class CategoriesList extends Component {

  constructor() {
    super();
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

  _enterEvent(ee) {
    if (ee.key === "Enter") {
      let value = ee.target.value;
      this.props.newCategory(value);
    }
  }

  render() {
    return (
      <div className="categories">
        <ul className="categories-list">
          {this.state.categories.map((category, index) => {
            return (
              <li key={index} className="category-item">
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="add category"
          className="category-input"
          onKeyUp={this._enterEvent.bind(this)}
        />
      </div>
    );
  }
}

export default CategoriesList;
