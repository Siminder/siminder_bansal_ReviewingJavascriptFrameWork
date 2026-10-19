import { Component, input } from '@angular/core';
import { Cat } from '../shared/models/cat';

@Component({
  selector: 'app-cats-list-items',
  imports: [],
  styleUrl: './cats-list-items.css',
  templateUrl: './cats-list-items.html',
})
export class CatsListItems {
  cat = input.required<Cat>();
}
