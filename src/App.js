import logo from "./assets/logo.svg";
import "./assets/App.css";
import NotesList from "./components/List";
import NotesForm from "./components/Form";
import CategoriesList from "./components/Categories";
import Categories from "./datas/Categories";
import Notes from "./datas/Notes";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new Notes();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="header-text">Notes Generators</p>
        </header>
        <section className="content">
          <NotesForm
            newCard={this.notes.addNote.bind(this.notes)}
            categories={this.categories}
          />
          <main className="main-content">
            <CategoriesList
              categories={this.categories}
              newCategory={this.categories.addCategory.bind(this.categories)}
            />
            <NotesList
              notes={this.notes}
              delete={this.notes.deleteNote.bind(this.notes)}
            />
          </main>
        </section>
      </div>
    );
  }
}

export default App;
