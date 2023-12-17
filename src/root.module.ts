import { Module } from '@nestjs/common';
import { BookModule } from './Book/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('This is my root module');
  }
}
