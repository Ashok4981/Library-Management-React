/*// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import HelloWorld from "./HelloWorld";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HelloWorld />
      </div>
    </Provider>
  );
}

export default App;*/

// src/App.js
/*import React from "react";
import { useSelector } from "react-redux";
import BookForm from "./components/BookForm";
import { selectBooks } from "./redux/booksSlice";

const App = () => {
  const books = useSelector(selectBooks);

  return (
    <div>
      <h1>Book List</h1>
      <BookForm />
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author}
            {book.publishedOn}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App; */

/*import React from "react";

import "./App.css";

import BookForm from "./component/BookForm";

function App() {
  return (
    <div className="App">
      <h1>Book Form</h1>

      <BookForm />
    </div>
  );
}

export default App;*/

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./component/Navbar";
import BookIndex from "./component/BookIndex";
import BookForm from "./component/BookForm";
const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<BookIndex />} />
        <Route path="/add-book" element={<BookForm />} />
      </Routes>
    </Router>
  );
};

export default App;
