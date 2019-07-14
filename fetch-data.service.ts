import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './Game';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  gamesList: Game[];
  constructor(private http: HttpClient) { }

  getGames() {
    this.http.get<Game[]>("assets/Games.Json").subscribe(data => this.gamesList = data);
  }
}
