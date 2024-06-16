import { Component } from '@angular/core';
import {A2Personal, Book, Campus} from './giangmaInterface';
import cpdata from '../assets/data/Assignment02.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A2giangma';

  giangmaPersonal: A2Personal = cpdata.a2Personal;
  giangmaBook: Book[] =cpdata.myBooks;
  giangmaCampus: Campus[] =cpdata.campusData;

}
