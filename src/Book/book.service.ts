import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class BookService {
  public books: Book[] = [];
  //create/add Book
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'Book has been added successfully';
  }

  //retrieve Book
  showAllBookService(): Book[] {
    return this.books;
  }
  // update Book
  updateBookService(book: Book): string {
    let index = this.books.findIndex((currentBook) => {
      return currentBook.id === book.id;
    });
    this.books[index] = book;
    return 'Book has been updated successfully';
  }
  //delete Book
  deleteBookService(bookId: string): string {
    this.books.filter((book) => {
      return book.id !== bookId;
    });
    return 'Book has been deleted successfully';
  }
}
