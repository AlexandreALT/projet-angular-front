import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { Skill } from 'src/app/skills/models/skill';
import { Router } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private characterService: CharacterService,
    private skillService: SkillsService
  ) {}

  ngOnInit(): void {
    this.characterForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      skills: [[]],
    });

    this.characterService.getNextCharacterId().subscribe((id) => {
      this.characterForm.addControl(
        'id',
        this.formBuilder.control(id, Validators.required)
      );
    });

    this.characterForm.get('skills')!.patchValue([]);

    this.skills$ = this.skillService.get();
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
      id: this.characterForm.get('id')!.value,
      name: this.characterForm.get('name')!.value,
      role: this.characterForm.get('role')!.value,
      skills: this.selectedSkills,
    };

    this.characterService.create(character).subscribe((response) => {
      console.log('Character created:', response);
    });
    this.router.navigate(['/characters']);
  }
}
