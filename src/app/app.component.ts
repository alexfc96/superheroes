import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Hero } from './heroes';
import { SuperHeroesService } from './services/service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'superheroes';
  heroes: Hero[] = [];

  constructor(private service: SuperHeroesService) {}

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }
}