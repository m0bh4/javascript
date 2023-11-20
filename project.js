let books = [
    [1, "Book1", "Author1", 20, 50],
    [2, "Book2", "Author2", 15, 30],
    [3, "Book3", "Author3", 25, 20]
  ];
  
  function searchBook(searchTerm) {
    for (let i = 0; i < books.length; i++) {
      if (
        books[i][0] === searchTerm ||
        books[i][1].toLowerCase() === searchTerm.toLowerCase() ||
        books[i][2].toLowerCase() === searchTerm.toLowerCase()
      ) {
        return books[i];
      }
    }
    return null;
  }
  
  function sellBook(bookTitle, quantity, customerBalance) {
    const book = searchBook(bookTitle);
  
    if (!book) {
      console.log("Book not available.");
      return;
    }
  
    const bookId = book[0];
    const availableQuantity = book[4];
    const bookPrice = book[3];
  
    if (quantity > availableQuantity) {
      console.log("Insufficient quantity available.");
      return;
    }
  
    const totalCost = quantity * bookPrice;
  
    if (totalCost > customerBalance) {
      console.log("Insufficient funds in your balance.");
      return;
    }
  
    book[4] -= quantity;
  
    console.log(`Sold ${quantity} copies of the book "${bookTitle}".`);
    console.log(`Total cost: ${totalCost}.`);
    console.log(`Remaining balance: ${customerBalance - totalCost}.`);
  }
  
  console.log("Book information before the sale:");
  console.log(books);
  
  sellBook("Book2", 2, 100);
  
  console.log("Book information after the sale:");
  console.log(books);
  