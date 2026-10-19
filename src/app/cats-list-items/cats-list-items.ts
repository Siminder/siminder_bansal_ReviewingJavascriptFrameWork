import {Component, input} from '@angular/core';
import {CatsList} from '../cats-list/cats-list';

@Component({
  imports: [],
  selector: 'app-cats-list-items',
  styleUrl: './cats-list-items.css',
  templateUrl: './cats-list-items.html',
})
export class CatsListItems {
  cat = input.required<CatsList>()
}
