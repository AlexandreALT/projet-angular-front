import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillFormComponent } from './skill-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillFormRoutingModule } from './skill-form-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SkillFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SkillFormRoutingModule,
    SharedModule,
  ],
  exports: [SkillFormComponent],
})
export class SkillFormModule {}
