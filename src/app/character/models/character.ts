import { Skill } from 'src/app/skills/models/skill';

export interface Character {
  id: number;
  name: string;
  role: string;
  skills: Skill[];
}
