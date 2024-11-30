import React from "react";
import s from "./donate-books.module.scss";
import { livrosDoados } from "../../data/livros";

const LivrosDoados = () => {
  return (
    <div className={s.donated__books}>
      <h1 className={s.donated__title}>Livros Doados</h1>
      <div className={s.donated__books_container}>
        {livrosDoados.map((book) => (
          <div key={book.id} className={s.donated__book_card}>
            <img
              src={book.image}
              alt={book.title}
              className={s.donated__book_image}
            />
            <h2 className={s.donated__book_title}>{book.title}</h2>
            <p className={s.donated__book_author}>{book.author}</p>
            <p className={s.donated__book_category}>{book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivrosDoados;
