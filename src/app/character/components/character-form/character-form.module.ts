import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterFormComponent } from './character-form.component';
import { CharacterFormRoutingModule } from './character-form-routing.module';

@NgModule({
  declarations: [CharacterFormComponent],
  imports: [CommonModule, ReactiveFormsModule, CharacterFormRoutingModule],
  exports: [CharacterFormComponent],
})
export class CharacterFormModule {}
