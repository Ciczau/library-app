import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import * as S from "./SearchPage.styled";
import { TBook } from "../../types/book";
import { useParams } from "react-router-dom";
import { getAllBooks } from "../../api/bookRequests";
import Book from "../../components/Book/Book";
import { useDebounce } from "use-debounce";

const SearchPage = () => {
  const [books, setBooks] = useState<TBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<TBook[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const params = useParams();
  useEffect(() => {
    console.log(params);
    const getBooks = async () => {
      const res = await getAllBooks();
      console.log(res);
      setBooks(res as TBook[]);
      setFilteredBooks(res as TBook[]);
    };
    getBooks();
  }, []);

  useEffect(() => {
    const filterBooks = () => {
      const filteredBooks = books.filter((book) => {
        return (
          book.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          book.author.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      return filteredBooks;
    };
    setFilteredBooks(filterBooks());
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const renderBooks = () => {
    return filteredBooks.map((book) => {
      return <Book key={book.id} book={book} type="multi" />;
    });
  };
  return (
    <>
      <Navigation />
      <S.Wrapper>
        <S.Input
          placeholder="Wyszukaj książkę lub autora"
          value={inputValue}
          onChange={handleChange}
        />
        <S.BooksContainer>{renderBooks()}</S.BooksContainer>
      </S.Wrapper>
    </>
  );
};

export default SearchPage;
