import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { BrewListComponent }  from './brew-list.component';
import { EditBrewComponent } from './edit-brew.component';
import { NewBrewComponent } from './new-brew.component';
import { FullnessPipe } from './fullness.pipe';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  BrewListComponent,
                  EditBrewComponent,
                  NewBrewComponent,
                  FullnessPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
