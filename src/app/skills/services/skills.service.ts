import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Skill } from '../models/skill';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  get(): Observable<Skill[]> {
    return this.http.get<Skill[]>(environment.iutApiBaseUrl + '/skills');
  }

  create(skill: Skill): Observable<string> {
    return this.http.post<string>(environment.iutApiBaseUrl + '/skills', skill);
  }

  delete(id: number): Observable<string> {
    console.log(id);
    return this.http.delete<string>(
      environment.iutApiBaseUrl + '/skills/' + id
    );
  }

  update(skill: Skill): Observable<string> {
    return this.http.put<string>(
      environment.iutApiBaseUrl + '/skills/' + skill.id,
      skill
    );
  }

  getById(id: number): Observable<Skill> {
    return this.http.get<Skill>(environment.iutApiBaseUrl + '/skills/' + id);
  }

  getNextSkillId(): Observable<number> {
    return this.get().pipe(
      map((skills) => {
        const maxId = Math.max(...skills.map((c) => c.id));
        return maxId + 1;
      })
    );
  }
}
