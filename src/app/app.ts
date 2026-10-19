import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cat } from './shared/models/cat';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title:string = "cat-adoption-center"

  catList: Cat[] = [
    {id:1, name:"frank", coatLength:20, Colors:"blue", hasShots: true, location:"ottawa", traits:"cool"},
    {id:2 ,name:"gibbit", coatLength:"50", Colors:"freenb", location:"las vegas", traits:"gambler"},
    {id:3, name:"George", coatLength:30, Colors:"orange", hasShots: true, location:"everywhere", traits:"not fun"}
  ]
}
