import { NgModule, enableProdMode }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { MainMenuComponent } from './main-menu.component';
import { NewHoleComponent } from './new-hole.component';

//enableProdMode();

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MainMenuComponent, NewHoleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
