import { Service, signal } from '@angular/core';
import {Cat} from '../shared/models/cat';

@Service()
export class CatServices {
  private catList = signal<Cat[]> ([
    {id:1, name:"frank", coatLength:20, Colors:"blue", hasShots: true, location:"ottawa", traits:"cool"},
    {id:2 ,name:"gibbit", coatLength:"50", Colors:"freenb", location:"las vegas", traits:"gambler"},
    {id:3, name:"George", coatLength:30, Colors:"orange", hasShots: true, location:"everywhere", traits:"not fun"}
  ]);
  catLists = this.catList.asReadonly();

}
