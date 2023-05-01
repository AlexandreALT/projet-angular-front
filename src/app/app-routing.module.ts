import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./character/character.module').then((m) => m.CharacterModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'add-character',
    loadChildren: () =>
      import(
        './character/components/character-form/character-form.module'
      ).then((m) => m.CharacterFormModule),
  },
  {
    path: 'add-skill',
    loadChildren: () =>
      import('./skills/components/skill-form/skill-form.module').then(
        (m) => m.SkillFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
