import { Component } from '@angular/core';
import {Hero} from '../hero';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService} from '../message.service'
import { RouterModule} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule, NgFor, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, 
    private messageService: MessageService) {}

  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
