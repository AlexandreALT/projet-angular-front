import { Component, OnInit } from '@angular/core';
import { Character } from '../character/models/character';
import { CharacterService } from '../character/services/character.service';
import { Observable, filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  characters$!: Observable<Character[]>;

  constructor(
    private router: Router,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.fetchData();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.fetchData();
      });
  }

  fetchData() {
    this.characters$ = this.characterService.get();
  }
}
