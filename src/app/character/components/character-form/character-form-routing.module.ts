import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterFormComponent } from './character-form.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterFormComponent,
  },
  {
    path: ':id',
    component: CharacterFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterFormRoutingModule {}
