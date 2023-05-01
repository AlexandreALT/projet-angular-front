import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';

const routes: Routes = [
  { path: '', component: SkillListComponent },
  {
    path: ':id',
    component: SkillsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
