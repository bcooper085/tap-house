import { Component } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
    <div class="jumbotron">
      <h2>Brew House</h2>
    </div>
    <h1>Brews on Tap</h1>
    <brew-list [childBrewList]="masterBrewList" (clickSender)="editBrew($event)"></brew-list>
      <edit-brew [childSelectedBrew]="selectedBrew" (doneButtonClickedSender)="finishedEditing()"></edit-brew>
      <new-brew (newBrewSender)="addBrew($event)"></new-brew>
  </div>
  `
})
export class AppComponent  {
  selectedBrew: Brew = null;

  masterBrewList: Brew[] = [
    new Brew('beer', 'beer company', '$6', 5.4),
    new Brew('beer for you', 'beer company', '$25', 18.4)
  ];

  editBrew(clickedBrew: Brew) {
    this.selectedBrew = clickedBrew;
  }

  finishedEditing() {
    this.selectedBrew = null;
  }

  addBrew(newBrewFromChild: Brew) {
    this.masterBrewList.push(newBrewFromChild);
  }
}
