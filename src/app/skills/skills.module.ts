import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SkillsComponent, SkillListComponent],
  imports: [CommonModule, SkillsRoutingModule, SharedModule],
})
export class SkillsModule {}
