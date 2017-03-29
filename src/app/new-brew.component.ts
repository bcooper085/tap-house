import { Component, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'new-brew',
  template: `
    <div>
    <h1>New Brew</h1>
    <label>Enter Brew Name:</label>
    <input #newName>
    <label>Enter Brand Name:</label>
    <input #newBrand>
    <label>Enter Price:</label>
    <input #newPrice>
    <label>Enter Alchoholic Content:</label>
    <input #newAlcoholContent>
    <button (click)="submitBrew(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value='';">Add Brew</button>
    </div>
  `
})

export class NewBrewComponent {
  @Output() newBrewSender = new EventEmitter();

  submitBrew(name: string, brand: string, price: string, alcoholContent: string) {
    var newBrewToAdd: Brew = new Brew(name, brand, price, alcoholContent);
    this.newBrewSender.emit(newBrewToAdd);
  }
}
