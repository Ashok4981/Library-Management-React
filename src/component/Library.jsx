import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    BookName: "",
    PublishedOn: "",
    Language: "",
    Genre: "",
    PublicationId: 0,
    AddressId: 0,
    AuthorId: 0,
  });

  useEffect(() => {
    // Fetch all books when the component mounts
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("https://localhost:44382/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const createBook = async () => {
    try {
      await axios.post("https://localhost:44382/api/books", newBook);
      // Clear the form and refresh the book list
      setNewBook({
        BookName: "",
        PublishedOn: "",
        Language: "",
        Genre: "",
        PublicationId: 0,
        AddressId: 0,
        AuthorId: 0,
      });
      fetchBooks();
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`https://localhost:44382/api/books/${bookId}`);
      // Refresh the book list
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <table>
          <thead>
            <tr>
              <th>BookName</th>
              <th>PublishedOn</th>
              <th>Language</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.BookName}</td>
                <td>{d.PublishedOn}</td>
                <td>{d.Language}</td>
                <td>{d.Genre}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2">Read</button>
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;
