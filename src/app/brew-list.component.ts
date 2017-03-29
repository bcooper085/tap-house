import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'brew-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value=1 selected="selected">One pint</option>
      <option value=2>Two pints</option>
      <option value=3>3 pints</option>
    </select>
  <ul>
    <li *ngFor="let currentBrew of childBrewList | completeness">Name: {{currentBrew.name}} <br> Brand: {{currentBrew.brand}} <br> Price: {{currentBrew.price}} <br> Alchohol Content: {{currentBrew.alcoholContent}} <button (click)="editButtonClicked(currentBrew)">Edit!</button></li>
  </ul>
  `
})

export class BrewListComponent {

  @Input() childBrewList: Brew[];
  @Output() clickSender = new EventEmitter();

  removePint: number = "1";

  editButtonClicked(brewToEdit: Brew) {
    this.clickSender.emit(brewToEdit);
  }
}
