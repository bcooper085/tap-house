import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'brew-list',
  template: `
  <ul>
    <li *ngFor="let currentBrew of childBrewList">{{currentBrew.name}} - {{currentBrew.brand}} - {{currentBrew.price}} - {{currentBrew.alcoholContent}} <button (click)="editButtonClicked(currentBrew)">Edit!</button></li>
  </ul>
  `
})

export class BrewListComponent {
  @Input() childBrewList: Brew[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(brewToEdit: Brew) {
    this.clickSender.emit(brewToEdit);
  }
}
