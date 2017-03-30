import { Component, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'new-brew',
  template: `
    <div class="newBrewForm">
      <h1>New Brew</h1>
      <input #newName placeholder="Brew Name">
      <input #newBrand placeholder="Brand Name">
      <input #newPrice placeholder="Price">
      <input #newAlcoholContent placeholder="Alchoholic Content"><br>
      <button class="btn btn-primary" (click)="submitBrew(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value='';">Add Brew</button>
    </div>
  `
})

export class NewBrewComponent {
  @Output() newBrewSender = new EventEmitter();

  submitBrew(name: string, brand: string, price: string, alcoholContent: number) {
    var newBrewToAdd: Brew = new Brew(name, brand, price, alcoholContent);
    this.newBrewSender.emit(newBrewToAdd);
  }
}
