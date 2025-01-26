import { Component } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from "./messages/messages.component";
import { CommonModule } from '@angular/common'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessagesComponent, CommonModule, RouterModule],
  styleUrl: './app.component.css',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes2</a> 
    </nav>
    <router-outlet></router-outlet>
    <app-messages></app-messages> 

  `,
})
export class AppComponent {
  title = 'Tour of Heroes';
}

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent},
  { path: 'detail/:id', component: HeroDetailComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] 
});