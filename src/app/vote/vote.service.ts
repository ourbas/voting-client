import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({providedIn: 'root'})
export class VoteService {
  constructor(private httpClient: HttpClient) { }

  public getVote(pet: string): Observable<string> {
    return this.httpClient.get<string>(`${environment.API_HOST}votes/total/` + pet);
  }

  public addVote(pet: string): void {
    this.httpClient.post(`${environment.API_HOST}votes`, {pet} , httpOptions).subscribe();

  }
}
