import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common'
import { Hero } from '../../heroes';
import { SuperHeroesService } from '../../services/service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from '../heroes-form/hero-form.component';

@Component({
  selector: 'heroes-list',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule ,NgOptimizedImage, FormsModule, HeroFormComponent, CommonModule],
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
  }

  unselectHero() {
    this.selectedHero = undefined;
  }

  onRemove(hero: Hero) {
    //aply verification
    this.service.removeHero(hero.id);
  }
}