import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  get(): Observable<Character[]> {
    return this.http.get<Character[]>(
      environment.iutApiBaseUrl + '/characters'
    );
  }

  getById(id: number): Observable<Character> {
    return this.http.get<Character>(
      environment.iutApiBaseUrl + '/characters/' + id
    );
  }
}
