import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Game } from '../Game';

@Component({
  selector: 'app-display-games',
  templateUrl: './display-games.component.html',
  styleUrls: ['./display-games.component.css']
})
export class DisplayGamesComponent implements OnInit {

  constructor(private service: FetchDataService) { }

  gameId: number;
  gameName: string;
  gamePrice: number;
  isUpdate = false;
  temp: number;

  ngOnInit() {
    this.service.getGames();
  }

  edit(game: Game) {
    this.gameId = game.gameId;
    this.gameName = game.gameName;
    this.gamePrice = game.gamePrice;
    this.temp = game.gameId;
    this.isUpdate = true;
  }

  updateGameList(id: number) {
    if (id == this.temp) {
      let newGameList = this.service.gamesList.filter(data => data.gameId != id);
      newGameList.push({ gameId: id, gameName: this.gameName, gamePrice: this.gamePrice });
      this.service.gamesList = newGameList;
      this.isUpdate = false;
      console.log(this.gameId);
    }
    else {
      this.isUpdate = false;
      alert("Cannot Update ID");
    }
  }

  delete(game: Game) {
    let newGameList = this.service.gamesList.filter(data => data.gameId != game.gameId);
    this.service.gamesList = newGameList;
  }
}
