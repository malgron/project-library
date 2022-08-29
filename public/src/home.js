//getTotalBooksCount - takes in an array of book objects
//returns the number of objects in the array
function getTotalBooksCount(books) 
{
  if (!books.length)
  {
    return 0;
  }
  return books.length; 
}

//getTotalAccountsCount - takes in an array of accounts
//returns the number of accounts in the array
function getTotalAccountsCount(accounts) 
{
  return accounts.length;
}

//getBooksBorrowedCount - takes an array of books
//returns the number of books currently checked out
function getBooksBorrowedCount(books) 
{
  let borrowedCount = 0;
  for (let i = 0; i < books.length; i++)
  {
      if (books[i].borrows[0].returned === false)
      {
        borrowedCount++;
      }      
  }
  return borrowedCount;

}

//getMostCommonGenres - takes an array of book objects
//returns an array containing five items or fewer that represents the most common occuring generes
//ordered from most common to least common 

function getMostCommonGenres(books) 
{
  const bookGenres = books.map((book) => book.genre);
  const temp = [];
  //map over book genres
  bookGenres.map((genre) => {
    //for each genre, first check to see if genre already exists in array
    const genreLocation = temp.findIndex((element) => element.name === genre);
    //second, if it exists, increase count by 1
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
      //else, if it don't exist, push a new genre object onto array with count of 1
    } else {
      temp.push({ name: genre, count: 1 });
    }
  });
  temp.sort((a, b) => b.count - a.count);
  if (temp.length > 5) {
    return temp.slice(0, 5);
  }
  return temp;
}

//getMostPopularAuthors - takes an array of book objects
//returns an array containg 5 or less entries containing most popular book titles and a count of how many times the books have been checked out
function getMostPopularBooks(books) 
{
  const mostPopularBooks = [];
    
  for (let i = 0; i < books.length; i++)
  {
    mostPopularBooks.push({ name: books[i].title, count: books[i].borrows.length});
  }
  
  mostPopularBooks.sort((a, b) => b.count - a.count);
  if (mostPopularBooks.length > 5) {
    return mostPopularBooks.slice(0, 5);
  }
  return mostPopularBooks;
}

//getMostPopularAuthors - takes an array of book objects and an array of author objects
//returns an array containg 5 or less entries containing most popular authors and a count of how many times their books have been checked out
function getMostPopularAuthors(books, authors) 
{
  const mostPopularAuthors = [];
    
  for (let i = 0; i < books.length; i++)
  {
    for (let j = 0; j < authors.length; j++)
    {
      if (books[i].authorId === authors[j].id)
      {
        const fullname = authors[j].name.first + " " + authors[j].name.last;
        mostPopularAuthors.push({ name: fullname, count: books[i].borrows.length});
      }
    }
    
  }
  
  mostPopularAuthors.sort((a, b) => b.count - a.count);
  if (mostPopularAuthors.length > 5) {
    return mostPopularAuthors.slice(0, 5);
  }
  return mostPopularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
