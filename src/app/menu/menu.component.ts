import { Component, OnInit } from '@angular/core';
import { Character } from '../character/models/character';
import { CharacterService } from '../character/services/character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  characters$!: Observable<Character[]>;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.characters$ = this.characterService.get();
  }
}
