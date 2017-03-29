import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'edit-brew',
  template: `
  <div>
      <div *ngIf="childSelectedBrew">
      <h3>{{childSelectedBrew.name}}</h3>
      <h3>Edit Brew</h3>
      <label>Enter Brew Name:</label>
      <input [(ngModel)]="childSelectedBrew.name">
      <label>Enter Brand Name:</label>
      <input [(ngModel)]="childSelectedBrew.brand">
      <label>Enter Price:</label>
      <input [(ngModel)]="childSelectedBrew.price">
      <label>Enter Alchoholic Content:</label>
      <input [(ngModel)]="childSelectedBrew.alcoholContent">
      <button (click)="doneButtonClicked()">Done</button>
  </div>
  </div>
  `
})

export class EditBrewComponent {
  @Input() childSelectedBrew: Brew;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
