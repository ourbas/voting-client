import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class VoteService {
  constructor(private httpClient: HttpClient) { }

  public getVote(pet: string): Observable<string> {
    return this.httpClient.get<string>(`http://localhost:8080/votes/total/` + pet);
  }

  public addVote(pet: string): void {
    this.httpClient.post(`http://localhost:8080/votes`, {pet});

  }
}
