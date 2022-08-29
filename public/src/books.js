//findAuthorById - has two parameters: array of author objects, and interger ID of a single author
//returns the author object that has the matching ID
function findAuthorById(authors, id) 
{
  const matchingAuthor = authors.find((author) => author.id === id);
  return matchingAuthor;
}

//ffindBookById - has two parameters: array of book objects, and string ID of a single book
//returns the book object that has the matching ID
function findBookById(books, id) 
{
  const matchingBook = books.find((book) => book.id === id);
  return matchingBook;
}

//partitionBooksByBorrowedStatus - takes in an array of book objects
//returns an array with two arrays inside that represent books that are checked out and books that have been returned
function partitionBooksByBorrowedStatus(books) 
{
  const booksCheckedOut = [];
  const booksReturned = [];
  

  for (let i = 0; i < books.length; i++)
  {
      if (books[i].borrows[0].returned === true)
      {
        booksReturned.push(books[i]);
      }
      else
      {
        booksCheckedOut.push(books[i]);
      }
  }
  const partitionedBooks = [booksCheckedOut, booksReturned];
  return partitionedBooks;
  
}

//getBorrowersForBook - takes a book object and an array of all account objects
//returns an array of 10 or fewer account objects that represents accounts given by IDs and the return staus of borrowed book
function getBorrowersForBook(book, accounts) 
{
  const bookBorrows = [];

  for (let i = 0; i < accounts.length; i++)
  {
    for (let j = 0; j < book.borrows.length; j++)
    {
      if (accounts[i].id === book.borrows[j].id)
      {
        bookBorrows.push({ ...accounts[i], returned: book.borrows[j].returned})
      }
    }
  }
  if (bookBorrows.length > 10) 
  {
    return bookBorrows.slice(0, 10);
  }  
  return bookBorrows;

  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
