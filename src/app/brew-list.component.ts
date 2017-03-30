import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'brew-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="available">Available</option>
      <option value="notAvailable">Not Available</option>
    </select>
  <ul>
    <li *ngFor="let currentBrew of childBrewList | fullness:filterByAvailable">Name: {{currentBrew.name}} <br> Brand: {{currentBrew.brand}} <br> Price: {{currentBrew.price}} <br> Alchohol Content: {{currentBrew.alcoholContent}} <br> <span [class]="dangerLow(currentBrew)"> Available Pints: {{currentBrew.pint}}</span>
    <input *ngIf="currentBrew.pint > 0" type="button" (click)="removePint(currentBrew, 1)" value="Serve">
    <button (click)="editButtonClicked(currentBrew)">Edit!</button><hr></li>
  </ul>
  `
})

export class BrewListComponent {
  filterByAvailable: string = "available";

  @Input() childBrewList: Brew[];
  @Output() clickSender = new EventEmitter();


  editButtonClicked(brewToEdit: Brew) {
    this.clickSender.emit(brewToEdit);
  }

  onChange(optionFromMenu: string) {
    this.filterByAvailable = optionFromMenu;
  }

  removePint(clickedBrew: Brew, setFullness: number) {
     clickedBrew.pint -= setFullness;
   }

   dangerLow(currentBrew: Brew) {
     if (currentBrew.pint < 11){
       return "bg-danger";
     }
   }
}
