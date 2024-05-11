import { useEffect, useState } from "react";
import Book from "../../components/Book/Book";
import { TBook } from "../../types/book";
import * as S from "./BorrowedBooks.styled";
import { getBorrowedBooks } from "../../api/bookRequests";
import { useUserContext } from "../../context/user";
import Navigation from "../../components/Navigation/Navigation";

const BorrowedBooks = () => {
  const [books, setBooks] = useState<TBook[]>([]);
  const user = useUserContext();
  useEffect(() => {
    const getBooks = async (userId: string) => {
      const res = await getBorrowedBooks(userId);
      console.log(res);
      setBooks(res as TBook[]);
    };
    if (user) {
      getBooks(user.id.toString());
    }
  }, [user]);
  const renderBooks = () => {
    return books.map((book) => {
      return (
        <Book
          key={book.id}
          book={book}
          type="multi"
          loan={{ returnDate: book.returnDate }}
        />
      );
    });
  };
  return (
    <S.Wrapper>
      <Navigation />
      <S.Title>Wypożyczone książki</S.Title>
      <S.BooksContainer>{renderBooks()}</S.BooksContainer>
    </S.Wrapper>
  );
};

export default BorrowedBooks;
