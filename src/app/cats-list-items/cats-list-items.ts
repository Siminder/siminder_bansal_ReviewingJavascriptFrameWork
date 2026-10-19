import { Component, input, output } from '@angular/core';
import { Cat } from '../shared/models/cat';
import { CatEvent } from '../shared/models/cat';

@Component({
  selector: 'app-cats-list-items',
  imports: [],
  styleUrl: './cats-list-items.css',
  templateUrl: './cats-list-items.html',
})
export class CatsListItems {
  cat = input.required<Cat>();

  catEvent = output<CatEvent>();

  openCat() {
    this.catEvent.emit({
      id: this.cat().id,
      action: 'opened'
    });
  }

  favouriteCat() {
    this.catEvent.emit({
      id: this.cat().id,
      action: 'favourited'
    });
  }
}
