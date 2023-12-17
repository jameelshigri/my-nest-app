import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { get } from 'http';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get('/all')
  getAllBooks(): Book[] {
    return this.bookService.showAllBookService();
  }
  @Post('/add')
  addBooks(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }
  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }
}
