import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
    <h1>Brews on Tap</h1>
      <ul>
        <li *ngFor="let currentBrew of brews">{{currentBrew.name}} - {{currentBrew.brand}} - {{currentBrew.price}} - {{currentBrew.alcoholContent}} <button (click)="editBeer(currentBrew)">Edit!</button></li>
      </ul>
      <hr>
      <div *ngIf="selectedBrew">
      <h3>{{selectedBrew.name}}</h3>
      <h3>Edit Brew</h3>
      <label>Enter Brew Name:</label>
      <input [(ngModel)]="selectedBrew.name">
      <label>Enter Brand Name:</label>
      <input [(ngModel)]="selectedBrew.brand">
      <label>Enter Price:</label>
      <input [(ngModel)]="selectedBrew.price">
      <label>Enter Alchoholic Content:</label>
      <input [(ngModel)]="selectedBrew.alcoholContent">
      <button (click)="finishedEditing()">Done</button>
      </div>
  </div>
  `
})
export class AppComponent  {
  brews: Brew[] = [
    new Brew('beer', 'beer company', '$6', '5.4%'),
    new Brew('beer for you', 'beer company', '$25', '18.4%')
  ];
  selectedBrew = null;

  editBeer(clickedBrew) {
    this.selectedBrew = clickedBrew
  }

  finishedEditing() {
    this.selectedBrew = null;
  }
}

export class Brew {
  public pint: number = 124;
  constructor(public name: string, public brand: string, public price: string, public alcoholContent: string) { }
}
