import { Injectable } from '@angular/core';
import { Hero, NewHero, heroes } from '../heroes';

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

  addHero(hero: NewHero): void {
    const newHero: Hero = ({
      id: Math.floor(Math.random() * 255),
      name: hero.name,
      powers: hero.powers,
      image: hero.image,
    });
    
    this.heroes.push(newHero);
  }

  updateHero(heroe: Hero): void {
    const index = this.heroes.findIndex((h) => h.id === heroe.id);
    this.heroes[index] = heroe;
  }

  removeHero(id: number): void {
    const index = this.heroes.findIndex((h) => h.id === id);
    this.heroes.splice(index, 1);
  }
}
