import { Component,inject } from '@angular/core';
import {Cat} from '../shared/models/cat';
import { CatEvent } from '../shared/models/cat';
import {CatsListItems} from '../cats-list-items/cats-list-items';
import {CatServices} from '../services/cat-services';

@Component({
  imports: [
    CatsListItems
  ],
  selector: 'app-cats-list',
  styleUrl: './cats-list.css',
  templateUrl: './cats-list.html',
})
export class CatsList {
   catsService = inject(CatServices);
  handleCatEvent(event: CatEvent) {
    console.log(event);
  }

  removeCat(id: number) {
    this.catsService.remove(id);
  }

}
