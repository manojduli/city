import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent implements OnInit {

  constructor(private service: FetchDataService) { }


  ngOnInit() {
  }

  addGame(gameId, gameName, gamePrice) {
    this.service.gamesList.push({ gameId, gameName, gamePrice });
  }

}