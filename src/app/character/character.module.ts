import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

@NgModule({
  declarations: [CharacterComponent, CharacterDetailsComponent],
  imports: [CommonModule, CharacterRoutingModule],
})
export class CharacterModule {}
