import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { Skill } from 'src/app/skills/models/skill';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SkillsService } from '../../../skills/services/skills.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
})
export class CharacterFormComponent {
  characterForm!: FormGroup;
  selectedSkills: Skill[] = [];
  skill1: Skill | undefined;
  skill2: Skill | undefined;
  skill3: Skill | undefined;
  skills$!: Observable<Skill[]>;
  characterId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private skillService: SkillsService
  ) {
    this.characterId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.characterForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      skill1: [null],
      skill2: [null],
      skill3: [null],
    });

    this.skills$ = this.skillService.get();

    if (this.characterId !== null && this.characterId !== 0) {
      this.characterService.getById(this.characterId).subscribe((character) => {
        this.characterForm.patchValue({
          name: character.name,
          role: character.role,
        });
      });
    } else {
      this.characterService.getNextCharacterId().subscribe((id) => {
        this.characterForm.addControl(
          'id',
          this.formBuilder.control(id, Validators.required)
        );
      });
    }
  }

  onSelectSkill1(event: any) {
    const selectedValue = event.target.value;
    this.skill1 = selectedValue;
  }

  onSelectSkill2(event: any) {
    const selectedValue = event.target.value;
    this.skill2 = selectedValue;
  }

  onSelectSkill3(event: any) {
    const selectedValue = event.target.value;
    this.skill3 = selectedValue;
  }

  onSubmit(): void {
    this.selectedSkills = [];

    if (this.skill1 != null) this.selectedSkills.push(this.skill1!);
    if (this.skill2 != null) this.selectedSkills.push(this.skill2!);
    if (this.skill3 != null) this.selectedSkills.push(this.skill3!);

    const character: Character = {
      id: this.characterId,
      name: this.characterForm.get('name')!.value,
      role: this.characterForm.get('role')!.value,
      skills: this.selectedSkills,
    };

    if (this.characterId !== null && this.characterId !== 0) {
      this.characterService.update(character).subscribe((response) => {
        console.log('Character updated:', response);
      });
      this.router.navigate(['characters/' + this.characterId]);
    } else {
      this.characterService.create(character).subscribe((response) => {
        console.log('Character created:', response);
      });
      this.router.navigate(['characters']);
    }
  }
}
