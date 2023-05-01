import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillListComponent } from './skill-list.component';
import { SkillListRoutingModule } from './skill-list-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [SkillListComponent],
  imports: [
    CommonModule,
    SkillListRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [SkillListComponent],
})
export class SkillListModule {}
