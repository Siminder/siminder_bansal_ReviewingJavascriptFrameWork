import { Component } from '@angular/core';
import {Cat} from '../shared/models/cat';
import { CatEvent } from '../shared/models/cat';
import {CatsListItems} from '../cats-list-items/cats-list-items';

@Component({
  imports: [
    CatsListItems
  ],
  selector: 'app-cats-list',
  styleUrl: './cats-list.css',
  templateUrl: './cats-list.html',
})
export class CatsList {

  handleCatEvent(event: CatEvent) {
    console.log(event);
  }

}
