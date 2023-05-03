import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
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

  create(character: Character): Observable<string> {
    return this.http.post<string>(
      environment.iutApiBaseUrl + '/characters',
      character
    );
  }

  delete(id: number): Observable<string> {
    console.log(id);
    return this.http.delete<string>(
      environment.iutApiBaseUrl + '/characters/' + id
    );
  }

  update(character: Character): Observable<string> {
    return this.http.put<string>(
      environment.iutApiBaseUrl + '/characters/' + character.id,
      character
    );
  }

  getById(id: number): Observable<Character> {
    return this.http.get<Character>(
      environment.iutApiBaseUrl + '/characters/' + id
    );
  }

  getNextCharacterId(): Observable<number> {
    return this.get().pipe(
      map((characters) => {
        const maxId = Math.max(...characters.map((c) => c.id));
        return maxId + 1;
      })
    );
  }
}
