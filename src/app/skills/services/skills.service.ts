import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Skill } from '../models/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Skill> {
    return this.http.get<Skill>(environment.iutApiBaseUrl + '/skills/' + id);
  }
}
