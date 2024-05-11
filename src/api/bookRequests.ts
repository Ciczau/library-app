import instance from "./instance";

export const getAllBooks = async () => {
  try {
    const res = await instance.get("/books");
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getBookById = async (id: string) => {
  try {
    const res = await instance.get(`/books/${id}`);
    return res.data;
  } catch (e) {
    return null;
  }
};

export const checkIfBookIsAvailable = async (id: string) => {
  try {
    const res = await instance.get(`/books/check/${id}`);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const borrowBook = async (bookId: string, userId: string) => {
  try {
    await instance.post(`/loans/add`, { bookId, userId });
    return true;
  } catch (e) {
    return false;
  }
};

export const getBorrowedBooks = async (userId: string) => {
  try {
    const res = await instance.get("/loans/user/" + userId);
    return res.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
