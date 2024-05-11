export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const dt = dateObj.getDate();

  return `${year}-${month}-${dt}`;
};
