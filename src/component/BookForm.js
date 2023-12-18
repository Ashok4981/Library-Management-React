import React, { useState } from "react";
import axios from "axios";

const BookForm = ({ onAddBook }) => {
  const [book, setBook] = useState({
    BookName: "",
    PublishedOn: "",
    Language: "",
    Genre: "",
    PublicationId: 0,
    PublishingCompanyName: "",
    AddressId: 0,
    AddressLine1: "",
    AddressLine2: "",
    PinCode: "",
    State: "",
    Country: "",
    AuthorId: 0,
    FirstName: "",
    LastName: "",
    Nationality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Before Axios request");
    try {
      const formattedBook = {
        ...book,
        PublishedOn: new Date(book.PublishedOn),
      };
      const response = await axios.post(
        "https://localhost:44382/api/books",
        formattedBook
      );
      console.log(response.data);
      console.log("Book added successfully:", response.data);

      setBook({
        BookName: "",
        PublishedOn: "",
        Language: "",
        Genre: "",
        PublicationId: 0,
        PublishingCompanyName: "",
        AddressId: 0,
        AddressLine1: "",
        AddressLine2: "",
        PinCode: "",
        State: "",
        Country: "",
        AuthorId: 0,
        FirstName: "",
        LastName: "",
        Nationality: "",
      });
      console.log("State after clearing:", book);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />

      <label>
        Book Name:
        <input
          type="text"
          name="BookName"
          value={book.BookName}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Published On:
        <input
          type="datetime-local"
          name="PublishedOn"
          value={book.PublishedOn}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Language:
        <input
          type="text"
          name="Language"
          value={book.Language}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Genre:
        <input
          type="text"
          name="Genre"
          value={book.Genre}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Publication ID:
        <input
          type="number"
          name="PublicationId"
          value={book.PublicationId}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        PublishingCompanyName:
        <input
          type="text"
          name="PublishingCompanyName"
          value={book.PublishingCompanyName}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Address ID:
        <input
          type="number"
          name="AddressId"
          value={book.AddressId}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Address Line1:
        <input
          type="text"
          name="AddressLine1"
          value={book.AddressLine1}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Address Line2:
        <input
          type="text"
          name="AddressLine2"
          value={book.AddressLine2}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        PinCode:
        <input
          type="text"
          name="PinCode"
          value={book.PinCode}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        State:
        <input
          type="text"
          name="State"
          value={book.State}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Country:
        <input
          type="text"
          name="Country"
          value={book.Country}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Author ID:
        <input
          type="number"
          name="AuthorId"
          value={book.AuthorId}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Author FirstName:
        <input
          type="text"
          name="FirstName"
          value={book.FirstName}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <label>
        Author LastName:
        <input
          type="text"
          name="LastName"
          value={book.LastName}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />
      <label>
        Nationality:
        <input
          type="text"
          name="Nationality"
          value={book.Nationality}
          onChange={handleChange}
          className="form-control"
        />
      </label>

      <br />

      <br />

      <button type="submit" className="btn btn-primary">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
