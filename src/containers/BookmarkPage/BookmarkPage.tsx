import { useEffect, useState } from "react";
import Book from "../../components/Book/Book";
import { TBook } from "../../types/book";
import * as S from "./BookmarkPage.styled";
import { getBorrowedBooks } from "../../api/bookRequests";
import { useUserContext } from "../../context/user";
import Navigation from "../../components/Navigation/Navigation";

const BookmarkPage = () => {
  const user = useUserContext();
  const books: TBook[] = localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books") ?? "")
    : [];

  const renderBooks = () => {
    return books.map((book) => {
      return <Book key={book.id} book={book} type="multi" />;
    });
  };
  return (
    <S.Wrapper>
      <Navigation />
      <S.Title>Twoje ulubione książki!</S.Title>
      <S.BooksContainer>{renderBooks()}</S.BooksContainer>
    </S.Wrapper>
  );
};

export default BookmarkPage;
