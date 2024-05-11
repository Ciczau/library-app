import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import * as S from "./BookPage.styled";
import { useEffect, useState } from "react";
import { TBook } from "../../types/book";
import Book from "../../components/Book/Book";
import { checkIfBookIsAvailable, getBookById } from "../../api/bookRequests";

const BookPage = () => {
  const [book, setBook] = useState<TBook | null>(null);
  const [available, setAvailable] = useState<boolean>(false);
  const params = useParams();
  useEffect(() => {
    const getBook = async (id: string) => {
      const res = await getBookById(id);
      setBook(res as TBook);
    };
    if (params.id) {
      getBook(params.id);
    }
  }, [params.id]);

  useEffect(() => {
    const checkBook = async () => {
      if (book) {
        const res = await checkIfBookIsAvailable(book.id.toString());
        setAvailable(res);
      }
    };
    checkBook();
  }, [book]);
  return (
    <S.Wrapper>
      <Navigation />
      {book && <Book book={book} type="single" available={available} />}
    </S.Wrapper>
  );
};

export default BookPage;
