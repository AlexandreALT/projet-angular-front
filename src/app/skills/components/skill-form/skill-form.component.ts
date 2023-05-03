import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from '../../services/skills.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss'],
})
export class SkillFormComponent {
  skillForm!: FormGroup;
  skillId: number;

  constructor(
    private formBuilder: FormBuilder,
    private skillsService: SkillsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.skillId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.skillId !== null && this.skillId !== 0) {
      this.skillsService.getById(this.skillId).subscribe((skill) => {
        const description = (skill.description = unescape(
          skill.description.replace(/&#x27;/g, "'")
        ));
        this.skillForm.patchValue({
          name: skill.name,
          description: description,
        });
      });
    } else {
      this.skillsService.getNextSkillId().subscribe((id) => {
        this.skillForm.addControl(
          'id',
          this.formBuilder.control(id, Validators.required)
        );
      });
    }
  }

  onSubmit(): void {
    const skill: Skill = {
      id: this.skillId,
      name: this.skillForm.get('name')!.value,
      description: this.skillForm.get('description')!.value,
    };

    if (this.skillId !== null && this.skillId !== 0) {
      this.skillsService.update(skill).subscribe((response) => {
        console.log('Skill updated:', response);
      });
      this.router.navigate(['skills']);
    } else {
      this.skillsService.create(this.skillForm.value).subscribe((response) => {
        console.log('Skill created:', response);
      });
      this.router.navigate(['skills']);
    }
  }
}
