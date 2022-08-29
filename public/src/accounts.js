//findAccountById - takes in an account object and account id
//locates account object matching id and returns that account object 
function findAccountById(accounts, id) 
{
  let found = accounts.find((account) => account.id === id);
  return found;
}

//sortAccountsByLastName - takes in an account object
//sorts accounts by last name and returns objects sorted by account holder last name
function sortAccountsByLastName(accounts) 
{
  accounts.sort((accountA, accountB) => 
        accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts;

}

//getTotalNumberOfBorrows - takes in an account object and books object 
//search book object and track the number of times the account appears under any borrows in the object
//return the total number of account matches (this is the number of times the account has borrowed books)
function getTotalNumberOfBorrows(account, books) 
{
  let matches = 0;
 
  books.forEach((book) => { book.borrows.forEach((borrow) => { if (borrow.id === account.id) { matches++; } }); });
  return matches;
}

//getBooksPossessedByAccount - takes in an account object, array of all books objects, and array of all author objects
//returns an array of book objects , including author information that represents all books currently checked out by account
function getBooksPossessedByAccount(account, books, authors) 
{
  const borrowedBooks = [];
  let results = [];
  for (let i = 0; i < books.length; i++)
  {
      for (let j = 0; j < books[i].borrows.length; j++)
      {
          if (account.id === books[i].borrows[j].id)
          {
              if (books[i].borrows[j].returned === false)
              {
                  borrowedBooks.push(books[i]);
              }
          }
      }
  }
  
  for (let i = 0; i < borrowedBooks.length; i++)
  {
      const author = authors.find(author=> author.id === borrowedBooks[i].authorId);
      const newBook = { ...borrowedBooks[i], author }
      results.push(newBook);
  }
  
  return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
