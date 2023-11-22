import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { Hero, NewHero } from "../../heroes";
import { SuperHeroesService } from "../../services/service";

@Component({
  selector: "hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class HeroFormComponent implements OnInit {
  @Input() hero: Hero | undefined;

  // Form group
  heroForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    powers: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
  });

  constructor(private service: SuperHeroesService) {}

  ngOnInit() {
    if (this.hero) {
      this.heroForm.patchValue({
        name: this.hero.name,
        powers: this.hero.powers,
        image: this.hero.image,
      });
    } 
  }

  onSubmit() {
    console.log("onSubmit", this.heroForm);
  
    if(this.hero) {
      const newHero: Hero = {
        id: this.hero.id,
        name: this.heroForm.value.name ?? "",
        powers: this.heroForm.value.powers ?? "",
        image: this.heroForm.value.image ?? "",
      };
      this.service.updateHero(newHero)
    } else {
      const newHero: NewHero = {
        name: this.heroForm.value.name ?? "",
        powers: this.heroForm.value.powers ?? "",
        image: this.heroForm.value.image ?? "",
      }
      this.service.addHero(newHero);
    }
  
    this.heroForm.reset();
  }
  
  resetForm() {
    this.heroForm.reset();
  }
}
