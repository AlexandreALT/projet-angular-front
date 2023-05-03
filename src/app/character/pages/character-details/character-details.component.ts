import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { Character } from '../../models/character';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Skill } from 'src/app/skills/models/skill';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  characterId: number;
  character$: Observable<Character> | undefined;
  skills$: Observable<Skill[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router
  ) {
    this.characterId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.character$ = this.route.params.pipe(
      switchMap((params) => {
        const id = +params['id'];
        return this.characterService.getById(id);
      })
    );
  }

  delete(id: number) {
    this.characterService.delete(id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['characters']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  edit(id: number) {
    this.router.navigate(['add-character/' + id]);
  }
}
