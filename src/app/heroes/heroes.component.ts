import { Component } from '@angular/core';
import {Hero} from '../hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}