import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';


import {FormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component'
import { StorageService } from './services/storage.service';
import { TransitionComponent } from './components/transition/transition.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    TransitionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
