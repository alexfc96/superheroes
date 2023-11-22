import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { Hero } from '../../heroes';
import { SuperHeroesService } from '../../services/service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'heroes-list',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule ,NgOptimizedImage, FormsModule],
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;
  searchHeroName: string = '';

  constructor(private service: SuperHeroesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.service.getHeroes();
  }

  onFilterChange(name: string) {
    this.heroes = this.service.getHeroesByName(name);
  }

  onEdit(hero: Hero) {
    this.selectedHero = hero;
    // this.service.updateHero(this.selectedHero)
  }

  onRemove(hero: Hero) {
    //aply verication
    this.service.removeHero(hero.id);
  }
}