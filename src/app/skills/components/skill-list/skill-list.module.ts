import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillListComponent } from './skill-list.component';
import { SkillListRoutingModule } from './skill-list-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [SkillListComponent],
  imports: [CommonModule, SkillListRoutingModule, MatTableModule],
  exports: [SkillListComponent],
})
export class SkillListModule {}
