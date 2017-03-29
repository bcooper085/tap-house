import { Component } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
    <h1>Brews on Tap</h1>
    <brew-list [childBrewList]="masterBrewList" (clickSender)="editBrew($event)"></brew-list>
      <hr>
      <edit-brew [childSelectedBrew]="selectedBrew" (doneButtonClickedSender)="finishedEditing()"></edit-brew>
  </div>
  `
})
export class AppComponent  {
  selectedBrew: Brew = null;

  masterBrewList: Brew[] = [
    new Brew('beer', 'beer company', '$6', '5.4%'),
    new Brew('beer for you', 'beer company', '$25', '18.4%')
  ];

  editBrew(clickedBrew: Brew) {
    this.selectedBrew = clickedBrew;
  }

  finishedEditing() {
    this.selectedBrew = null;
  }
}
