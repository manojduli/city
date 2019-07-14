import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayGamesComponent } from './display-games/display-games.component';
import { AddGamesComponent } from './add-games/add-games.component';
import { HttpClientModule } from '@angular/common/http'
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  { path: "", component: DisplayGamesComponent },
  { path: "Display", component: DisplayGamesComponent },
  { path: "Add", component: AddGamesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayGamesComponent,
    AddGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
