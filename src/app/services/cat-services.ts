import {computed, effect, Injectable, Service, signal} from '@angular/core';
import {Cat} from '../shared/models/cat';

@Injectable({ providedIn: 'root'})
export class CatServices {
   catList = signal<Cat[]> ([
    {id:1, name:"frank", coatLength:20, Colors:"blue", hasShots: true, location:"ottawa", traits:"cool"},
    {id:2 ,name:"gibbit", coatLength:"50", Colors:"freenb", location:"las vegas", traits:"gambler"},
    {id:3, name:"George", coatLength:30, Colors:"orange", hasShots: true, location:"everywhere", traits:"not fun"}
  ]);
  catLists = this.catList.asReadonly();


  addCats(c:Cat){
    this.catList.update(list => [...list, c])
  }

  catsWithShots = computed(() =>
    this.catList().filter(cat => cat.hasShots === true)
  );
  constructor() {
    effect(() => {
      console.log('Number of cats:', this.catList().length);
    });
  }

  remove(id: number) {
    this.catList.update(list =>
      list.filter(cat => cat.id !== id)
    );
  }
}
