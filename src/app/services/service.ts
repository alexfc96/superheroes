import { Injectable } from '@angular/core';
import { Hero, heroes } from '../heroes';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroesService {
  heroes: Hero[] = heroes;

  constructor() {}

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroeById(id: number): Hero | undefined {
    return this.heroes.find((heroe) => heroe.id === id);
  }

  getHeroesByName(name: string): Hero[] {
    return this.heroes.filter((heroe) => heroe.name.toLowerCase().includes(name.toLowerCase()));
  }
}
