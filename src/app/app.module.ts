import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NavBarComponent } from './navBar/navBar.component';
import { ToEmailComponent } from './toEmail/toEmail.component';
import { DateSelectorComponent } from './dateSelector/dateSelector.component';
import { SearchButtonComponent } from './searchButton/searchButton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToEmailComponent,
    DateSelectorComponent,
    SearchButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }