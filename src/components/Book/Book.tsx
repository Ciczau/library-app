import { useNavigate } from "react-router-dom";
import { TBook } from "../../types/book";
import * as S from "./Book.styled";
import { useUserContext } from "../../context/user";
import { borrowBook } from "../../api/bookRequests";
import { formatDate } from "../utils/formatDate";
import { useEffect, useState } from "react";

type Props = {
  book: TBook;
  type: "multi" | "single";
  available?: boolean;
  loan?: { returnDate: string } | false;
};
const Book = ({ book, type, available, loan = false }: Props) => {
  const navigate = useNavigate();
  const user = useUserContext();
  const [bookmarked, setBookmarked] = useState(false);
  const handleLoan = async () => {
    if (available && user) {
      const res = await borrowBook(book.id.toString(), user.id.toString());
      console.log(res);
      if (res) {
        navigate("/borrowed");
      }
    }
  };

  const storedBooks = localStorage.getItem("books");
  const isBookmarked = storedBooks?.includes(JSON.stringify(book));

  useEffect(() => {
    if (isBookmarked) {
      setBookmarked(true);
    }
  }, [book, isBookmarked]);
  const handleBookmark = () => {
    const storedBooks = localStorage.getItem("books");
    let books = storedBooks ? JSON.parse(storedBooks) : [];

    const bookIndex = books.findIndex(
      (storedBook: TBook) => storedBook.id === book.id
    );

    if (bookIndex === -1) {
      books.push(book);
      setBookmarked(true);
    } else {
      setBookmarked(false);
      books.splice(bookIndex, 1);
    }

    localStorage.setItem("books", JSON.stringify(books));
  };
  return (
    <S.Wrapper type={type}>
      <S.Image src={book.image} type={type} />
      <S.Content type={type}>
        <div>
          {type === "single" && (
            <S.TopBar>
              {bookmarked ? (
                <S.FilledHeartIcon onClick={handleBookmark} />
              ) : (
                <S.HeartIcon onClick={handleBookmark} />
              )}
            </S.TopBar>
          )}
          <S.Title type={type}>{book.title}</S.Title>
          <S.Author type={type}>{book.author}</S.Author>
          {loan && loan.returnDate && (
            <>
              <S.Author type={type}>
                Wypożyczona do {formatDate(loan.returnDate)}
              </S.Author>
              <S.Author type={type}>
                Oddana: {book.returned ? "tak" : "nie"}
              </S.Author>
            </>
          )}

          <S.Information>
            {type === "single" &&
              (available
                ? "Książka jest dostępna!"
                : "Książka jest aktualnie niedostępna")}
          </S.Information>
        </div>
        {type === "multi" ? (
          <S.Button
            type={type}
            available={true}
            onClick={() => navigate(`/book/${book.id}`)}
          >
            Sprawdź
          </S.Button>
        ) : (
          <S.Button type={type} available={available} onClick={handleLoan}>
            Wypożycz
          </S.Button>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default Book;
