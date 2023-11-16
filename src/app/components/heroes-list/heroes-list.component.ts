import { Component, OnInit } from '@angular/core';
import { Hero } from '../../heroes';
import { SuperHeroesService } from '../../services/service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'heroes-list',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private service: SuperHeroesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.service.getHeroes();
  }

  onFilterName(name: string) {
    this.heroes = this.service.getHeroesByName(name);
  }

}