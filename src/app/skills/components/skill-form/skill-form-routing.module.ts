import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillFormComponent } from './skill-form.component';

const routes: Routes = [
  {
    path: '',
    component: SkillFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillFormRoutingModule {}
