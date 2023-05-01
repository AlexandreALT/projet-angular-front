import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss'],
})
export class SkillFormComponent {
  skillForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private characterService: SkillsService
  ) {}

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.characterService.getNextSkillId().subscribe((id) => {
      this.skillForm.addControl(
        'id',
        this.formBuilder.control(id, Validators.required)
      );
    });
  }

  onSubmit(): void {
    this.characterService.create(this.skillForm.value).subscribe((response) => {
      console.log('Character created:', response);
    });
    this.skillForm.reset();
  }
}
