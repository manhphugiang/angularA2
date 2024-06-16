import { Component, Input } from '@angular/core';
import { Book } from '../giangmaInterface';

@Component({
  selector: 'app-books-giangma',
  templateUrl: './books-giangma.component.html',
  styleUrl: './books-giangma.component.css'
})
export class BooksGiangmaComponent {
@Input() myBooks991685007!: Book[];


displayedColumns: string[] =
['authorName', 'bookTitle', 'published']
}
