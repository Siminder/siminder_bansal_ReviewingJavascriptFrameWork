import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cat } from './shared/models/cat';
import {CatsList} from './cats-list/cats-list';

@Component({
  imports: [RouterOutlet, CatsList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title:string = "cat-adoption-center"


}
